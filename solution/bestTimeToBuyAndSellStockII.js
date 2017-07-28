var maxProfit = function(prices) {
    var profit = 0;
    var len = prices.length;
    if (len < 2) return 0;
    for (var i = 1; i < len; i++) {
        if(prices[i]>prices[i-1]) profit += prices[i]-prices[i-1];
    }
    return profit;
};