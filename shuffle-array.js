function shuffleArray(nums, k) {
    let len = nums.length;
    let j = 0;
    
    for (let i = 0; i < len; i++){
        if ((i + 1) % k === 0)
        {
            nums.push(nums[j]);
            nums.splice(j, 1);
        }
        else
            j++;
    }
    return nums;
}
