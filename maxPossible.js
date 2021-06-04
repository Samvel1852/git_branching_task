// Write a function that makes the first number as large as possible by
// swapping out its digits for digits in the second number.
// maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.

function maxPossible(number1, number2) {
  let num1 = String(number1).split("");
  let num2 = String(number2).split("");
  let resArr = [];
  let index = 0;
  let tempnumb;
  for (let i = 0; i < num1.length; i += 1) {
    let counter = 0;
    for (let j = 0; j < num2.length; j += 1) {
      if (num1[i] < num2[j]) {
        counter += 1;
        num1[i] = num2[j];
        index = j;
        console.log("num2::", num2[j]);
      }
      tempnumb = num2[j];
    }
    resArr.push(tempnumb);
    if (!counter) {
      resArr.push("num1::", num1[i]);
      console.log(num1[i]);
    } else {
      num2.splice(index, 1);
    }
  }

  resArr.push(num1.slice(resArr.length));

  return resArr.join("");
}

console.log(maxPossible(523, 76)); // 763
console.log(maxPossible(9132, 5564)); // 9655
console.log(maxPossible(8732, 91255)); // 9755
