const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

const order = [...fruits];
// console.log(order);

const keys = fruits.map((fruit, index) => Object.keys(fruit));
console.log(keys);
