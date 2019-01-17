/* first way*/
var numbers = [5,10,30,40,60,180,90,80];
const lenth1 = numbers.length;
var result = [];

for(var i = 0; i < lenth1;i++){
  var maxNumber = Math.max(...numbers);
  result.push(maxNumber);
  numbers.splice(numbers.indexOf(maxNumber), 1);
}

console.log(result[1]);

/* second way */

var arr = [1,2,3,4,5,6,8,99,100,200,199];
  
var biggest = -Infinity;
var next_biggest = -Infinity;

for (var i = 0, n = arr.length; i < n; ++i) {
    if (arr[i] > biggest) {
        next_biggest = biggest;
        biggest = arr[i];
    } else if (arr[i] < biggest && arr[i] > next_biggest) {
        next_biggest = arr[i]; 
    }
}

console.log(next_biggest);