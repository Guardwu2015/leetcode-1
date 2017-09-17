function binarySort(arr, value, start, end) {
    var start = start || 0;
    var end = end || arr.length
    var mid = parseInt(start + (end - start) / 2)
    if (value == mid) {
        return mid
    } else if (value < arr[mid]) {
        return binarySort(arr, value, start, mid - 1)
    } else {
        return binarySort(arr, value, mid + 1, end)
    }
    return -1
}
