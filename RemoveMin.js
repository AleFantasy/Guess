// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    
    var answerArr =[];
    var smallest = numbers[0];
    
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
  
    console.log(smallest);
  
    for (var j = 0; j < numbers.length; j++) {
      if (j !== numbers.indexOf(smallest)) {
        answerArr.push(numbers[j]);
      } 
     
    }
    return answerArr ;
   
  }