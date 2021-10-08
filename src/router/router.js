import initHome from '../views/homepage/initHome.vue'
import Home from '../views/homepage/Home.vue'
import About from '../views/About.vue'
import applyWrite from '../views/apply/applyWrite.vue'
import applyRecord from '../views/apply/applyRecord.vue'
import registerSign from '../views/sign/register_sign.vue'
import personalCenter from '../views/person/personCenter.vue'

const routes = [
  {
    path: '/',
    name: 'initHome',
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
  }

]

export default routes
