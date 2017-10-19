import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import concatRouter from './concat.router.js'
import findRouter from './find.router.js'
import meRouter from './me.router.js'
import weChatRouter from './weChat.router.js'

export default new Router({
  routes: [
    ...weChatRouter,
    ...concatRouter,
    ...findRouter,
    ...meRouter
  ]
})