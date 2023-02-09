interface TypeOfEvents {
    _events: any,
    dispatch: (key: string | number, data?: any) => void
    on: (key: string | number, callback: any) => void
    off: (key: string | number) => void
    flush: () => void
}

const EventEmitter: TypeOfEvents = {
    _events: {},
    dispatch: function (event: string | number, data: any) {
        if (!this._events[event]) return;
        this._events[event].forEach((callback: (arg0: any) => any) => callback(data))
    },
    on: function (event: string | number, callback: any) {
        if (!this._events[event]) this._events[event] = [];
        this._events[event].push(callback);
    },
    off: function (event: string | number) {
        if (!this._events[event]) return;
        delete this._events[event];
    },
    flush: function (){
        Object.keys(this._events).forEach(eventName => {
            if (this._events[eventName]) {
                delete this._events[eventName];
            }
        })
    },
};

(<any>window).EventEmitter = EventEmitter || {};

export default EventEmitter;

