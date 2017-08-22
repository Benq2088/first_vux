<template>
  <div>
    <x-header :left-options="{showBack: false}">微信</x-header>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <router-view></router-view>
    <group title="cell demo">
      <cell title="事例" value="go" link="/hello"></cell>
    </group>
    <tabbar>
      <tabbar-item selected link="/">
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item  link="/component/concat">
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item show-dot link="/component/find">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/component/me">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {XHeader, Group, Cell, Tabbar, TabbarItem} from 'vux'
export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    tabClick (index) {
      alert(index)
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
