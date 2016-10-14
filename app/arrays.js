exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i
      }
    };
    return -1;
  },

  sum: function(arr) {
    let sum = 0
    for (let i of arr) {
      sum += i
    }
    return sum
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr
  },

  truncate: function(arr) {
    arr.pop();
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail: function(arr) {
    arr.shift();
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr
  },

  count: function(arr, item) {
    let counter = 0
    for (let i of arr) {
      if (item == i) {
        counter += 1
      }
    }
    return counter
  },

  duplicates: function(arr) {
    var count_obj = {}
    var dups = []
    for (var i = 0; i < arr.length; i++) {
      if (count_obj[arr[i]]) {
        count_obj[arr[i]] += 1
      } else {
        count_obj[arr[i]] = 1
      }
    };

    for (key in count_obj){
      if (count_obj[key] > 1){
        dups.push(parseInt(key));
      }
    }
    return dups;
  },

  square: function(arr) {
    var squareds = [];

    for (var i = 0; i < arr.length; i++) {
      squareds.push(arr[i] * arr[i]);
    }

    return squareds;

  },

  findAllOccurrences: function(arr, target) {
    var indexes = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        indexes.push(i)
      }
    };
    return indexes
  }
};
