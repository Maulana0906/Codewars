//Problem :
// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:
// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ) => 100000030

//My solution :
function sumIntervals(inv){
   let result = [];
   inv.sort((a,b) => a[0]-b[0])
   let now = [...inv[0]];
   inv.forEach((e,i) => {
      if(e[0]<= now[1]){
         now[1]= Math.max(now[1],e[1])
      }else{
         result.push(now)
         now = [...e];
      }
   });
   result.push(now)
   return result.map(e => e[1]-e[0]).reduce((af,nw)=> af+nw)
}
