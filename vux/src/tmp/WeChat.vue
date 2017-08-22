<template>
  <div>
    <x-header :left-options="{showBack: false}">微信</x-header>
    <div class="mv-body-has-tabs">
      <panel header="最近聊天记录" :footer="footer" :list="list" :type="type"></panel>
      <tabbars link="1"></tabbars>
    </div>
  </div>
</template>

<script>
import {XHeader} from 'vux'
import Tabbars from '../components/bottomTab'
import Panel from '../components/panel/index'
export default {
  name: 'WeChat',
  components: {
    XHeader,
    Tabbars,
    Panel
  },
  data () {
    return {
      type: '6',
      showBack: false,
      list: [{
        src: './static/img/icon.png',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/wechat/cell'
      },
      {
        src: './static/img/icon.png',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/wechat/cell'
      },
      {
        src: './static/img/icon.png',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/wechat/cell'
      },
      {
        src: './static/img/icon.png',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/wechat/cell'
      }, {
        src: './static/img/header.png',
        title: '标题二',
        desc: '明天去哪玩?',
        url: {
          path: '/wechat/radio',
          replace: false
        }
      }],
      footer: {
        title: '查看更多',
        url: ''
      }
    }
  },
  mounted () {
    // this.$http.get
  },
  methods: {
  }
}
</script>
