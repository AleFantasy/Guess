// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.


function diamond(n){
    if (n < 0 || !(n % 2)) return null; 
    const mid = Math.floor(n / 2);
    
    return Array.apply(null, {length: n})
        .map((el, index) => {
          const indent = Math.abs(index - mid);
          const numberOfAsterisks = n - indent * 2;
          return Array(indent + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
        })
        .join('\n') + '\n';
  }