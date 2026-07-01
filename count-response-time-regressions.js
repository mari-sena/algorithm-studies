function countResponseTimeRegressions(responseTimes) {
    let sum = responseTimes[0];
    let result = 0;
    let average = 0;
    for (let i = 1; i < responseTimes.length; i++) {
        average = sum / i;
        if (responseTimes[i] > average)
            result++;
        sum += responseTimes[i];
    }
    return result;
}
