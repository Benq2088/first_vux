<template>
<div>
  <x-header :left-options="{showBack: true}">树状列表</x-header>
  <div class="mv-body">
    <div id="treeContainer" class="treeContainer"></div>
    <button @click="getTreeData(treeData)">获取数状列表</button>
    <div class="treeTitle"></div>
  </div>
</div>
</template>
<style>

</style>
<script>
import {XHeader} from 'vux'
const treeData = [
  {
    name: '一级列表1',
    id: '0',
    children: [
      {
        name: '二级列表0-0',
        id: '0-0',
        children: [
          {
            name: '三级列表标题1',
            id: '2-0',
            children: [{
              name: '四级列表标题1',
              id: '3-0',
              children: []
            }]
          },
          {
            name: '三级列表标题2',
            id: '2-2',
            children: [
              {
                name: '四级列表标题1',
                id: '3-0',
                children: [
                  {
                    name: 'w级列表标题1',
                    id: '3-0',
                    children: []
                  },
                  {
                    name: 'w级列表标题2',
                    id: '3-0',
                    children: []
                  }]
              },
              {
                name: '四级列表标题2',
                id: '3-0',
                children: []
              }
            ]
          },
          {
            name: '三级列表标题3',
            id: '2-1',
            children: []
          }
        ]
      },
      {
        name: '二级列表0-1',
        id: '0-1',
        children: []
      },
      {
        name: '二级列表0-2',
        id: '0-2',
        children: []
      }
    ]
  },
  {
    name: '一级列表2',
    id: '1',
    children: [
      {
        name: '二级列表',
        id: '1-0',
        children: []
      }
    ]
  },
  {
    name: '一级列表3',
    id: '2',
    children: [
      {
        name: '二级列表',
        id: '2-0',
        children: []
      }
    ]
  },
  {
    name: '一级列表4',
    id: '3',
    children: [
      {
        name: '二级列表',
        id: '3-0',
        children: []
      }
    ]
  },
  {
    name: '一级列表5',
    id: '4',
    children: []
  },
  {
    name: '一级列表6',
    id: '5',
    children: []
  }
]
export default {
  name: 'Concat',
  components: {
    XHeader
  },
  mounted () {
    /* this.$el.querySelector('.treeTitle').event('click', function (event) {
      console.log(this)
      // $(this).next().toggle()
      event.stopPropagation()
      event.preventDefault()
    }, false) */
  },
  methods: {
    initTree (obj, data) {
      for (var i = 0; i < data.length; i++) {
        let item = data[i]
        var pElt = document.createElement('div')
        pElt.className = 'treeItem'
        let treeTitle = document.createElement('div')
        treeTitle.className = 'treeTitle'
        treeTitle.innerText = item.name
        pElt.appendChild(treeTitle)
        let innerItem = item.children
        if (innerItem.length > 0) { // 有子节点
          let ul = document.createElement('ul')
          ul.className = 'ul'
          pElt.appendChild(ul)
          for (var j = 0; j < innerItem.length; j++) {
            let inner = innerItem[j]
            let li = document.createElement('li')
            if (inner.children.length > 0) {
              li.className = 'hasChild'
              li.innerHTML = '<div class="treeItem"><div class="treeTitle">' + inner.name + '</div><ul class="ul"></ul></div>'
              pElt.querySelector('.ul').appendChild(li)
              this.initTree(pElt.querySelector('.hasChild .treeItem ul'), inner.children)
            } else {
              li.innerText = inner.name
              pElt.querySelector('.ul').appendChild(li)
            }
          }
        }
        obj.appendChild(pElt)
      }
    },
    getTreeData (treeData) {
      if (this.$el.querySelector('.treeContainer').innerHTML === '') {
        this.initTree(this.$el.querySelector('.treeContainer'), treeData)
      }
    }
  },
  data () {
    return {
      treeData: treeData
    }
  }
}
</script>
<style>
  .treeContainer{
    position:relative;
    padding:10px;
    font-size:1rem;
  }
  .treeContainer ul{
    /* display:none; */
  }
  .treeContainer ul,.treeContainer li{
    list-style:none;
    margin:0;
    padding-left:1rem;
  }
  .treeContainer li{
    line-height:1.6rem;
  }
  .treeItem .treeTitle{
    line-height:1.6rem;
  }
</style>
