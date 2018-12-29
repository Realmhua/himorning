const cluster = require('cluster');
const http = require('http');
const numCpus = require('os').cpus().length;

if (cluster.isMaster) {
    console.log('[Master] start master');

    for (let i = 0; i < numCpus; i++) {
        let wk = cluster.fork();
        wk.send('[master say] hi workder ' + wk.id);
    }

    cluster.on('fork', worker => console.log('[Master] fork worker ' + worker.id));
    cluster.on('online', worker => console.log('[Master] online worker ' + worker.id));
    cluster.on('listening', (worker, address) =>
        console.log('[Master] listening worker ' + worker.id + ', pid:' +
            worker.process.pid + ', address:' + address.address + ', port:' + address.port));
    cluster.on('disconnect', worker => console.log('[Master] disconnect worker ' + worker.id));
    cluster.on('exit', (worker, code, signal) => console.log('[Master] exit worker ' + worker.id + ' died'));

    function eachWorker(callback) {
        for (let id in cluster.workers) callback(cluster.workers[id]);
    }
    setTimeout(() => {
        eachWorker(worker => worker.send('[master say again] I am mater, you are worker ' + worker.id));
    }, 3000);

    Object.keys(cluster.workers).forEach(id => {
        cluster.workers[id].on('message', msg => console.log('[master RECEIVE] ' + msg));
    });
} else if (cluster.isWorker) {
    console.log('[Worker] start worker ...' + cluster.worker.id);
    process.on('message', msg => {
        console.log('----------------[Worker] ' + msg);
        process.send('*****worker responsed with: ' + cluster.worker.id + ' received!');
    });
    http.createServer((req, res) => {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.end('worker ' + cluster.worker.id + ', pid ' + process.pid);
    }).listen(7000);
}