// You are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    text = text.toLowerCase();
    var textArr = text.split("");
    
    for (i = 97, a = ""; i < 123; ) { // alphabet
      a += String.fromCharCode(i++);
    }
      
    //console.log(textArr); 
    //console.log(a);
  
  return textArr.map(function(char){
      return a.indexOf(char) + 1;
    }).filter(function(num){
      return num > 0;
    }).join(' ');
    }