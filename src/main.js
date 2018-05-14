// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Layout, Sider, Menu, Submenu, Icon, MenuItem, Header, LoadingBar,
  Dropdown, Avatar, DropdownMenu, DropdownItem, Content, Form, FormItem,
  Select, Option, Table, Page, Modal, Row, Col, Upload, Progress, Notice,
  Collapse, Panel, Button, Input, Badge, AutoComplete, Message,
} from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import util from './util'

Vue.config.productionTip = false
Vue.use(util)
Vue.prototype.$Message = Message
Vue.prototype.$Notice = Notice
Vue.component('Layout', Layout)
Vue.component('Sider', Sider)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('Icon', Icon)
Vue.component('MenuItem', MenuItem)
Vue.component('Header', Header)
Vue.component('LoadingBar', LoadingBar)
Vue.component('Dropdown', Dropdown)
Vue.component('Avatar', Avatar)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('DropdownItem', DropdownItem)
Vue.component('Content', Content)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Table', Table)
Vue.component('Page', Page)
Vue.component('Modal', Modal)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Upload', Upload)
Vue.component('Progress', Progress)
Vue.component('Collapse', Collapse)
Vue.component('Panel', Panel)
Vue.component('Button', Button)
Vue.component('Input', Input)
Vue.component('AutoComplete', AutoComplete)
Vue.component('Badge', Badge)

// 设置路由拦截
router.beforeEach((to, from, next) => {
  LoadingBar.start()
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
  LoadingBar.finish()
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
