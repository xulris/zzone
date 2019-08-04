import Vue from 'vue'
import Router from 'vue-router'

/*import shouye from '@/view/shouye/shouye'*/
import login  from '@/view/login/login'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    /*{
      path: '/view/shouye/shouye',
      name: 'shouye',
      component: shouye,
      meta:{
        require:true//该路径的访问需要登录
      },
    }*/,{
      path: '/',
      name: 'login',
      component: login,
      meta:{
        require:false//该路径的访问不需要登录
      }
    },
  ]
})
