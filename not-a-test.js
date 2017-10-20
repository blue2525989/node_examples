var collect = require('./collections');

var arr = [];
var i = 0;
// fill array
for (i; i < 10; i++) {
    arr[i] = i;
}
// print array
for (var j = 0; j < 10; j++) {
    console.log(arr[j]);
}

console.log("\n\n");

// these work
console.log(collect.sayHello());
console.log(collect.sayHello('Jason'));
console.log("\n");

collect.printArrayConsole(arr);
console.log("\n");

// find the last idx
console.log(collect.findIdxArray(arr, arr.length-1)+ ' last idx');
console.log("\n");

// insert into end of array
arr = collect.insertEndArray(arr, 33);
// find the new last index
console.log(collect.findIdxArray(arr, arr.length-1) + ' new last idx');
console.log("\n");

// find original item
console.log(collect.findIdxArray(arr, 1) + ' idx 1 before insert');
// insert into any position
arr = collect.insertAtIdxArray(arr, 777, 1);
// find new item
console.log(collect.findIdxArray(arr, 1) + ' idx 1 after insert');

console.log("\n");
collect.printArrayConsole(arr);
console.log("\n");
