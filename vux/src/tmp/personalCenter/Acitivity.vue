<template>
<div>
  <x-header :left-options="{showBack: true}">我的活动</x-header>
  <div class="mv-body">
    <swiper :list="demo01_list" style="width:100%;margin:0 auto;" :aspect-ratio="400/1000" dots-position="right"></swiper>
    <tab :line-width="1" custom-bar-width="60px" v-model="index">
      <tab-item @on-item-click="onItemClick" selected>全部</tab-item>
      <tab-item @on-item-click="onItemClick">未开始</tab-item>
      <tab-item @on-item-click="onItemClick">进行中</tab-item>
      <tab-item @on-item-click="onItemClick">已结束</tab-item>
    </tab>
    <div v-show="index === 0">
      <panel header="" :footer="{title: '', url: ''}" :list="list" type="7" @on-btn-click="onBtnClick"></panel>
    </div>
    <div v-show="index === 1">1</div>
    <div v-show="index === 2">2</div>
    <div v-show="index === 3">3</div>
  </div>
</div>
</template>
<style>

</style>
<script>
import {XHeader, Swiper, SwiperItem, Tab, TabItem} from 'vux'
import Panel from '../../components/panel/index'
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
  name: 'PersonalCenter',
  components: {
    XHeader,
    Swiper,
    SwiperItem,
    Tab,
    TabItem,
    Panel
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    },
    onBtnClick (item) {
      alert('aa')
    },
    addTab () {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1)
      }
    },
    removeTab () {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1)
      }
    },
    next () {
      if (this.index === this.list2.length - 1) {
        this.index = 0
      } else {
        ++this.index
      }
    },
    prev () {
      if (this.index === 0) {
        this.index = this.list2.length - 1
      } else {
        --this.index
      }
    }
  },
  data () {
    return {
      index: 0,
      list2: list(),
      demo01_list: baseList,
      list: [{
        src: './static/img/icon.png',
        title: '标题一',
        address: '地点:' + '星球有一定的形状，有自己的运行轨道。',
        time: '时间:' + '2017-08-11 - 2017-09-12',
        url: '/wechat/cell'
      }, {
        src: './static/img/icon.png',
        title: '标题一',
        address: '地点:' + '星球有一定的形状，有自己的运行轨道。',
        time: '时间:' + '2017-08-11 - 2017-09-12',
        url: '/wechat/cell'
      }]
    }
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
