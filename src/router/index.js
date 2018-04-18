import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Member from '@/components/Member'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/member',
    },
    {
      path: '/member',
      component: Member,
    }
  ],
})
