<template>
  <div>
    <a v-for="(item, index) in dataList" :key="index" @click.prevent="onItemClick(item)" class="weui-media-box weui-media-box_appmsg">
      <div class="weui-media-box__hd" v-if="item.src">
        <img class="weui-media-box__thumb" :src="item.src" alt="">
      </div>
      <div class="weui-media-box__bd vm-inline">
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-html="item.title"></h4>
          <p class="weui-media-box__desc" v-html="item.desc"></p>
        </div>
        <p class="time">12:00</p>
      </div>
    </a>
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
import {XHeader, Group, Cell, Tabbar, TabbarItem, Panel} from 'vux'
export default {
  name: 'WeChat',
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Panel
  },
  data () {
    return {
      type: '1',
      showBack: false,
      dataList: [{
        src: './static/img/icon.png',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: './static/img/header.png',
        title: '标题二',
        desc: '明天去哪玩?',
        url: {
          path: '/component/radio',
          replace: false
        }
      }],
      footer: {
        title: '查看更多',
        url: 'http://vux.li'
      }
    }
  },
  computed: {
  },
  methods: {
    onItemClick (item) {
      console.log(JSON.stringify(item))
      this.$router.push({path: item.url})
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
