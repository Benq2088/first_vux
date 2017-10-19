/**
* Created by benQ on 2017/10/19.
*/
export default [
  {
    path: '/me',
    component: function (resolve) {
      require(['../tmp/Me.vue'], resolve)
    }
  },
  {
    path: '/me.purse/:id', // 参数传递，跟ionic类似,取时使用this.$route.params.id
    component: function (resolve) {
      require(['../tmp/me/Purse.vue'], resolve)
    }
  },
  {
    path: '/me.setting',
    component: function (resolve) {
      require(['../tmp/me/Setting.vue'], resolve)
    }
  }
]