//求一个数组中出现某一元素的索引组成的数组
function selectIndex(arr,a){
  var pos=0,
    newArr=[],
    len=arr.length;
  while (pos<len){
    pos=arr.indexOf(a,pos)
    if (pos===-1) {
      break
    }
    newArr.push(pos)
    pos++
  }
  return newArr
}
console.log(selectIndex([1,1,1,2,3,3,3,3,3,3,3,5,5],3))
