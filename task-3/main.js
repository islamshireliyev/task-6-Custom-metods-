const arr = [1, 2, 3, 4];
// arr.forEach(function (item, index, array) {});

// const myForeach = function (array, callback) {
//   for (let i = 0; i < array.lenght; i++) {
//     callback(array[i], i, array);
//   }
// };
// console.log(arr.forEach);

// ----------------------------------------------------------------------------

// Array.prototype.myMap = function (callback) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     let newMappedItem = callback(this[i], i, this);
//     newArray.push(newMappedItem);
//   }
//   return newArray;
// };
// ----------------------------------------------------------------------------

// Array.prototype.myFind = function (callback) {
//   let result;
//   for (let i = 0; i < this.length; i++) {
//     let isFound = callback(this[i], i, this);
//     if (isFound) {
//       result = this[i];
//       break; //stop the loop if find that item
//     }
//   }
//   return result;
// };

// --------------------------------------------------------------------------

// Array.prototype.myReduce = function (callback, initialValue) {
//   for (let i = 0; i < this.length; i++) {
//     initialValue = callback(initialValue, this[i], i, this);
//   }
//   return initialValue;
// };
