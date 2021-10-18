"use strict";
// Reduce example
Object.defineProperty(exports, "__esModule", { value: true });
exports.custArray = void 0;
exports.custArray = [5, 50, 100, 200];
const sumArray = exports.custArray.reduce((total, amt) => {
    console.log(total + '-' + amt);
    return total + amt;
});
const avgarr = exports.custArray.reduce((total, amt, index, array) => {
    console.log(total + '-' + amt);
    total += amt;
    if (index == array.length - 1) {
        return total / array.length;
    }
    else {
        return total;
    }
});
console.log(`sum Array ${sumArray}`);
console.log(`avg Array ${avgarr}`);
const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
    total.push(amount * 2);
    return total;
}, []);
console.log(`doubled Array ${doubled}`);
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
const count = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
}, {});
console.log("count fruits");
console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
const removeApple = fruitBasket.reduce((tally, fruit) => {
    if (fruit == 'apple') {
        return tally;
    }
    else {
        tally[fruit] = (tally[fruit] || 0) + 1;
        return tally;
    }
}, {});
console.log("Remove only Apple");
console.log(removeApple);
const removeDuplicate = Array.from(new Set(fruitBasket));
const filterCherry = fruitBasket.filter((x) => x !== "cherry");
console.log("Remove Duplicates");
console.log(removeDuplicate);
console.log("Filter only Cherries");
console.log(filterCherry);
console.log("Slice the array");
const sliceArray = fruitBasket.slice(2, 3);
console.log(sliceArray);
console.log("Array Reduce using for iteration");
const files = ['foo.txt ', '.bar', '   ', 'baz.foo'];
const filePaths = files.reduce((acc, file) => {
    const fileName = file.trim();
    if (fileName) {
        const filePath = `~/cool_app/${fileName}`;
        acc.push(filePath);
    }
    return acc;
}, []);
console.log(filePaths);
console.log("Using Map and filter using for iteration");
const filePaths2 = files
    .map(file => file.trim())
    .filter(Boolean)
    .map(fileName => `~/cool_app/${fileName}`);
console.log(filePaths2);
const smallArray = [0, 2];
const largeArray = Array.from({ length: 10 }, (_, i) => i);
console.log("----------------");
console.log(largeArray);
