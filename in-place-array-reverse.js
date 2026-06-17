function inPlaceArrayReverse(arr) {
    // TODO: Implement in-place array reverse
    let i = 0;
    while (i < arr.length / 2)
    {
        let j = arr.length - 1 - i;
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
        i++;
    }
    return arr;
}
