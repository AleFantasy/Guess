//a function that will add numbers together when called in succession.

function add(n){
    let x = 0 ;
    
    let fn = (x) => add(n + x);
    
    fn.valueOf = () => n ;
    
    return fn ;
  }