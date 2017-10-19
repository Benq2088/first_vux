<template>
  <div>
    <x-header :left-options="{showBack: false}">slot</x-header>
    <slot name="mySlot"></slot>
  </div>
</template>
<script>
  import {XHeader} from 'vux'
  import testSlot from './TestSlot.vue'
  export default {
    components: {
      XHeader,
      testSlot
    }
  }
</script>
