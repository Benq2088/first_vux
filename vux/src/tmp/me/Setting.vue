<template>
<div>
  <x-header :left-options="{showBack: true}">设置</x-header>
  <div class="mv-body">
    <group>
      <cell title="新消息提醒" value="" @click.native="onClick('/newmsg-notice')"></cell>
      <cell title="勿扰模式" value="" @click.native="onClick('seelpping')"></cell>
      <cell title="聊天" value="" @click.native="onClick('talk')"></cell>
      <cell title="隐私" value="" @click.native="onClick('owner')"></cell>
      <cell title="通用" value="" @click.native="onClick"></cell>
      <cell title="账号与安全" value="已保护" @click.native="onClick"></cell>
    </group>
    <group>
      <cell title="关于微信" value="" @click.native="onClick"></cell>
      <cell title="帮助与反馈" value="" @click.native="onClick"></cell>
    </group>
    <group>
      <cell title="实验室" value="" @click.native="onClick"></cell>
    </group>
    <group>
      <cell title="退出" value="" @click.native="onClick"></cell>
    </group>
  </div>
</div>
</template>
<style>

</style>
<script>
import {XHeader, Loading, Group, Cell} from 'vux'
export default {
  components: {
    XHeader,
    Loading,
    Group,
    Cell
  },
  data () {
    return {
    }
  },
  mounted () {
    // this.showLoading()
  },
  methods: {
    onClick (item) {
      console.log(item)
    }
  }
}
</script>
