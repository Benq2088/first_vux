/**
* Created by benQ on 2017/10/19.
*/
export default [
  {
    path: '/', // 微信
    component: function (resolve) {
      require(['../tmp/WeChat.vue'], resolve)
    }
  }
]