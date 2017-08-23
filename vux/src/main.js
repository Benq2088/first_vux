// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(Vuex)
import App from './App'
import vuexI18n from 'vuex-i18n'
Vue.use(VueRouter)

let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: true,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})
Vue.use(vuexI18n.plugin, store)

import { BusPlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, AjaxPlugin, AppPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(ConfirmPlugin)
// test
if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}

const routes = [{
  path: '/', // 微信
  component: function (resolve) {
    require(['./tmp/WeChat.vue'], resolve)
  }
},
/**
  * 通讯录
  */
{
  path: '/concat',
  component: function (resolve) {
    require(['./tmp/Concat.vue'], resolve)
  }
},
{
  path: '/personCenter',
  component: function (resolve) {
    require(['./tmp/PersonalCenter.vue'], resolve)
  }
},
{
  path: '/personCenter/acitivity',
  component: function (resolve) {
    require(['./tmp/PersonalCenter/Acitivity.vue'], resolve)
  }
},
{
  path: '/personCenter/concat',
  redirect: '/personCenter/concat',
  component: function (resolve) {
    require(['./tmp/PersonalCenter/Concat.vue'], resolve)
  },
  children: [
    {
      path: '/personCenter/concat/all',
      component: function (resolve) {
        require(['./tmp/PersonalCenter/concat/All.vue'], resolve)
      }
    },
    {
      path: '/personCenter/concat/judge',
      component: function (resolve) {
        require(['./tmp/PersonalCenter/concat/Judge.vue'], resolve)
      }
    },
    {
      path: '/personCenter/concat/judged',
      component: function (resolve) {
        require(['./tmp/PersonalCenter/concat/Judged.vue'], resolve)
      }
    },
    {
      path: '/personCenter/concat/handing',
      component: function (resolve) {
        require(['./tmp/PersonalCenter/concat/Handing.vue'], resolve)
      }
    }
  ]
},
/**
  * 发现
  */
{
  path: '/find',
  component: function (resolve) {
    require(['./tmp/Find.vue'], resolve)
  }
},
 /**
  * 我
  */
{
  path: '/me',
  component: function (resolve) {
    require(['./tmp/Me.vue'], resolve)
  }
},
{
  path: '/me.purse/:id', // 参数传递，跟ionic类似,取时使用this.$route.params.id
  component: function (resolve) {
    require(['./tmp/me/Purse.vue'], resolve)
  }
},
{
  path: '/me.setting',
  component: function (resolve) {
    require(['./tmp/me/Setting.vue'], resolve)
  }
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
  if (process.env.NODE_ENV === 'production') {
    ga && ga('set', 'page', to.fullPath)
    ga && ga('send', 'pageview')
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
