var generate = function(numRows) {
    var result = [];
    for (var i = 1; i <= numRows; i++) {
        if (i == 1) result.push([1]);
        else if (i == 2) result.push([1, 1]);
        else {
            var preArr = result[result.length - 1];
            var arr = new Array(i);
            arr[0] = 1;
            for (var j = 0; j < i - 2; j++) {
                arr[j + 1] = preArr[j] + preArr[j + 1];
            }
            arr[i - 1] = 1;
            result.push(arr);
        }
    }
    return result;
};