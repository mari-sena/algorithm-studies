function solution(numbers, k) {
    let arrAux = [];
    for (let i = 0; i < numbers.length; i += k)
    {
        let unsorted = numbers.slice(i, i + k);
        let right = unsorted.length - 1;
        for (let left = 0; left < right; left++)
        {
            let aux = unsorted[right];
            unsorted[right] = unsorted[left];
            unsorted[left] = aux;
            right--;
        }
        arrAux.push(...unsorted);
    }
    return arrAux;
}
