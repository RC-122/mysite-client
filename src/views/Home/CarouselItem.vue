<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handlMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="img" :style="imagePosition">
      <ImageLoaderVue
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div ref="title" class="title">{{ carousel.title }}</div>
    <div ref="desc" class="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
// import { getBanners } from "@/api/banner";
import ImageLoaderVue from "@/components/ImageLoader.vue";

export default {
  props: ["carousel"],
  components: {
    ImageLoaderVue,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null,
      innerSize: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "2s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };

      this.innerSize = {
        width: this.$refs.img.clientWidth,
        height: this.$refs.img.clientHeight,
      };
    },
    handlMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      // console.log(this.mouseX, this.mouseY);
    },
    handleMouseLeave(){
      this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.carousel-item-container {
  //   background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left:0;
  top:0;
  transition:.3s;
  overflow: hidden;
}
.title,
.desc {
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  left: 5%;
  color: #fff;
  letter-spacing: 3px;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
}
.title {
  top: calc(50% + 30px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 80px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>