<template>
  <div v-loading="loading" class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItemVue :carousel="item" />
      </li>
    </ul>

    <div v-show="index > 0" @click="switchTo(index - 1)" class="icon icon-up">
      <IconVue type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <IconVue type="arrowDown" />
    </div>

    <ul class="indicator">
      <li
        :class="{
          active: i === index,
        }"
        @click="switchTo(i)"
        v-for="(item, i) in data"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>
<script>
import CarouselItemVue from "./CarouselItem.vue";
import IconVue from "@/components/Icon.vue";
import { mapState } from "vuex";

export default {
  components: {
    CarouselItemVue,
    IconVue,
  },
  // directives:{
  //   loading
  // },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false,
    };
  },
  created(){
    this.$store.dispatch("banner/fetchBanners")
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"])
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      this.switching = true;
      if (e.deltaY < 0) {
        if (this.index === 0) {
          this.handleTransitionEnd();
          return;
        }
        this.index--;
      } else if (e.deltaY > 0) {
        if (this.index >= this.data.length - 1) {
          this.handleTransitionEnd();
          return;
        }
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/style/mixin.less");
@import url("~@/style/var.less");
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  @gap: 15px;
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @keyframes jump-up {
    0% {
      transform: translate(-50%, 10px);
    }
    50% {
      transform: translate(-50%, -10px);
    }
    100% {
      transform: translate(-50%, 10px);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -10px);
    }
    50% {
      transform: translate(-50%, 10px);
    }
    100% {
      transform: translate(-50%, -10px);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    &.active {
      background: #fff;
    }
  }
}
</style>
