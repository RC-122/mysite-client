<template>
  <nav class="menu-container">
    <RouterLink
      v-for="item in items"
      :exact="item.exact"
      :key="item.link"
      :to="{name:item.name}"
      ><div class="icon"><IconVue :type="item.icon" /></div>
      &nbsp;&nbsp;{{ item.title }}</RouterLink
    >
  </nav>
</template>
<script>
import IconVue from "./Icon.vue";

export default {
  components: {
    IconVue,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  // methods: {
  //   isSelected(item) {
  //     let path = item.link.toLowerCase();
  //     let curPathname = location.pathname.toLowerCase();
  //     if(item.startWidth){
  //       return curPathname.startsWith(item.link)
  //     }else{
  //       return curPathname === path;
  //     }
  //   },
  // },
};
</script>
<style lang="less" scoped>
@import "~@/style/var.less";
.menu-container {
  margin: 24px 0;

  width: 100%;
  color: @gray;
  a {
    display: block;
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 45px;
    &:hover {
      color: #fff;
    }
    .icon {
      width: 24px;
    }
    &.router-link-active {
      background-color: #333;
    }
  }
}
</style>