module.exports = class EventEmitter {

    constructor() {
        this.events = [];
    }

    on(eventName, callback) {

        if (this.events.some(event => (event.eventName === eventName))) {

            this.events.find(event => {
                (event.eventName === eventName && event.callback === undefined) ? event.callback = callback : null;
            })
        }
        else{
            this.events.push({eventName: eventName, callback: callback});
        }

    }

    emit(eventName, data) {
        this.events.find(event => {
            (event.eventName === eventName) ? (event.callback !== undefined) ? event.callback(data) : null : null;
        })
    }

    removeListener(eventName, callback) {

        this.events.find(event => {
            (event.eventName === eventName && event.callback.toString() === callback.toString()) ? delete event.callback : null;
        })

    }
};
