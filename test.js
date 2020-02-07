const EventEmitter = require("./EventEmitter");

let eventEmitter = new EventEmitter;

eventEmitter.on("logIt",(string) => {
    console.log(string);
});

eventEmitter.emit("logIt","Hello world");

console.log(eventEmitter);

eventEmitter.removeListener("logIt",(string) => {
    console.log(string);
});

console.log(eventEmitter);

eventEmitter.emit("logIt","Hello world");

eventEmitter.on("logIt",(string) => {
    console.log(string);
});

console.log(eventEmitter);

eventEmitter.on("takeFirst",(array) => {
    console.log(array[0]);
});

eventEmitter.emit("takeFirst",[33,35,6]);


