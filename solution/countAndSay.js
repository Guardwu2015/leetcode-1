/*对于一个数组，从0位置开始扫描，相同的值就累计一个数，然后在新数组中先填那个累计数，然后填原来数组里的值
 */

var countAndSay = function(n) {
    var a = ['1'];
    for (var i = 1; i < n; i++){
        a = nextSeq(a);
    }
    return a.join("");

    function nextSeq(arr) {
        var len = arr.length;
        var nextArr = [];
        var iLeft = 0;
        var i = iLeft;
        while (i < len) {
            while (arr[i] == arr[iLeft] && i < len) i++;
            //arr[i] is the first value which is different from arr[iLeft]
            var num = i - iLeft;
            nextArr.push(num.toString());
            nextArr.push(arr[iLeft]);
            iLeft = i;
        }
        return nextArr;
    }  
};