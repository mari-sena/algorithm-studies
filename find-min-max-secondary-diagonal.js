function findMinMaxSecondaryDiagonal(grid) {
    if (grid.length === 0)
        return [null, null];
    const rows = grid.length;
    const cols = grid[0].length;
    let i = 0;
    let j = cols - 1;
    let min = grid[0][j];
    let max = grid[0][j];

    while (i < rows && j >= 0)
    {
        if (grid[i][j] < min)
            min = grid[i][j];
        if (grid[i][j] > max)
            max = grid[i][j];
        i++;
        j--;
    }
    return [min, max];
}
