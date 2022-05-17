<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading"/>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment.vue";
import mainScroll from "@/mixins/mainScroll";
import { titleControl } from "@/utils";

export default {
  components: {
    Layout,
    BlogTOC,
    BlogDetail,
    BlogComment
  },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if(!resp){
        this.$router.push("/404");
        return;
      }
      titleControl.setRouteTitle(resp.title); 
      return resp;
    },
  },
  
  updated(){
    const hash = location.hash;
    location.hash = "";
    setTimeout(()=>{
      location.hash = hash;
    }, 100)
  }
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  scroll-behavior: smooth;
}
.right-container {
  overflow-y: scroll;
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
}
</style>