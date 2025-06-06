let value = [
    {nama : 'maulana', umur : 20},
    {nama : 'reza', umur : 19},
    {nama : 'revaldi', umur : 21}];

let fragment = `
    <div class="contain"> 
        <ul>
        ${value.map(e => 
            `<li> Nama : ${e.nama}</li>
            <li> Umur : ${e.umur}</li>`
        ).join('')}
        </ul>
    </div>
`;
document.body.innerHTML = fragment

// function solution(str){
//     let result = [];
//     let arr = str.split('');
//     let cache = 0;
//     arr.forEach(e => {
//        if(result.length == 0){
//         result.push(e);
//        } else if(result.length >0){
//         if(result[cache].length <2){
//             result[cache] +=e;
//         }else{
//             result.push(e)
//             cache +=1;
//         }
//        }
//     });
//     console.log(result)
// }
// solution('abcdef')

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
high('aldi mau ke sekolah zzzz');