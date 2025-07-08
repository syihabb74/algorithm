//recursiveAllCase
function mergeSort (arr) {

    if (arr.length < 2 ) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2); // finding mid every recursive.       
    const left = arr.slice(0,mid); // splitting half side from the original array |  ===>  both r/l will be splitting a half from the original array
    const right = arr.slice(mid); // splitting right side from the original array |

    return merge(mergeSort(left), mergeSort(right));

}

function merge(rightSide,leftSide) {

    let i = 0;
    let j = 0;
    let mergeResult = [];
    console.log(`left = ${leftSide[i]} right = ${rightSide[j]} = ${leftSide[i] < rightSide[j]}`);

    while (i < leftSide.length && j < rightSide.length ) {

        if ( leftSide[i] < rightSide[j] ) {
            mergeResult.push(leftSide[i]);
            i++;
        } else {
            mergeResult.push(rightSide[j]);
            j++;
        }

    }
    
    while ( i < leftSide.length ) {
        mergeResult.push(leftSide[i]);
        i++;
    }

    while( j < rightSide.length ) {
        mergeResult.push(rightSide[j]);
        j++;
    }

    // console.log(mergeResult);
    return mergeResult

}


console.log(mergeSort([1,2,5,1,2,7,8]));