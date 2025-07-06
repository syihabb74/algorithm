function bubbleSort (arr) {

    for ( let i = 0 ; i < arr.length ; i++ ) {

        for ( let j = 0 ; j < arr.length - 1 - i ; j++ ) {

            if ( arr[j] > arr[j+1] ) { // conditional if arr[now] more than arr[inthefrontnow]

                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // swapping 

            }

        } 

    }

    return arr; // return array cause this will be usefull if we want to chaining with other method built-in-function array itself

}

let dummyData = [1,-1,3,6,1,-5,200,-10]

console.log(bubbleSort(dummyData));

// this time complexity is O(n^2);
/* this mean amount of max steps we need for sorting array to become sorted array are amount of input n * n */
// for example in dummy data n input length are 8 size so 8 * 8 is 64
