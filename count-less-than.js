function countLessThan(matrix, target) {
    // Remember that the matrix is sorted row-wise and column-wise!
    var counter = 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    var i = 0;
    var j = cols - 1;

    while (i < rows && j >= 0) {
        if (matrix[i][j] < target)
        {
            counter += j + 1;
            i++;
        }
        else if (matrix[i][j] >= target)
            j--;
    }
    return counter;
}
