//Problem :
//Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array,
//with the value 0 representing an unknown square.
//The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and 
//test possibilities on unknowns) and can be solved with a brute-force approach.
//For Sudoku rules, see the Wikipedia article.
//var puzzle = [
//            [5,3,0,0,7,0,0,0,0],
//            [6,0,0,1,9,5,0,0,0],
//           [0,9,8,0,0,0,0,6,0],
//            [8,0,0,0,6,0,0,0,3],
//            [4,0,0,8,0,3,0,0,1],
//            [7,0,0,0,2,0,0,0,6],
//            [0,6,0,0,0,0,2,8,0],
//            [0,0,0,4,1,9,0,0,5],
//           [0,0,0,0,8,0,0,7,9]];

//sudoku(puzzle);
/* Should return
//[[5,3,4,6,7,8,9,1,2],
//[6,7,2,1,9,5,3,4,8],
//[1,9,8,3,4,2,5,6,7],
//[8,5,9,7,6,1,4,2,3],
//[4,2,6,8,5,3,7,9,1],
//[7,1,3,9,2,4,8,5,6],
//[9,6,1,5,3,7,2,8,4],
//[2,8,7,4,1,9,6,3,5],
//[3,4,5,2,8,6,1,7,9]];

//My solution : 
function sudoku(puzzle){
    let result = [...puzzle];
    result.forEach((e,p)=> {
        let row = [...result[p]];
        e.forEach((el,i)=> {
            let col = result.map(x => x[i]);
            let numberNow = (i==0)?1:(e[i-1]+1)%10;
            let temp = (numberNow==10)?1:numberNow;
            if(el==0){
                while(col.includes(temp) || row.includes(temp)){
                    temp=(temp==9)?1:temp+1;
                }
            result[p][i]=temp
            }
        })
    })
    return result;
}
