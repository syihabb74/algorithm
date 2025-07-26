/* Warning this algorithm can be used only for sortered value no matter it number, string the matter thing is 
about sortered  */
function binarySearch (target,sorteredArray, low = 0, high = sorteredArray.length - 1 ) {
    let middle = Math.floor((low + high) / 2)
    while (low <= high) {
        console.log(sorteredArray[middle] === target, sorteredArray[middle], target)
        if (sorteredArray[middle] === target) {
            return middle
        } else if (sorteredArray[middle] > target ) {
            high = middle - 1
        } else {
            low = middle + 1
        }
        middle = Math.floor((low + high) / 2)
    }
    return -1
}

console.log(binarySearch(7,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))