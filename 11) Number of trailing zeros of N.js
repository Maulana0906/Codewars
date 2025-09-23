//problem :
//Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//N! = 1 * 2 * 3 *  ... * N
//Be careful 1000! has 2568 digits...

//My solution :
function zeros (n) {
  let cache = 0;
  for(let i =1; i<=n; i++){
    if(Math.floor(n/(5**i))!==0){
        cache += Math.floor(n/(5**i));
    }else{
      break;
    }
  }
  return cache
}
