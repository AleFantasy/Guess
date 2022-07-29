// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function expression(num , oper){
    return !oper ? num :oper(num);
   }
   
   function zero(oper)  {return expression (0,oper);}
   function one(oper)   {return expression (1,oper);}
   function two(oper)   {return expression (2,oper);}
   function three(oper) {return expression (3,oper);}
   function four(oper)  {return expression (4,oper);}
   function five(oper)  {return expression (5,oper);}
   function six(oper)   {return expression (6,oper);}
   function seven(oper) {return expression (7,oper);}
   function eight(oper) {return expression (8,oper);}
   function nine(oper)  {return expression (9,oper);}
   
   function plus(x)      {return (y)=> x + y ;}
   function minus(x)     {return (y)=> y - x ;}
   function times(x)     {return (y)=> x * y ;}
   
   function dividedBy(x) {return (y)=> Math.floor ( y / x );}