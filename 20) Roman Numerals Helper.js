// Problem
// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

// 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
// 2008 is written as 2000=MM, 8=VIII; or MMVIII
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
//   86 -> "LXXXVI"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "LXXXVI"  ->   86
// "I"       ->    1
// Help
// +--------+-------+
// | Symbol | Value |
// +--------+-------+
// |    M   |  1000 |
// |   CM   |   900 |
// |    D   |   500 |
// |   CD   |   400 |
// |    C   |   100 |
// |   XC   |    90 |
// |    L   |    50 |
// |   XL   |    40 |
// |    X   |    10 |
// |   IX   |     9 |
// |    V   |     5 |
// |   IV   |     4 |
// |    I   |     1 |
// +--------+-------+

// My solution :
class RomanNumerals {
  static toRoman(num) {
    this.temp = (num>=1000)?1000 :(num<1000&num>=100)?100 :(num<100&num>=10)?10:1;
    this.data =[[1,'I'], [4,'IV'], [5,'V'], [9,'IX'], [10, 'X'],
                [40, 'XL'], [50, 'L'], [90, 'XC'], [100, 'C'],
                [400, 'CD'], [500, 'D'], [900, 'CM'], [1000, 'M']];
    let c = Math.floor(num/this.temp);
    let s = [];
    if(c>=1 && c<=3){
        for(let i=0; i<c; i++){
            s.push(this.temp);
        }
    }else if(c>=6 && c<=8){
        s.push(5*this.temp);
        for(let i=5; i<c; i++){
            s.push(this.temp);
        }
    }else{s.push(c*this.temp)}
    return s.reduce((ac,cr) =>{
        let cache = '';
        for(let a of this.data){
            (a.includes(cr)) ? cache = a[1] :'';
        }
        return ac+cache;
    },'') + ((num-(c*this.temp)!=0)?RomanNumerals.toRoman(num-(c*this.temp)):'');
       
        
  }

  static fromRoman(str) {
    let result = [];
    let check = 0;
    let value = str.split('');
    let data =[[1,'I'], [4,'IV'], [5,'V'], [9,'IX'], [10, 'X'],
                [40, 'XL'], [50, 'L'], [90, 'XC'], [100, 'C'],
                [400, 'CD'], [500, 'D'], [900, 'CM'], [1000, 'M']];
    value.forEach((e,i) => {
        if(e=='I' || e=='X' || e=='C'){
            for(let a of data){
                if(a.includes(`${e}${value[i+1]}`)){
                    result.push(a[0])
                    check = i+2;
                } 
            }
        }
        if(check===0 || check<=i){
            for(let b of data){
                if(b.includes(e)){
                    result.push(b[0])
                } 
            }
        }
    });
    return result.reduce((ar,cr) => ar+cr);
  }
}

