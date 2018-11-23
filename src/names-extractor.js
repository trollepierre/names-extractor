// You have to extract all character names from a novel passage. All names are made of a first name followed by a family name.
//
//   You are given a list of all character family names you can encounter.
//   In the first place, you have to implement the function getFamilyNames to extract all last names in a text.
//
//   In the second place, you have to implement the function getFullNames to extract all full names ("first_name last_name") in a text.
//   For this, you must ignore nicknames surrounded by quote marks between first and last names (e.g. Edward "Blackbeard" Teach).
//
// In both functions, elements in the collection must be unique.
//
//   Input example:
//
//   A function to remove punctuation from a text is already provided in the corresponding tab.

const isUpperCase = word => word === word.charAt(0).toUpperCase() + word.substr(1);
const removeNickName = word => word.charAt(0) !== '"';
const removeEmptySentences = words => words[0] !== '';
const splitInSentences = text => text.replace(/[,;:]/g, '.').split('.');
const splitInWords = sentence => sentence.trim().split(' ');
const isFullName = pairOfWords => isUpperCase(pairOfWords[0]) && isUpperCase(pairOfWords[1]);
const writeFullName = pairOfWords => `${pairOfWords[0]} ${pairOfWords[1]}`;
const writeFamilyName = pairOfWords => `${pairOfWords[1]}`;
const onlyUnique = (value, index, self) => self.indexOf(value) === index;

const splitInWordsOfSentences = (text) => {
  const sentences = splitInSentences(text);
  return sentences
    .map(splitInWords)
    .filter(removeEmptySentences);
};

const groupWordsInPair = (wordsWithoutNickname) => {
  const combinedWords = [];
  for (let i = 0; i < wordsWithoutNickname.length - 1; i += 1) {
    combinedWords.push([wordsWithoutNickname[i], wordsWithoutNickname[i + 1]]);
  }
  return combinedWords;
};

const getFormattedNames = (writeMode, text) => splitInWordsOfSentences(text)
  .map((words) => {
    const wordsWithoutNickname = words.filter(removeNickName);
    return groupWordsInPair(wordsWithoutNickname)
      .filter(isFullName)
      .map(writeMode);
  })
  .reduce((accumulator, value) => accumulator.concat(value), [])
  .filter(onlyUnique);

const getFamilyNames = text => getFormattedNames(writeFamilyName, text);
const getFullNames = text => getFormattedNames(writeFullName, text);

module.exports = {
  getFamilyNames,
  getFullNames,
};
