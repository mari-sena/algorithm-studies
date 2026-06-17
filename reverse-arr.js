function reverseArr(arr) {
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
        i++;
        j--;
    }
    return arr;
}
