function containsDuplicate(nums: number[]): boolean {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i]))
            return true;
        seen.set(nums[i], i);
    }
    return false;
};
