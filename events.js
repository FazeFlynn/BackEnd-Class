// var events = require('events')
// const { listenerCount } = require('process')

// let eventEmitter = new events.EventEmitter()

// eventEmitter.on('myevent1', () => {
//     console.log('event triggered')
// })

// eventEmitter.addListener()

// listenerCount()


// -=============================

var events = require('events');
const { listenerCount } = require('events'); // Corrected: Should come from 'events', not 'process'

let eventEmitter = new events.EventEmitter();

// Adding a listener for 'myevent1'
eventEmitter.on('myevent1', () => {
    console.log('event triggered');
});

// Corrected: You need to call 'addListener' with the event and a callback function
eventEmitter.addListener('myevent1', () => {
    console.log('Another event listener added');
});

// Emitting the 'myevent1' event to trigger the listeners
eventEmitter.emit('myevent1');

// Getting the listener count for 'myevent1'
console.log(listenerCount(eventEmitter, 'myevent1')); // Logs the number of listeners for 'myevent1'
