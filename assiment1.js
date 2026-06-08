@@ -0,0 +1,38 @@
// map() square numbers

let nums = [1, 2, 3, 4,5];

let result = nums.map(n => n * n);

console.log(result);

// filter() 
let even = nums.filter(n => n % 2 == 0);

console.log(even);

// reduce() sum 

let sum = nums.reduce((a, b) => a + b);

console.log(sum);

// students marks

let marks = [70, 85, 90, 60,99];

let high = marks.filter(m => m > 80);

console.log(high);

// maximum number

let max = nums.reduce((a, b) => a > b ? a : b);

console.log(max);

// add 5 to every element

let add = nums.map(n => n + 5);

console.log(add);
