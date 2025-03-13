const callSum = () => {
    const getSum = (a, b) => a + b;

    return getSum;
}

const res = callSum();
const total = res(10, 20);
console.log(total);