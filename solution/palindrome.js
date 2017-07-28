/* 
 * 要去判断一个整数是否为回文数
 * 先将输入的整数转换成字符串，求得字符串的半截长度
 * 从字符串中间位置往前和往后同时遍历，判断前后两个数是否相等
 */

var isPalindrome = function(x) {
    var str=x.toString();
    var len=str.length;
    var halfLen=len%2===0?len/2:(len-1)/2;
    for(var i=0;i<halfLen;i++){
        if(str.charAt(i)!==str.charAt(len-1-i) || len===0){
            return false;
        }
    }
    return true;
};