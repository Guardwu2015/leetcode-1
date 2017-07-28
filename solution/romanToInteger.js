/*
 * 罗马数字共有7个，即Ⅰ（1）、Ⅴ（5）、Ⅹ（10）、Ⅼ（50）、Ⅽ（100）、Ⅾ（500）和Ⅿ（1000）
 * 重复数次：一个罗马数字重复几次，就表示这个数的几倍
 * 在较大的罗马数字的右边记上较小的罗马数字，表示大数字加小数字。
 * 在较大的罗马数字的左边记上较小的罗马数字，表示大数字减小数字。
 * 左减的数字有限制，仅限于I、X、C。比如45不可以写成VL，只能是XLV
 * 同一数码最多只能连续出现三次，如40不可表示为XXXX，而要表示为XL
 * 
 * 可以这么想，把4位字符，3位字符，2位字符，1位字符做成数组，然后扫描字符串，从4位，3位，2位到1位。
 */

var romanToInt = function (s) {
    FourStr = {
        'VIII': 8,
        'LXXX': 80,
        'DCCC': 800
    };
    ThreeStr = {
        'III': 3,
        'VII': 7,
        'XXX': 30,
        'LXX': 70,
        'CCC': 300,
        'DCC': 700,
        'MMM': 3000
    };
    TwoStr = {
        'II': 2,
        'IV': 4,
        'VI': 6,
        'IX': 9,
        'XX': 20,
        'XL': 40,
        'LX': 60,
        'XC': 90,
        'CC': 200,
        'CD': 400,
        'DC': 600,
        'CM': 900,
        'MM': 2000
    };
    OneStr = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var len = s.length;
    var iPos = 0;
    var num = 0;
    while (iPos < len) {
        if (iPos + 3 < len) {
            var str4 = s.substring(iPos, iPos+4);
            if (FourStr[str4] !== undefined) {
                num += FourStr[str4];
                iPos += 4;
                continue;
            }
        }
        if (iPos + 2 < len) {
            var str3 = s.substring(iPos, iPos +3);
            if (ThreeStr[str3] !== undefined) {
                num += ThreeStr[str3];
                iPos += 3;
                continue;
            }
        }
        if (iPos + 1 < len) {
            var str2 = s.substring(iPos, iPos +2);
            if (TwoStr[str2] !== undefined) {
                num += TwoStr[str2];
                iPos += 2;
                continue;
            }
        }
        if (iPos < len) {
            var str1 = s.charAt(iPos);
            if (OneStr[str1] !== undefined) {
                num += OneStr[str1];
                iPos++;
            }
        }
    }
    return num;
};