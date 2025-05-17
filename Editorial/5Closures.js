const createAdd = (a) => {
  return (add = (b) => {
    const sum = a + b;
    return sum;
  });
};

const add5 = createAdd(5);
console.log(add5(2));
