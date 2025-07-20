function selectionSort (arr) {
    for ( let i = 0 ; i < arr.length ; i++ ) {
        let minIndex = i;
        let j = i
        while (j < arr.length ) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
            j++
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr
}


console.log(selectionSort([1,7,39,10,2,-1]));