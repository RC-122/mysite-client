<template>
  <img class="loading-container" :src="imgUrl" alt="">
</template>
<script>
import imgUrl from "@/assets/loading.svg";
    export default{
        data(){
            return{
                imgUrl
            }
        }
    }
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
    .loading-container{
        .self-center();
    }
</style>