function insertionSort(unsortedArr) {
	for ( let i = 1 ; i < unsortedArr.length ; i++ ) {
		let j = i - 1 ; 
		while (j >= 0 && unsortedArr[j] >= unsortedArr[j+1]) {
			[unsortedArr[j], unsortedArr[j+1]] = [unsortedArr[j+1], unsortedArr[j]];
			j--
		}
	}
	return unsortedArr
}


console.log(insertionSort([5,4,3,1,2]))
