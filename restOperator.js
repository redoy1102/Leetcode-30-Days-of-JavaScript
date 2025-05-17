const numbers = (...rest) => {
  const summation = rest.reduce((sum, cur) => sum + cur, 0);
  console.log(summation);
};

// numbers(1, 2, 3);

const users = {
  name: "John",
  education: {
    degree: "BCSE",
    school: {
      name: "IUBAT",
    },
  },
};

const {
  education: {
    school: { name },
  },
} = users;
console.log(name);
