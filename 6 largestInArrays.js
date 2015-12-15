+// Bonfire: Return Largest Numbers in Arrays
+// Author: @mikerwood
+// Challenge: http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays
+// Learn to Code at Free Code Camp (www.freecodecamp.com)

function largestOfFour(arr) {
  var largestArr = [];
  for (var i=0; i < arr.length; i++) {
    largestNum = 0;
    for (var k=0; k < arr[i].length; k++) {
      if(arr[i][k] > largestNum)
        largestNum = arr[i][k];
    largestArr[i] = largestNum;    
    }
  }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
