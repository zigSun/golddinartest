var MONGO_URL = "mongodb://127.0.0.1:27017/mydb";

var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect(MONGO_URL, { useNewUrlParser: true });

mongoose.connection.on('error', (err) => {
    console.error("Database Connection Error: " + err);
    process.exit(2);
});

mongoose.connection.on('connected', () => {
    console.info("Succesfully connected to MongoDB Database");
});

