Problem :
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

//My solution :
function score(dice) {
  let temp = {};
  let result = 0;
  dice.forEach((e, i) => {
    temp[e] ? temp[e].push(e) : (temp[e] = [e]);
  });
  let values = function (arr) {
    arr.forEach(e => {
      if (temp[e].length >= 3) {
        e == 1 ? (result += e * 1000) : (result += e * 100);
        temp[e].splice(0, 3);
        if (temp[e].length != 0) {
          values([e]);
        }
      } else if (e==5 || e==1){
        (e == 5) ? result += 50 :result += 100;
        temp[e].splice(0, 1);
        (temp[e].length != 0) ? values([e]) :'';
      }
    })
  }
  values(Object.keys(temp));
  return result;
}
