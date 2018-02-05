var assert = require('assert')

function Plan (count, done) {
  this.done = done
  this.count = count
}

Plan.prototype.ok = function (expression, message) {
  if (expression) {
    assert(expression, message)
  }

  if (this.count === 0) {
    assert(false, 'Too many assertions called')
  } else {
    this.count--
  }

  if (this.count === 0) {
    this.done()
  }
}

module.exports = Plan
