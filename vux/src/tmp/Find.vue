<template>
<div>
  <x-header :left-options="{showBack: false}">发现</x-header>
  <div class="mv-body-has-tabs">
    <div class="weui-media-box weui-media-box_small-appmsg vm-mp">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>朋友圈</p>
            </div>
          </a>
          <span class="weui-cell__ft"></span>
        </div>
    </div>
    <div class="weui-media-box weui-media-box_small-appmsg vm-mp">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>扫一扫</p>
            </div>
          </a>
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>摇一摇</p>
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
              <p>附近的人</p>
            </div>
          </a>
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>漂流瓶</p>
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
              <p>购物</p>
            </div>
          </a>
          <a class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img src="../../static/img/icon.png" alt="" class="vm-ion">
            </div>
            <div class="weui-cell__bd">
              <p>游戏</p>
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
              <p>小程序</p>
            </div>
          </a>
        </div>
    </div>
    <tabbars link="3"></tabbars>
  </div>
</div>
</template>
<style>

</style>
<script>
import {XHeader} from 'vux'
import Tabbars from '../components/bottomTab'
export default {
  components: {
    XHeader,
    Tabbars
  },
  data () {
    return {
      title: '发现'
    }
  },
  mounted () {
  }
}
</script>
