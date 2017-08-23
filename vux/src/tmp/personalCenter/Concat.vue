<template>
<div>
  <x-header :left-options="{showBack: true}">我反馈的问题</x-header>
  <div class="mv-body">
    <tabbar>
      <tabbar-item selected :link="all">
        <img slot="icon" src="../../assets/demo/icon_nav_button.png">
        <span slot="label">全部</span>
      </tabbar-item>
      <tabbar-item show-dot :link="handing">
        <img slot="icon" src="../../assets/demo/icon_nav_msg.png">
        <span slot="label">处理中</span>
      </tabbar-item>
      <tabbar-item :link="judge">
        <img slot="icon" src="../../assets/demo/icon_nav_article.png">
        <span slot="label">待评价</span>
      </tabbar-item>
      <tabbar-item badge="2" :link="judged">
        <img slot="icon" src="../../assets/demo/icon_nav_cell.png">
        <span slot="label">已评价</span>
      </tabbar-item>
    </tabbar>
    <router-view></router-view>
  </div>
</div>
</template>
<style>

</style>
<script>
import {XHeader, Swiper, SwiperItem, Tabbar, TabbarItem} from 'vux'
import Panel from '../../components/panel/index'

export default {
  name: 'PConcat',
  components: {
    XHeader,
    Swiper,
    SwiperItem,
    Tabbar,
    TabbarItem,
    Panel
  },
  methods: {
  },
  data () {
    return {
      all: {path: '/personCenter/concat/all', replace: true},
      handing: {path: '/personCenter/concat/handing', replace: true},
      judge: {path: '/personCenter/concat/judge', replace: true},
      judged: {path: '/personCenter/concat/judged', replace: true}
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
.weui-tabbar{
  top:46px !important;
  bottom:auto;
}
.weui-tabbar__icon > sup{
  top:-4px;
}
</style>
