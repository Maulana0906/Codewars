//problem :
// make a palindrome function and sum of digit

// solution
function basicRekursif(s){
  if(s<0) return s
  let y = Math.floor(s/10);
  let sum = s%10;
  if(y>=10){
    sum += basicRekursif(y);
  }else{
    sum += y;
  }
  return sum;
}
function palindrome(x){
  function inner(m){
    let s = m.split('');
    let result ='';
    result += s[m.length-1];
    s.pop();
    if(s.length>0){
      result += inner(s.join(''))
    }
    return result;
  }
  return x==inner(x)
}
