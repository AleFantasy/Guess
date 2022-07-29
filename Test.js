

function iqTest(numbers) {
    var oddArr = [];
    var evenArr = [];
    var odd = 0;
    var even = 0;
    var numbersArr = numbers.split(" ");
  
    for (var i = 0; i < numbersArr.length; i++) {
      if (numbersArr[i] % 2 === 0) {
        evenArr.push(i + 1);
      } else {
        oddArr.push(i + 1);
      }
    }
  
    if (evenArr.length > oddArr.length) {
      console.log("Most numbers are even");
      console.log("odd number is => " + oddArr[0]);
      return oddArr[0];
    } else {
      console.log("Most numbers are odd");
      console.log("Even number is => " + evenArr[0]);
      return evenArr[0];
    }
  }