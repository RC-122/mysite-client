<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <main class="main">
      <slot></slot>
    </main>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.layout-container {
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>