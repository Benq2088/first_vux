<template>
<div>
  <x-header :left-options="{showBack: false}">我</x-header>
  <div class="mv-body-has-tabs">
    <div v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>
    <a class="weui-media-box weui-media-box_appmsg vm-mp">
      <div class="weui-media-box__hd">
        <img class="weui-media-box__thumb" :src="info.headIcon" alt="">
      </div>
      <div class="weui-media-box__bd vm-inline">
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-html="info.name"></h4>
          <p class="weui-media-box__desc">微信号 ：{{info.weixin}}</p>
        </div>
        <img class="vm-ewm" :src="info.ewmIcon"/>
      </div>
    </a>
    <div class="weui-media-box weui-media-box_small-appmsg vm-mp">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="/#me.purse/12">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>钱包</p>
            </div>
          </a>
        </div>
    </div>
    <div class="weui-media-box weui-media-box_small-appmsg vm-mp">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>收藏</p>
            </div>
          </a>
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>相册</p>
            </div>
          </a>
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>卡包</p>
            </div>
          </a>
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>表情</p>
            </div>
          </a>
        </div>
    </div>
    <div class="weui-media-box weui-media-box_small-appmsg vm-mp">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>设置</p>
            </div>
          </a>
        </div>
    </div>
    <div>
    <div v-transfer-dom>
      <loading :text="text1"></loading>
    </div>
  </div>
    <tabbars link="4"></tabbars>
  </div>
</div>
</template>
<style>

</style>
<script>
import { XHeader, Loading, Group, TransferDomDirective as TransferDom } from 'vux'
import Tabbars from '../components/bottomTab'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Tabbars,
    Loading,
    Group
  },
  data () {
    return {
      show1: false,
      text1: 'processing',
      title: '我',
      info: {
        name: 'sbq',
        headIcon: './static/img/header.png',
        ewmIcon: './static/img/icon.png',
        weixin: 's90900'
      }
    }
  },
  mounted () {
    this.showLoading()
  },
  methods: {
    goto () {
      this.$router.push({path: '/me.purse/22'})
    },
    showLoading () {
      // console.log(this.$vux)
      this.$vux.loading.show({
        text: 'loadding'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 2000)
    }
  }
}
</script>
