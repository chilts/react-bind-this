function bindThis(theThis) {
  var names = Array.prototype.slice.call(arguments).slice(1)
  console.log('names:', names)
  names.forEach(name => {
    theThis[name] = theThis[name].bind(theThis)
  })
}

module.exports = bindThis
