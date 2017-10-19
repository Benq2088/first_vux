import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path: '/concat/tree',
      component: function (resolve) {
        require(['./tmp/concat/Tree.vue'], resolve)
      }
    },
    {
      path: '/concat/slot',
      component: function (resolve) {
        require(['./tmp/concat/Slot.vue'], resolve)
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
})
