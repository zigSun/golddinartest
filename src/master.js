var cluster = require('cluster');

var incWorkerRoleEnv = { FUNC : "inc" };
var decWorkerRoleEnv = { FUNC: "dec" };

cluster.on('disconnect', (worker, code, signal) => {
    console.log(`Worker ${worker.id} died`);
});

cluster.on('online', (worker) => {
    console.log(`Worker ${worker.id} running`);
});


    cluster.fork(incWorkerRoleEnv);
    cluster.fork(incWorkerRoleEnv);

    cluster.fork(decWorkerRoleEnv);
    cluster.fork(decWorkerRoleEnv);