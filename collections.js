/**
 * Say hello function.
 **/
/* exports allows this function to be imported... */
exports.sayHello = function(name) {
    if (name == null) {
        name = 'Node.js world!';
    }
    return 'Hello ' + name;
}

/**
 *  print array
 */
exports.printArrayConsole = function(arr) {
    var len = arr.length;
    var i = 0;
    for (i; i < len; i++) {
        console.log(arr[i]);
    }
}

/**
 * return idx of array
 */
exports.findIdxArray = function(arr, idx) {
    var item = arr[idx];
    return item;
}

// not surer whether to make a void function or not

/**
 * insert at end of array
 */
exports.insertEndArray = function(arr, item) {
    var len = arr.length-1;
    arr[len+1] = item;
    return arr;
}

/**
 * insert at index
 * returns new array
 */
exports.insertAtIdxArray = function(arr, item, idx) {
    var newArr = [];
    var j = 0;
    for (j; j < idx; j++) {
        newArr[j] = arr[j];
    }
    newArr[j] = item;
    j++;
    for (j; j <= arr.length; j++) {
        newArr[j] = arr[j-1];
    }

    return newArr;
}

/* trying to make a map/dict implementation */

/**
 * print map to console
 */
exports.printMapConsole = function(map) {
    var keyArr = Object.keys(map);
    var i = 0;
    var len = keyArr.length;
    for (i; i < len; i++) {
        console.log('Key: ' + keyArr[i] + ' Value: ' + map[keyArr[i]] + '\n');
    }
}

/**
 * add item to map
 */
exports.insertEndMap = function(map, key, value) {
    map[key] = value;
    return map;
}

/**
 * find value
 */
exports.findValueMap = function(map, key) {
    return map[key];
}

/**
 * find key
 */
exports.findKeyMap = function(map, value) {
    var keyArr = Object.keys(map);
    var i = 0;
    var len = keyArr.length;
    for (i; i < len; i++) {
        if (map[keyArr[i]] == value) {
            return keyArr[i];
        }
    }
}

/**
 * insert key/value int map at idx
 */
exports.insertItemToMapAtIdx = function(map, key, value, idx) {
    var keyArr = Object.keys(map);
    var newMap = {};
    var i = 0;
    var len = keyArr.length;
    for (i; i < idx; i++) {
        newMap[keyArr[i]] = map[keyArr[i]];
    }
    newMap[key] = value;
    //i += 2;
    for (i; i < len; i++) {
        newMap[keyArr[i]] = map[keyArr[i]];
    }
    return newMap;
}

