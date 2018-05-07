import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('@/components/Index')
const Member = () => import('@/components/Member')
const Login = () => import('@/components/Login')
const MemberDetail = () => import('@/components/MemberDetail')
const Goods = () => import('@/components/Goods')
const GoodsDetail = () => import('@/components/GoodsDetail')
const NewGoods = () => import('@/components/NewGoods')
const BatchImportGoods = () => import('@/components/BatchImportGoods')

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
        path: 'member/:id',
        component: MemberDetail,
        // meta: {
        //   requiresAuth: true,
        // }
      }, {
        path: 'goods',
        component: Goods,
        // meta: {
        //   requiresAuth: true,
        // }
      }, {
        path: 'goods/:id',
        component: GoodsDetail,
        // meta: {
        //   requiresAuth: true,
        // }
      }, {
        path: 'new-goods',
        component: NewGoods,
        // meta: {
        //   requiresAuth: true,
        // }
      }, {
        path: 'batch-import-goods',
        component: BatchImportGoods,
        // meta: {
        //   requiresAuth: true,
        // }
      }],
    },
  ],
})
