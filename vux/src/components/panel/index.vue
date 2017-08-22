<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd" v-if="header" @click="onClickHeader" v-html="header"></div>
    <div class="weui-panel__bd">
      <!--type==='1'-->
      <template v-if="type === '1'">
        <a :href="getUrl(item.url)" v-for="(item,index) in list" :key="index" @click.prevent="onItemClick(item)" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd" v-if="item.src">
            <img class="weui-media-box__thumb" :src="item.src" alt="">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" v-html="item.title"></h4>
            <p class="weui-media-box__desc" v-html="item.desc"></p>
          </div>
        </a>
      </template>
      <!--type==='2'-->
      <template v-if="type === '2'">
        <div class="weui-media-box weui-media-box_text" v-for="(item,index) in list" :key="index" @click.prevent="onItemClick(item)">
            <h4 class="weui-media-box__title" v-html="item.title"></h4>
            <p class="weui-media-box__desc" v-html="item.desc"></p>
        </div>
      </template>
      <!--type==='3'-->
      <template v-if="type === '3'">
        <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_access" :href="getUrl(item.url)" v-for="(item,index) in list" :key="index" @click.prevent="onItemClick(item)">
                <div class="weui-cell__hd">
                  <img :src="item.src" alt="" style="width:20px;margin-right:5px;display:block">
                </div>
                <div class="weui-cell__bd">
                  <p v-html="item.title"></p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
            </div>
        </div>
      </template>
      <!--type==='4'-->
      <template v-if="type === '4'">
        <div class="weui-media-box weui-media-box_text" v-for="(item,index) in list" :key="index" @click.prevent="onItemClick(item)">
          <h4 class="weui-media-box__title" v-html="item.title"></h4>
          <p class="weui-media-box__desc" v-html="item.desc"></p>
          <ul class="weui-media-box__info" v-if="item.meta">
            <li class="weui-media-box__info__meta" v-html="item.meta.source"></li>
            <li class="weui-media-box__info__meta" v-html="item.meta.date"></li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra" v-html="item.meta.other"></li>
          </ul>
        </div>
      </template>
      <!--type==='5'-->
      <template v-if="type === '5'">
        <div class="weui-media-box weui-media-box_text" v-for="(item,index) in list" :key="index" @click.prevent="onItemClick(item)">
          <div class="weui-media-box_appmsg">
            <div class="weui-media-box__hd" v-if="item.src">
              <img class="weui-media-box__thumb" :src="item.src" alt="">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title" v-html="item.title"></h4>
              <p class="weui-media-box__desc" v-html="item.desc"></p>
            </div>
          </div>
          <ul class="weui-media-box__info" v-if="item.meta">
            <li class="weui-media-box__info__meta" v-html="item.meta.source"></li>
            <li class="weui-media-box__info__meta" v-html="item.meta.date"></li>
            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra" v-html="item.meta.other"></li>
          </ul>
        </div>
      </template>
      <!--type==='6'-->
      <template v-if="type === '6'">
        <a :href="getUrl(item.url)" v-for="(item,index) in list" :key="index" @click.prevent="onItemClick(item)" class="weui-media-box weui-media-box_appmsg">
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
      </template>
      <!--type==='7'-->
      <template v-if="type === '7'">
        <a :href="getUrl(item.url)" v-for="(item,index) in list" :key="index" @click.prevent="onItemClick(item)" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd lh" v-if="item.src">
            <img class="weui-media-box__thumb" :src="item.src" alt="">
          </div>
          <div class="weui-media-box__bd vm-inline">
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title" v-html="item.title"></h4>
              <p class="weui-media-box__desc one-line" v-html="item.time"></p>
              <p class="weui-media-box__desc one-line" v-html="item.address"></p>
              <p class="vm-mark"><span class="grey">未开始</span><span class="green">进行中</span><span class="red">福利</span></p>
            </div>
          </div>
          <div class="vm-mark-div"><span>新</span></div>
          <button class="vm-ac-btn" @click.prevent.stop="onBtnClick(item)">尚未开始</button>
        </a>
      </template>
    </div>
    <div class="weui-panel__ft">
      <a class="weui-cell weui-cell_access weui-cell_link" :href="getUrl(footer.url)" v-if="footer && type !== '3'" @click.prevent="onClickFooter">
        <div class="weui-cell__bd" v-html="footer.title"></div>
      </a>
    </div>
  </div>
</template>

<script>
import { go, getUrl } from '../../libs/router'

export default {
  name: 'panel',
  props: {
    header: String,
    footer: Object,
    list: Array,
    type: {
      type: String,
      default: '1'
    }
  },
  methods: {
    getUrl (url) {
      return getUrl(url, this.$router)
    },
    onClickFooter () {
      this.$emit('on-click-footer')
      go(this.footer.url, this.$router)
    },
    onClickHeader () {
      this.$emit('on-click-header')
    },
    onItemClick (item) {
      this.$emit('on-click-item', item)
      go(item.url, this.$router)
    },
    onBtnClick (item) {
      this.$emit('on-btn-click', item)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
@import '../../styles/weui/widget/weui_cell/weui_access';
@import '../../styles/weui/widget/weui_panel/weui_panel';
@import '../../styles/weui/widget/weui_media_box/weui_media_box';

.weui-panel .weui-cell:first-child:before {
  display: block;
}
.vm-inline{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.one-line{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  display:block;
}
.weui-media-box_appmsg .lh{
  height:80px;
  line-height:80px;
}
.weui-media-box_appmsg .lh img{height:80px;}
.weui-media-box{background:#fff;}
.vm-mark{
  margin-top:10px;
}
.vm-mark span{
  border-radius:2px;
  padding:1px 3px;
  margin-right:5px;
}
.vm-mark .grey{
  border:1px solid grey;
  color:grey;
}
.vm-mark .green{
  border:1px solid green;
  color:green;
}
.vm-mark .red{
  border:1px solid red;
  color:red;
}
.vm-mark-div{
  position: absolute;
  top:0;
  right:0;
  border-width:1.2rem 1.2rem;
  border-style:solid;
  border-color:#ff3300 #ff3300 #ffffff #ffffff;
}
.vm-mark-div span{
  position: absolute;
  top:-1.3rem;
  color:#fff;
  font-size:1rem;
}
.vm-ac-btn{
  position: absolute;
  bottom:6px;
  right:10px;
  padding:2px 4px;
  z-index:10;
}
</style>
