<template>
    <Layout>
      <template>
        <BlogList />
      </template>
      <template #right>
        <BlogCategory />
      </template>
    </Layout>

</template>

<script>
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
import Layout from "@/components/Layout.vue";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style>
</style>