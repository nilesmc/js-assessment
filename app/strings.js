exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    let countObj = {}
    let output = []
    let arr = Array.from(str);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] ) {
        countObj[arr[i]] = 0;
      }
      if (countObj[arr[i]]) {
        countObj[arr[i]] += 1
        if (countObj[arr[i]] <= amount) {
          output.push(arr[i]);
        }
      } else {
        countObj[arr[i]] = 1
        output.push(arr[i]);
      }
    };

    return output.join('')
  },

  wordWrap: function(str, cols) {
    let output = [];
    let words = str.split(' ');
    let currentLine = [];

    for (let i=0; i<words.length; i++) {
      if (!currentLine.length) {
        currentLine.push(words[i]);
      } else {
        let currentLineLetterCount = currentLine.join('').length;
        let lineLengthWithWord = currentLineLetterCount + words[i].length + 1;
        if (lineLengthWithWord <= cols) {
          currentLine.push(' ');
          currentLine.push(words[i]);
        } else {
          currentLine.push('\n');
          output.push(currentLine.join(''));

          currentLine = [];
          currentLine.push(words[i]);
        }
      }
    }

    if (currentLine.length) {
      output.push(currentLine.join(''));
    }

    return output.join('');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
