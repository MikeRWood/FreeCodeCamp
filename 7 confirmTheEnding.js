// Bonfire: Confirm the Ending
// Author: @mikerwood
// Challenge: http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function end(str, target) {
  if(str.substr(-1*target.length) === target) {
    return true;
  } else {
      return false;
  }
  return str;
}
end("Bastian", "n");
//true
end("Connor", "n");
//false
end("Walking on water and developing software from a specification are easy if both are frozen", "specification");
//false
end("He has to give me a new name", "name");
//true
end("He has to give me a new name", "me");
//true
end("He has to give me a new name", "na");
//false
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
//false
