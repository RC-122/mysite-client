<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar
      :url="data.avatar"
      :size="150"
    />
    <h1>{{data.siteTitle}}</h1>
    </template>
    <MenuVue />
    <ContactVue v-if="data" />
    <p v-if="data" class="footer">{{data.icp}}</p>
    
  </div>
</template>
<script>
import Avatar from "./Avatar.vue";
import ContactVue from "./Contact.vue";
import MenuVue from "./Menu.vue";
import { mapState } from "vuex";
export default {
  name: "SiteAside",
  components: {
    Avatar,
    ContactVue,
    MenuVue,
  },
  computed:mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: rgb(32, 32, 32);
  // padding-left: 20px;
  box-sizing: border-box;
  .avatar-container {
    margin: 0 auto;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
  h1{
    color:#fff;
    font-size:1.2rem;
    text-align:center;
  }
}
</style>
