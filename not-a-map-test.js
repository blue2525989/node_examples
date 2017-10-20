var collect = require("./collections.js");

var map = {
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5
};

collect.printMapConsole(map);
console.log('\n');

map = collect.insertEndMap(map, 'six-thousand', 6000);

console.log(collect.findValueMap(map, 'six-thousand') + ' find value by key');
console.log('\n');

collect.printMapConsole(map);
console.log('\n');

console.log(collect.findKeyMap(map, 6000));
console.log('\n');

map = collect.insertEndMap(map, 'two-thousand', 2000);

console.log(collect.findValueMap(map, 'two-thousand') + ' find value by key');
console.log('\n');
console.log(collect.findKeyMap(map, 2000));
console.log('\n');

collect.printMapConsole(map);
console.log('\n');

map = collect.insertItemToMapAtIdx(map, 'ninety-nine', 99, 0);

collect.printMapConsole(map);
console.log('\n');