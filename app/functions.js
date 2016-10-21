exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {

  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return arg => str + ', ' + arg;
  },

  makeClosures: function(arr, func) {
    var funcs = [];

    let makeFunc = val => {
      return () => { return func(val); };
    };

    for (let i = 0; i < arr.length; i++) {
      funcs.push(makeFunc(arr[i]));
    }

    return funcs;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    let sum = 0;

    for (let i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }

};
