<template>
    <tabbar>
    <tabbar-item link="/" :selected="selected1">
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">微信</span>
    </tabbar-item>
    <tabbar-item  link="/concat" :selected="selected2">
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">通讯录</span>
    </tabbar-item>
    <tabbar-item show-dot link="/find" :selected="selected3">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">发现</span>
    </tabbar-item>
    <tabbar-item badge="2" link="/me" :selected="selected4">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">我</span>
    </tabbar-item>
    </tabbar>
</template>
<script>
import {Tabbar, TabbarItem} from 'vux'
export default {
  name: 'tabbars',
  components: {
    Tabbar,
    TabbarItem
  },
  props: {
    link: String
  },
  data () {
    return {
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false
    }
  },
  mounted () {
    this['selected' + this.link] = true
  },
  methods: {
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
