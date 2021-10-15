export default {
  isHasClass,
  addClass,
  removeClass,
  toggleClass,
  replaceClass,
  siblings
}

// 判断样式是否存在
// elm: element, clsn: className
function isHasClass(elm, clsn) {
  let reg = new RegExp("(\\s|^)" + clsn +"(\\s|$)");
  return elm.className.match(reg);
}

// 为指定元素添加样式
function addClass(elm, clsn) {
  if(!isHasClass(elm, clsn)) {
    elm.className += " " + clsn;
  }
}

// 为指定元素删除样式
function removeClass(elm, clsn) {
  if(isHasClass(elm, clsn)) {
    let reg = new RegExp("(\\s|^)"+ clsn +"(\\s|$)");
    elm.className = elm.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g, "");;
    // str.replace(/(^\s*)|(\s*$)/g, ""); 去掉首尾空格
  }
}

// 和 jQuery 的 toggleClass 同样的效果
function toggleClass(elm, clsn) {
  if(isHasClass(elm, clsn)) {
    removeClass(elm, clsn);
  } else {
    addClass(elm, clsn);
  }
}

// 替换Class：先清空再替换
function replaceClass(elm, clsn) {
  if(!isHasClass(elm, clsn)){
    elm.className = " ".replace(/(^\s*)|(\s*$)/g, "");
    addClass(elm, clsn);
  }
}

// 获取兄弟节点：elm为想要获取兄弟节点的某节点
function siblings(elm) {
  let elmArr = [];  // 存储兄弟元素
  let p = elm.previousSibling;  // 取兄节点
  while(p) {  // 先取o的兄节点，判断有没有上一个兄元素，如果有就向下执行
    if(p.nodeType === 1) {
      elmArr.push(p);
    }
    p = p.perviousSibling;  // 最后把上一个节点赋给p
  }
  elmArr.reverse(); // 逆序，变成按顺序
  let n = elm.nextSibling;  // 取弟节点
  while (n) {
    if(n.nodeType === 1) {
      elmArr.push(n);
    }
    n = n.nextSibling;
  }
  return elmArr;
}
