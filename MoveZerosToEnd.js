// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
    let zero = [];
    let notzero = [];
    let full = [];
    
      for (let i =0; i <= arr.length-1; i++){
        if (arr[i] === 0){
          zero.push(arr[i])
          }
        else{ 
          notzero.push(arr[i])
        }
      }
    full = notzero.concat(zero)
    return full
  }