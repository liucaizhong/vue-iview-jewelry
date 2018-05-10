// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import util from './util'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(util)

// 设置路由拦截
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (this.$getCookie('sessionid')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

// 设置axios interceptor
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回401,跳转到登录页面
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    return Promise.reject(error.response.data)
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
