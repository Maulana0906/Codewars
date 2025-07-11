//Problem :
//Complete the function that
//accepts two integer arrays of equal length
//compares the value each member in one array to the corresponding member in the other
//squares the absolute value difference between those two values
//and returns the average of those squared absolute value difference between each member pair.

//My solution : 
const solution = function(x, y) {
    return x.map((e,i) => Math.abs(y[i]-e)*Math.abs(y[i]-e))
    .reduce((af,now)=> af+now)/x.length
}
