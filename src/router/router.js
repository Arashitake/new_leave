import initHome from '../views/homepage/initHome.vue'
import Home from '../views/homepage/Home.vue'
import About from '../views/About.vue'
import applyWrite from '../views/apply/applyWrite.vue'
import applyRecord from '../views/apply/applyRecord.vue'
import registerSign from '../views/sign/register_sign.vue'
import personalCenter from '../views/person/personCenter.vue'
import managePage from '../views/admin/managePage.vue'
import store from '../store'
import approveTip from '../views/judgeMessage/approveTip.vue'
import veridiedTip from '../views/judgeMessage/veridiedTip.vue'
import classSelectTip from '../views/judgeMessage/classSelectTip.vue'

const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if(store.state.user == null || store.state.user == "") {
        next({path: '/initHome'})
      } else {
        next()
      }
    }
  },
  {
    path: '/initHome',
    component: initHome
  },
  {
    path: '/registerSign',
    name: 'registerSign',
    component: registerSign,
    meta: { // 注册页不显示导航栏
      showNav: true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: personalCenter
  },
  {
    path: '/applyWrite',
    name: 'applyWrite',
    component: applyWrite
  },
  {
    path: '/applyRecord',
    name: 'applyRecord',
    component: applyRecord
  },
  {
    path: '/managePage',
    name: 'managePage',
    component: managePage
  },
  { // approveTip 审批假条页面
    path: '/approveTip',
    name: 'approveTip',
    component: approveTip
  },
  { // veridiedTip 审核假条页面
    path: '/veridiedTip',
    name: 'veridiedTip',
    component: veridiedTip
  },  // classSelectTip 审核仅查看页面
  {
    path: '/classSelectTip',
    name: 'classSelectTip',
    component: classSelectTip
  }
]

export default routes
