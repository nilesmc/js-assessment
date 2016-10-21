'use strict';

var exports = typeof window === 'undefined' ? global : window;


exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    let sum = 0;
    for (let i of arr) {
      sum += i;
    }
    return sum;
  },

  remove: function(arr, item) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        new_arr.push(arr[i]);
      }
    }
    return new_arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let counter = 0;
    for (let i of arr) {
      if (item == i) {
        counter += 1;
      }
    }
    return counter;
  },

  duplicates: function(arr) {
    let count_obj = {};
    let dups = [];
    for (let i = 0; i < arr.length; i++) {
      if (count_obj[arr[i]]) {
        count_obj[arr[i]] += 1;
      } else {
        count_obj[arr[i]] = 1;
      }
    }

    for (let key in count_obj) {
      if (count_obj[key] > 1) {
        dups.push(parseInt(key));
      }
    }
    return dups;
  },

  square: function(arr) {
    let squareds = [];

    for (let i = 0; i < arr.length; i++) {
      squareds.push(arr[i] * arr[i]);
    }

    return squareds;

  },

  findAllOccurrences: function(arr, target) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        indexes.push(i);
      }
    }
    return indexes;
  }
};
