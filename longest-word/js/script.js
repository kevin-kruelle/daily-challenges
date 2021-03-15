let sentence = 'This is a string and I have to find the longest word in this string.'

function longestWord(sen) {
  // code goes here
  let sentenceArr = sen.split(' ').join(',').split('.').join(',').split(',');
  console.log(sentenceArr)
  let word = '';
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].length > word.length) {
      word = sentenceArr[i];
    }
  }
  return word;
}

console.log(longestWord(sentence));
