function merge(arr1, arr2) {
    const res = [];
    let iOne = 0;
    let iTwo = 0;
    
    while (iOne < arr1.length && iTwo < arr2.length) {
        if (arr1[iOne] < arr2[iTwo]) {
            res.push(arr1[iOne]);
            iOne++;
        }
        else {
            res.push(arr2[iTwo]);
            iTwo++;
        }
    }

    while (iOne < arr1.length) {
        res.push(arr1[iOne]);
        iOne++;
    }

    while (iTwo < arr2.length) {
        res.push(arr2[iTwo]);
        iTwo++;
    }
    return res;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const halfLength = Math.floor(arr.length/2);
    const front = arr.slice(0, halfLength);
    const back = arr.slice(halfLength)

    return merge(mergeSort(front), mergeSort(back))
};

module.exports = { merge, mergeSort};