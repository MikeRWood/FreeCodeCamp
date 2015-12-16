// Bonfire: Find the Longest Word in a String
// Author: @mikerwood
// Challenge: http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function findLongestWord(str) {
  var wordarray = str.split(' ');
  var maxLength = 0;
  for (i=0; i < wordarray.length; i++)
    if(wordarray[i].length > maxLength) {
      maxLength = wordarray[i].length;
    }
  
  return maxLength;
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
