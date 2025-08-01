function quickSort (unsortedArr) {
    if (unsortedArr.length < 2) return unsortedArr;
    let pivot = unsortedArr[unsortedArr.length - 1];
    const left = [];
    const right = [];
    for ( let i = 0 ; i < unsortedArr.length - 1 ; i++ ) {
        if (unsortedArr[i] < pivot) {
            left.push(unsortedArr[i]);
        } else {
            right.push(unsortedArr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}


console.log(quickSort([1,9,10,22,5,8,2,11]))