<template>
<div>
  <x-header :left-options="{showBack: false}">联系人</x-header>
  <div class="mv-body-has-tabs">
    <div>
      <group>
      <cell is-link title="个人中心" link="/personCenter"></cell>
      <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
    </group>
    <div>{{datas}}</div>
    <child @get-data="getData"></child>
    <tabbars link="2"></tabbars>
    </div>
  </div>
</div>
</template>
<style>

</style>
<script>
import {XHeader, Group, Cell} from 'vux'
import Tabbars from '../components/bottomTab'

export default {
  name: 'Concat',
  components: {
    XHeader,
    Group,
    Cell,
    Tabbars,
    child: {
      template: `<div><button @click="test">{{msg}}</button></div>`, // 绑定触发事件
      methods: {
        test () { // 触发事件，以及自定义方法
          this.$emit('get-data', this.msg) // 这里的this指的是当前子组件
        }
      },
      data () {
        return {
          msg: 'ces wom saf'
        }
      }
    }
  },
  methods: {
    getData (msg) {
      console.log(msg)
      this.datas = msg
    }
  },
  data () {
    return {
      datas: '',
      showBack: 'true',
      title: '联系人'
    }
  },
  mounted () {
    // this.$el.querySelector('.vux-header-title span').innerText = '联系人'
  }
}
</script>
