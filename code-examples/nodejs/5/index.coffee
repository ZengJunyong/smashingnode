EventEmitter = require('events').EventEmitter
e = new EventEmitter

e.on 'event', ->
  console.log 'event called'

e.emit 'event'