const bubbleSort = (nums) => {
    for(let i = 0; i < nums.length-1; i++){
        for(let j = 0; j < nums.length-1-i; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
}

const sortedArray = (...args) => {
    return bubbleSort(args)
}

const res = sortedArray(5,4,3,2,1)
console.log(res) // [1, 2, 3, 4, 5];
