const createFun = () => {
    function sum(a, b){
        return a + b
    }
    return sum
}

const res = createFun()
const total = res(10, 20)
console.log(total)