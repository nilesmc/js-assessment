'use strict';

var exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {

  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let owned = [];
    for (key in obj) {
      if ( obj.hasOwnProperty(key) ) {
        owned.push(key + ': ' + obj[key]);
      }
    }
    return owned;
  }
};
