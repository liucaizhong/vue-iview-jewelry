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
const RentService = () => import('@/components/RentService')
const RentServiceDetail = () => import('@/components/RentServiceDetail')
const RentOrder = () => import('@/components/RentOrder')
const RentOrderDetail = () => import('@/components/RentOrderDetail')
const NotFound = () => import('@/components/NotFound')
const Persona = () => import('@/components/Persona')
const PackageService = () => import('@/components/PackageService')
const PackageServiceDetail = () => import('@/components/PackageServiceDetail')
const SaleService = () => import('@/components/SaleService')
const SaleServiceDetail = () => import('@/components/SaleServiceDetail')
const AppIndexConf = () => import('@/components/AppIndexConf')
const AppProductConf = () => import('@/components/AppProductConf')
const AppOtherConf = () => import('@/components/AppOtherConf')

export default new Router({
  mode: 'history',
  // base: '/B/',
  routes: [
    {
      path: '*',
      component: NotFound,
    },
    {
      path: '/',
      redirect: '/dashboard',
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
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'member/:id',
        component: MemberDetail,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'goods',
        component: Goods,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'goods/:id',
        component: GoodsDetail,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'new-goods',
        component: NewGoods,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'batch-import-goods',
        component: BatchImportGoods,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'rent-service',
        component: RentService,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'rent-service/:id',
        component: RentServiceDetail,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'package-service',
        component: PackageService,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'package-service/:id',
        component: PackageServiceDetail,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'sale-service',
        component: SaleService,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'sale-service/:id',
        component: SaleServiceDetail,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'rent-order',
        component: RentOrder,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'rent-order/:id',
        component: RentOrderDetail,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'persona',
        alias: '/persona',
        component: Persona,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'index-conf',
        component: AppIndexConf,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'product-conf',
        component: AppProductConf,
        meta: {
          requiresAuth: true,
        },
      }, {
        path: 'other-conf',
        component: AppOtherConf,
        meta: {
          requiresAuth: true,
        },
      }],
    },
  ],
})
