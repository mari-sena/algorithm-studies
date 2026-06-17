function findRowWithTarget(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let i = 0;
    let j = cols - 1;

    while (i < rows && j >= 0)
    {
        if (matrix[i][j] > target)
            j--;   
        if (matrix[i][j] < target)
            i++;
        if (matrix[i][j] === target)
            return i;
    }
    return null;
}
