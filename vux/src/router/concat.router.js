/**
* Created by benQ on 2017/10/19.
*/
export default [
  {
    path: '/concat',
    // component: function (resolve) {
    //   require(['../tmp/Concat.vue'], resolve)
    // },
    component: () => import('../tmp/Concat.vue')
  },
  {
    path: '/concat/tree',
    component: function (resolve) {
      require(['../tmp/concat/Tree.vue'], resolve)
    }
  },
  {
    path: '/concat/slot',
    component: function (resolve) {
      require(['../tmp/concat/Slot.vue'], resolve)
    }
  },
  {
    path: '/personCenter',
    component: function (resolve) {
      require(['../tmp/PersonalCenter.vue'], resolve)
    }
  },
  {
    path: '/personCenter/acitivity',
    component: function (resolve) {
      require(['../tmp/PersonalCenter/Acitivity.vue'], resolve)
    }
  },
  {
    path: '/personCenter/concat',
    redirect: '/personCenter/concat',
    component: function (resolve) {
      require(['../tmp/PersonalCenter/Concat.vue'], resolve)
    },
    children: [
      {
        path: '/personCenter/concat/all',
        component: function (resolve) {
          require(['../tmp/PersonalCenter/concat/All.vue'], resolve)
        }
      },
      {
        path: '/personCenter/concat/judge',
        component: function (resolve) {
          require(['../tmp/PersonalCenter/concat/Judge.vue'], resolve)
        }
      },
      {
        path: '/personCenter/concat/judged',
        component: function (resolve) {
          require(['../tmp/PersonalCenter/concat/Judged.vue'], resolve)
        }
      },
      {
        path: '/personCenter/concat/handing',
        component: function (resolve) {
          require(['../tmp/PersonalCenter/concat/Handing.vue'], resolve)
        }
      }
    ]
  }
]