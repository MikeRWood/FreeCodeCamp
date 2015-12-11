// Bonfire: Check for Palindromes
// Author: @mikerwood
// Challenge: http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function palindrome(str) {
  // Good luck!
  var cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  var revStr = cleanStr.split('').reverse().join('');
  return cleanStr === revStr;
}



palindrome("not a palindrome");