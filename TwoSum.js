function twoSum(nums, target) {
    const numToIndex = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if(numToIndex.hasOwnProperty(complement)) {
            return [numToIndex[complement], i];
        }

        numToIndex[num] = i;

    }
    return [];
}