<template>
<div>
  <x-header :left-options="{showBack: true}">设置</x-header>
  <div class="mv-body">
    <group>
      <cell title="新消息提醒" value="" @click.native="onClick('/newmsg-notice')"></cell>
      <cell title="勿扰模式" value="" @click.native="onClick('no-disdurb')"></cell>
      <cell title="聊天" value="" @click.native="onClick('talk')"></cell>
      <cell title="隐私" value="" @click.native="onClick('secret')"></cell>
      <cell title="通用" value="" @click.native="onClick('universally')"></cell>
      <cell title="账号与安全" value="已保护" @click.native="onClick(account-safe)"></cell>
    </group>
    <group>
      <cell title="关于微信" value="" @click.native="onClick('aboutus')"></cell>
      <cell title="帮助与反馈" value="" @click.native="onClick('help')"></cell>
    </group>
    <group>
      <cell title="实验室" value="" @click.native="onClick('lab')"></cell>
    </group>
    <group>
      <cell title="退出" value="" @click.native="onClick('exit')"></cell>
    </group>
  </div>
</div>
</template>
<style>

</style>
<script>
import {XHeader, Loading, Group, Cell, Toast} from 'vux'
export default {
  components: {
    XHeader,
    Loading,
    Group,
    Cell,
    Toast
  },
  data () {
    return {
    }
  },
  methods: {
    onClick (item) {
      this.$vux.toast.text(item, 'bottom')
    }
  }
}
</script>
