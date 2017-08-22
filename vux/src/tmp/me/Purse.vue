<template>
<div>
  <x-header :left-options="{showBack: true}">钱包</x-header>
  <div class="mv-body">
    <button class="vm-btn" @click="clickEvent('alert')">alert</button>
    <button class="vm-btn" @click="clickEvent('toast')">toast</button>
    <button class="vm-btn" @click="clickEvent('ajax')">ajax</button>
    <button class="vm-btn" @click="clickEvent('confirm')">confirm</button>
    <button class="vm-btn" @click="clickEvent('Popup')">Popup</button>


    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup0">
          <group>
            <x-switch title="Another XSwitcher" v-model="show"></x-switch>
            <x-switch title="Show Toast" v-model="showToast"></x-switch>
          </group>
        </div>
      </popup>
    </div>
    <toast v-model="showToast">You did it!</toast>
  </div>
</div>
</template>
<style>

</style>
<script>
import {XHeader, Group, Cell, Alert, Toast, Popup, TransferDom, XSwitch, Confirm, AjaxPlugin} from 'vux'

export default {
  name: 'Purse',
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Group,
    Cell,
    Alert,
    Toast,
    Popup,
    TransferDom,
    XSwitch,
    Confirm,
    AjaxPlugin
  },
  methods: {
    clickEvent (str) {
      if (str === 'alert') {
        // 隐藏 this.$vux.alert.hide()
        this.$vux.alert.show({
          title: '提示',
          content: '休息一会?',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
          }
        })
      } else if (str === 'toast') {
        // 显示
        this.$vux.toast.show({
          text: 'Loading'
        })
        // 显示文字
        // this.$vux.toast.text('hello', 'top')
        // 隐藏
        // this.$vux.toast.hide()
      } else if (str === 'ajax') {
        AjaxPlugin.$http.post('http://10.16.68.181:8177/midd/orderSale/orderStatistics', {startTime: '2017/07/12', endTime: '2017/08/17'})
        .then((response) => {
          console.log(response.data)
        })
      } else if (str === 'confirm') {
        // 显示
        const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
        this.$vux.confirm.show({
          // 组件除show外的属性
          onCancel () {
            console.log(this) // 非当前 vm
            console.log(_this) // 当前 vm
          },
          onConfirm () {}
        })
        // 隐藏
        this.$vux.confirm.hide()
        // prompt形式调用
        this.$vux.confirm.prompt('placeholder', {
          onCancel () {},
          onConfirm () {}
        })
        // 设置输入值
        this.$vux.confirm.setInputValue('value') // 注意需要在 onShow 事件中执行
      } else {
        console.error('---------------------')
        this.show = true
      }
    },
    log (str) {
      console.log(str)
    }
  },
  mounted () {
    console.log('-----------------------------------=')
    console.log(this.$route.params) // 打印上一页面传过来的参数
    alert('this.$route.params.id = ' + this.$route.params.id)
  },
  data () {
    return {
      showToast: false,
      show: false
    }
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/close.less';
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.vm-btn{
  background:#1AAD19;
  width:100%;
  border:none;
  color:#fff;
  line-height:32px;
  margin-top:10px;
}
</style>
