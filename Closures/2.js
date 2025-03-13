/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (toBeVal) => {
            if(val === toBeVal){
                return true
            }
            else{
                throw new Error("Not Equal")
            }
        },
        notToBe: (notToBeVal) => {
            if(val !== notToBeVal){
                return true
            }
            else{
                throw new Error("Equal")
                // return "Equal"
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */