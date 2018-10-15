require('./dbinit');

Counter = require('./model/counter.js');


if (process.env["FUNC"] == 'inc') {
    for (var i = 0; i < 50; i++) {
        Counter.findOneAndUpdate({}, { $inc: { counter: 1 } })
            .then(result => console.log(result))
            .catch(err => console.log(`Error : ${err}`));
    }
} else if(process.env["FUNC"] == 'dec') {
    for (var i = 0; i < 50; i++) {
        Counter.findOneAndUpdate({}, { $inc: { counter: -1 } })
            .then(result => console.log(result))
            .catch(err => console.log(`Error : ${err}`));
    }
}