var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    var i = 1;
    while (i * i < x) {
        i = 2 * i;
    }
    return search(i/2, i);

    function search(a, b) {
        if (a * a == x) return a;
        if (b * b == x) return b;
        if (b == a + 1) return a;
        var c = Math.floor((a + b) / 2);
        var c2 = c * c;
        if (c2 == x) return c;
        else if (c2 < x) return search(c, b);
        else return search(a, c);
    }    
};