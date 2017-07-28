var getPermutation = function(n, k) {
    var list = [];
    for (var i = 0; i < n; i++) {
        list.push(i + 1);
    }
    k--;
    var factorial = 1;
    for (i = 2; i < n; i++) {
        factorial *= i;
    }
    var result = [];
    for (i = n - 1; i >= 0; i--) {
        var a = Math.floor(k / factorial);
        result.push(list[a]);
        list.splice(a, 1);
        k = k % factorial;
        if (i > 0) factorial /= i;
    }
    return result.join("");
};