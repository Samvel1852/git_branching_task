/*
Write a function that makes the first number as large as possible by
swapping out its digits for digits in the second number.
maxPossible(9328, 456) ➞ 9658
9658 is the largest possible number built from swaps from 456.
3 replaced with 6 and 2 replaced with 5.
maxPossible(523, 76) ➞ 763
maxPossible(9132, 5564) ➞ 9655
maxPossible(8732, 91255) ➞ 9755
*/

function maxPossible(number1, number2) {
  let num1 = String(number1).split("");
  let num2 = String(number2).split("");
  num2.sort((a, b) => b - a);
  //console.log(num1, num2);
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] < num2[0]) {
      num1[i] = num2[0];
      num2.shift();
    }
  }
  console.log(num1.join(""));
}

maxPossible(523, 76); //➞ 763
maxPossible(9132, 5564); //➞ 9655
maxPossible(8732, 91255); //➞ 9755
