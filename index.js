// Import stylesheets
import './style.css';

// Write Javascript code!

// To find duplicate values and index from Array

// const arr = [3, 2, 4, 5, 1, 3, 1];
// const indices = [];
// const res = [];

// const duplicates = arr.filter((item, index) => {
//   if (arr.indexOf(item) !== index){
//     res.push(item);
//     res.push(index);
//   }
//   return arr.indexOf(item) !== index;
// });

// // console.log(duplicates);
// // console.log(indices);

// let keyValueArr = indices.reduce((result, value, index) => {
//     result[value] = duplicates[index];
//     return result;
//   }, {});

//   console.log(res);

// To find min and max values from Array
// const arry = [1, 2, 1, 3, 4, 3, 5];
// console.log(Math.min(...arry))
// console.log(Math.max(...arry))

// To reverse string
// const word = "hello";
// console.log(word.split("").reverse().join(""));

// To reverse array
// const strArr = ["q", "w", "e", "r", "t", "y"];
// console.log(strArr.reverse());

// To sort array
// const strArr = ['q', 'w', 'e', 'r', 't', 'y'];
// console.log(strArr.sort());
// const numArr = [1, 9, 4, 8, 5, 2, 6, 1, 1, 1, 0, 0, 0];
// const srtArr = numArr.sort((a, b) => {
//   return a - b;
// });
// console.log(srtArr);

// To count the occurances
// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};

// for (const num of arr) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }
// console.log(counts);

// Sum of Array
// const arr = [5, 2, 3, 4, 1];
// const sum = arr.reduce((acc, val) => {
//   return acc + val;
// })
// console.log(sum);

// Getting keys from object
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   key4: 'value4'
// }
// let keys = Object.keys(obj);
// let values = Object.values(obj);
// console.log(keys, values)

// To delete a entry from object
// var student = {
//   name : "David",
//   sclass : "VI",
//   rollno : 12
// };
// console.log(student);
// delete student.rollno;
// console.log(student);

// Title case
// function titleCase(str) {
//   var splitStr = str.toLowerCase().split(' ');

//   for (var i = 0; i < splitStr.length; i++) {
//     splitStr[i] =
//       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   return splitStr.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));

// Map
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map((num) => {
//   return num * 10
// })

// console.log(newArr);

// const keyArr = ["assignee", "shortDesc"];
// const valArr = ["Tom", "testDesc"];

// let keyValueArr = keyArr.reduce((result, value, index) => {
//   result[value] = valArr[index];
//   return result;
// }, {});

// console.log(keyValueArr);

// Counting the occurrences / frequency of array elements
// =====================================================

// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// const counts = {};

// for (let num of arr) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }
// console.log(counts);

//  Finding the max of an object
// =============================

// const values = Object.values(counts);
// console.log(Math.max(...values));

// Finding the max value of an attribute in an array of objects
// ============================================================

// var objects = [{ x: 3 }, { x: 1 }, { x: 2 }];
// const max = objects.reduce((prev, current) => {
//   return prev.x > current.x ? prev : current;
// });

// console.log(max);
