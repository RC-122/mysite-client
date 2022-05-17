<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span v-if="item.aside" class="aside" :class="{ active: item.isSelect }" >{{item.aside}}</span>
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  //[{name:"", isSelect:true,children:[{name:"2", isSelect:false, children:[{name:"3", isSelect:false, children:[{ }] }] }] }]
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.right-list-container {
  padding: 0;
  .right-list-container {
    margin: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
    .aside{
      font-size:12px;
      margin-left:1em;
      color:@gray;
    }
  }
}
</style>