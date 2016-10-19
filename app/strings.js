exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    let count_obj = {}
    let output = []
    let arr = Array.from(str);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] ) {
        count_obj[arr[i]] = 0;
      }
      if (count_obj[arr[i]]) {
        count_obj[arr[i]] += 1
        if (count_obj[arr[i]] <= amount) {
          output.push(arr[i]);
        }
      } else {
        count_obj[arr[i]] = 1
        output.push(arr[i]);
      }
    };

    return output.join('')
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
