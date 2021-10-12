export default {
  slowToTop,
  slowToTarget,
  takeIndex,
  dateFtt
}

function slowToTop(){
  let timer = setInterval(function(){
    let fromTop = document.body.scrollTop || document.documentElement.scrollTop;  // 当前位置
    let speed = Math.floor(-fromTop/5);   // 滑动速度
    if(fromTop == 0){   // 滑动顶部
      clearInterval(timer);
      return;
    }
    fromTop = document.body.scrollTop = document.documentElement.scrollTop = fromTop + speed;
  },30);
}

// 点击后缓慢到达所在位置：target 跳转目标地
function slowToTarget(target) {
  if(target) {
    let time = setInterval(function(){
      let fromTop = document.body.scrollTop || document.documentElement.scrollTop;  // 当前位置

      if(Math.abs(fromTop - target.offsetTop) < 20){   // 滑动顶部
        window.scrollTo(0, target.offsetTop);
        clearInterval(time);
        return;
      }

      if (fromTop - target.offsetTop > 20) {
        fromTop -= 20;
        window.scrollTo(0, fromTop);
      } else {
        fromTop += 20;
        window.scrollTo(0, fromTop);
      }
    },10);
  }
}

// 判断当前对应的序列号，num为当前序号
function takeIndex(click, len) {
  let num = 0;      // 获取点击的序列号
  while(num != len) {
    if(click == click.parentNode.children[num]){
      break;
    } else {
      num++;
    }
  }
  return num;
}

function dateFtt(fmt, date) {
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  if(/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}



