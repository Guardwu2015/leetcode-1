var climbStairs = function(n) {
    var ways = new Array(n);
    for (var i = 1; i <= n; i++) {
        if (i == 1) ways[i - 1] = 1;
        else if (i == 2) ways[i - 1] = 2;
        else
            ways[i-1] = ways[i - 2] +  ways[i - 3];
    }
    return ways[n - 1];  
};