var getRow = function(rowIndex) {
    var arr = [];
    for (var i = 1; i <= rowIndex+1; i++) {
        if (i == 1) arr = [1];
        else if (i == 2) arr = [1, 1];
        else {
            var prev = arr[0];
            var cur = arr[1];
            for (var j = 1; j < i - 1; j++) {
                arr[j] = prev + cur;
                prev = cur;
                cur = arr[j + 1];
            }
            arr.push(1);
        }
    }
    return arr;    
};