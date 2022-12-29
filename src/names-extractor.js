const { removeStopwords, eng, fra } = require('stopword')

const customStopWords = [
  "i'm",
  "we're",
  "hi"
  ]

// check if word is uppercase
const isUpperCase = (word) => {
  const newWord = removeStopwords([word], [...eng, ...fra, ...customStopWords])
  return newWord[0] && newWord[0].charAt(0).match(/[A-Z]/);
}

// check for nicknames ex: Harry "Hank" Smith
const removeNickName = (word) => word.charAt(0) !== '"';

const removeEmpty = (words) => words[0] !== "";

const splitInSentences = (text) => text.replace(/[,;:]/g, ".").split(".");

const splitInWords = (sentence) => sentence.trim().split(/\s/);

// called on last word in name list to remove
// trailing possesive case in english
const cleanName = (word) =>  word.replace(/'s$/,'');

const writeFullName = (pairOfWords) => {
  if (pairOfWords.length === 1) {
    return pairOfWords.toString()
  }
  return `${pairOfWords.slice(0, -1).join(' ')} ${cleanName(pairOfWords[pairOfWords.length - 1])}`;}

const writeFamilyName = (pairOfWords) => `${pairOfWords[pairOfWords.length - 1]}`;

const onlyUnique = (value, index, self) => self.indexOf(value) === index;


const splitInWordsOfSentences = (text) => {
  const sentences = splitInSentences(text);
  return sentences.map(splitInWords).filter(removeEmpty);
};

const groupWordsInPair = (wordsWithoutNickname) => {
  const combinedWords = [];
  let currentName = [];
  for (let i = 0; i < wordsWithoutNickname.length ; i += 1) {
    if (isUpperCase(wordsWithoutNickname[i])){
      currentName.push(wordsWithoutNickname[i])
      if (i === wordsWithoutNickname.length-1){
        combinedWords.push(currentName)
      }
    } else if (currentName.length > 0) {
      combinedWords.push(currentName);
      currentName = [];
    }
  }
  return combinedWords;
};

const getFormattedNames = (writeMode, text) => splitInWordsOfSentences(text)
    .map((words) => {
      const wordsWithoutNickname = words.filter(removeNickName);
      return groupWordsInPair(wordsWithoutNickname)
        .map(writeMode);
    })
    .reduce((accumulator, value) => accumulator.concat(value), [])
    .filter(onlyUnique)

const getFamilyNames = (text) => getFormattedNames(writeFamilyName, text);
const getFullNames = (text) => getFormattedNames(writeFullName, text);

module.exports = {
  getFamilyNames,
  getFullNames,
};
