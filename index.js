process.stdout.isTTY = true;

var cluster = require('cluster');

if (cluster.isMaster) {
    require('./src/master');
} else {
    require('./src/worker');
}