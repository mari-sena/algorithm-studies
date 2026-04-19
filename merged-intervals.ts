function merge(intervals: number[][]): number[][] {
    if (intervals.length == 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);
    let mergedArr = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const lastMerged = mergedArr[mergedArr.length - 1];

        if (start <= lastMerged[1])
            lastMerged[1] = Math.max(lastMerged[1], end);
        else
            mergedArr.push([start, end]);
    }
    return mergedArr;
};
