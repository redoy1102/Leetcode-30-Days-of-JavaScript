// Example: 1
<<<<<<< HEAD
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(`Accumulator: ${accumulator}, Current value: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log("Summation:", sum);
=======
// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((accumulator, currentValue, currentIndex, array) => {
//   console.log(`Accumulator: ${accumulator}, Current value: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);

// console.log("Summation:", sum);

// Example: 2

const nums = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const merge = nums.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);
>>>>>>> 9e042c7a68ecff4458ee5e2d37eb254abfb42ddc
