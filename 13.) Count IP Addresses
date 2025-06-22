//Problem :
//Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
//All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

//My solution : 
function ipsBetween(start, end){
  return start.split('.').map((e,i) => end.split('.')[i]*256**(3-i)-e*256**(3-i))
  .reduce((af,now) => af+now);
}
