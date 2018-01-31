var bindThis = require('.')

var a = {
  count : 0,
  handleSomething : function(msg) {
    this.count++
    console.log(msg + ' : ' + this.count)
  },
}

a.handleSomething('One')
a.handleSomething('Two')

bindThis(a, 'handleSomething')

setTimeout(a.handleSomething, 100)
setTimeout(a.handleSomething.bind(a, 'Three'), 200)

doSomethingAfterOneSec(a.handleSomething)

function doSomethingAfterOneSec(fn) {
  setTimeout(function() {
    fn('Yo!')
  }, 1000)
}
