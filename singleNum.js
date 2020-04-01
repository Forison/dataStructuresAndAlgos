const singleNumber = (nums) => {
    const hash = {}
    nums.forEach(element => {
        hash[element] = hash[element] ? hash[element] + 1 : 1;
    });
    return Object.keys(hash).find(key => hash[key] === 1);

};
//test case
const nums = [4, 1, 2, 1, 2];
singleNumber(nums)