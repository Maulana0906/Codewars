//Problem :
// In this kata, you will implement cipher functions using utf-8 strings.
// The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" ("the unbreakable cipher")
// The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.
// In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.
// Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.
// The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.
// Visual representation:
// "my secret code i want to secure"  // message
// "passwordpasswordpasswordpasswor"  // key
// Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

// Examples
// alphabet = "abcdefghijklmnopqrstuvwxyz"
// key      = "password"

// "codewars" --> encode -->  "rovwsoiv"
// "laxxhsj"  --> decode -->  "waffles"
// Note: any character not in the alphabet must be left alone. For example in the above case:

// "CODEWARS"  --> encode -->  "CODEWARS"

// My solution :
  function VigenèreCipher(key, abc) {
    const arrKey = key.split('');
    const arrAbc = abc.split('');
    this.encode = function (str) {
    let [result,count] = [[],0];
    str.split('').forEach((e,i) => {
      if(arrAbc.includes(e)){
        let s = arrKey[i%arrKey.length];
        arrAbc.forEach((el,x)=> {
          if(el==e){count+=x}
          if(el==s){count+=x}
        })
        result.push(arrAbc[count%arrAbc.length]);
      }else{
        result.push(e);
      }
    count =0;
    });
    return (result.includes(undefined))?str: result.join('');
  };
  this.decode = function (str) { 
    let count = 0; 
    let result = [];  
    str.split('').forEach((e,i)=> {
      if(arrAbc.includes(e)){
        let s = arrKey[i%arrKey.length];
        arrAbc.forEach((el,x)=> {
          if(el==e){count+=x}
          if(el==s){count-=x}
        })
        if(count<0){count = arrAbc.length+count};
        result.push(arrAbc[count]);
      }else{
        result.push(e)
      }
      count = 0;
    })
    return (result.includes(undefined))?str: result.join('');
  };
  }
