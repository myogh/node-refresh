const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('request', () => console.log('hi world'));
customEvent.on('request', () => console.log('hello'));

customEvent.emit('request');