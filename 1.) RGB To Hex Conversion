//Problem:
//Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
//Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

//My solution :
function rgb(r, g, b) {
    let arr = [r,g,b]
    let result= '';
    function check(x){
        return x.length>1 ? x : 0+x;
    }
    arr.forEach(e => {
        let x = e<0 ? 0 : e;
        if(x === 0 || e>255){ 
            result += check(x === 0 ? '00': (255).toString(16));
        } else {
            result += check(x.toString(16))
        }
    }) 
  return result.toUpperCase();
}
