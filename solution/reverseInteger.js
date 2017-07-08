/*翻转一个整数
取得输入数字的绝对值，然后翻转该绝对值，判断整数是否为0，翻转之后的值是否会有栈溢出的危险，spoilers提醒要注意边界值，
但JavaScript里面根本没有int这个类型，所以也不会有overflow的情况，不过还是要加以判断*/
var reverse = function(x) {
    var abs=x>0?x:-x;
    var reverse=0;
    while(abs>0){
        reverse=reverse*10+abs%10;
        abs=Math.floor(abs/10);
    }
    if(reverse>=2147483647 || x===0){
        return 0;
    }
    return x>0?reverse:-reverse;
};
