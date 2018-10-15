var MONGO_URL = "mongodb://127.0.0.1:27017/mydb";
var extMONGO_URL = "mongodb://gold:dinartest1@ds251727.mlab.com:51727/golddinartest";

var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect(extMONGO_URL, { useNewUrlParser: true });

mongoose.connection.on('error', (err) => {
    console.error("Database Connection Error: " + err);
    process.exit(2);
});

mongoose.connection.on('connected', () => {
    console.info("Succesfully connected to MongoDB Database");
});

