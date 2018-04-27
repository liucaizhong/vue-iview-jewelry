import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Member from '@/components/Member'
import Login from '@/components/Login'
import MemberDetail from '@/components/MemberDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/dashboard',
      component: Index,
      children: [{
        path: '',
        redirect: 'member',
      }, {
        path: 'member',
        component: Member,
        // meta: {
        //   requiresAuth: true,
        // }
      }, {
        path: 'member/detail',
        component: MemberDetail,
        // meta: {
        //   requiresAuth: true,
        // }
      }]
    },
  ],
})
