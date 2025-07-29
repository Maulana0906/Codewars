// Problem :
// The purpose of this kata is to write a program that can do some algebra.
// Write a function expand that takes in an expression with a single, one character variable, and expands it. 
// The expression is in the form (ax+b)^n where a and b are integers which may be positive or negative, x is any single character variable, and n is a natural number.
// If a = 1, no coefficient will be placed in front of the variable. If a = -1, a "-" will be placed in front of the variable.

// The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are the coefficients of the term,
// x is the original one character variable that was passed in the original expression and b, d, and f,
// are the powers that x is being raised to in each term and are in decreasing order.

// If the coefficient of a term is zero, the term should not be included. If the coefficient of a term is one, the coefficient should not be included.
// If the coefficient of a term is -1, only the "-" should be included. If the power of the term is 0, only the coefficient should be included.
// If the power of the term is 1, the caret and power should be excluded.

// Examples:
// expand("(x+1)^2");      // returns "x^2+2x+1"
// expand("(p-1)^3");      // returns "p^3-3p^2+3p-1"
// expand("(2f+4)^6");     // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
// expand("(-2a-4)^0");    // returns "1"
// expand("(-12t+43)^2");  // returns "144t^2-1032t+1849"
// expand("(r+0)^203");    // returns "r^203"
// expand("(-x-1)^2");     // returns "x^2+2x+1"

//My solution :
function expand(expr) {
    let result = '';
    let [cache,n] = expr.split('^');
    if(n==0) return '1'
    let temp = cache.split('').slice(1,cache.length-1);
    let [plus,minus] = [temp.lastIndexOf('+')||-1,temp.lastIndexOf('-')||-1];
    let data = [];
    if(plus>minus){
        data.push(temp.slice(0,plus).join(''));
        data.push(temp.slice(plus+1, temp.length).join(''));
    }else{
        data.push(temp.slice(0,minus).join(''));
        data.push(temp.slice(minus, temp.length).join(''))
    }
    if(data[1]==0){
        let zero = data[0].replace(parseInt(data[0]), parseInt(data[0])**n)
        return (parseInt(data[0]))? zero+'^'+n :data[0]+ '^' +n;
    } 
    let r = 0;
    let combination = 0; 
    for(let i=0; i<=n; i++){
        let [nFaktor,rFaktor,minusFaktor] = [1,1,1];
        for(let p=1; p<=n; p++){
            if(p<=r){rFaktor *= p;}
            if(p<=(n-r)){minusFaktor *=p}
            nFaktor *= p;
        }
        combination = nFaktor/(rFaktor*minusFaktor);

        if(data[0].length>1 && !parseInt(data[0])){
            data[0] = data[0].replace('-','-1')
        }else if(!parseInt(data[0])){
            data[0]= `1`+ data[0]
        }
        let totalTemp = 1;
        totalTemp *= combination * parseInt(data[0])**(n-r) * (data[1]**r)

        if(i>0 && totalTemp >0){totalTemp = `+${totalTemp}`}

        if((n-r)!=0){totalTemp = data[0].replace(parseInt(data[0]), totalTemp) + (((n-r)>1)?`^${n-r}`:'')}

        if(i==0 && (parseInt(totalTemp)==1 || parseInt(totalTemp)==-1)){
            totalTemp = totalTemp.replace('1', '');
        }
        result += totalTemp;
        r+=1;
    }

    return result ;
}
