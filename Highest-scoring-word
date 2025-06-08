//Problem : 
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// My solution :
function high(x){
  let value = [];
  let result = [0, ''];
  x.split(' ').forEach((el,i) => {
    let cache = 0;
      el.split('').forEach(e => {
          for(var i = 97; i<=122; i++){
              if(e === String.fromCharCode(i)){
                  cache += (i-96);
                }
            }
        })
    value.push(cache)
        if(value[i] > result[0]){
            result[0] = value[i];
            result[1] = el;
        }

    })
    return result[1];
}
