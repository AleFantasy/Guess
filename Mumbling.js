// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let sArr =s.split('');
    let outputArr = [];
  for (let i=0; i<sArr.length;i++){
   let str = sArr[i].repeat(i+1);
   let capS = str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
   outputArr.push(capS);
   }
   return outputArr.join("-");
    
  }