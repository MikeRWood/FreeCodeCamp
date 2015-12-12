// Bonfire: Title Case A Sentence
// Author: @mikerwood
// Challenge: http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence
// Learn to Code at Free Code Camp (www.freecodecamp.com)
function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  for (i=0; i < words.length; i++){
    var firstChar = words[i].charAt(0);
    words[i] = words[i].replace(words[i].charAt(0), firstChar.toUpperCase());
  }
  var sentence = words.join(' ');
  return sentence;
}
titleCase("I'm a little tea pot");
//I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt"); 
//Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
//Here Is My Handle Here Is My Spout
