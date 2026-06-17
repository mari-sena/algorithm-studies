function antiRotateArray(nums, k) {
    k = k % nums.length;

    for (let i = 0; i < k; i++)
    {
        let first = nums.shift();
        nums.push(first);
    }
    return nums;
}
