<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github"
        ><div class="icon"><IconVue type="github" /></div>
        &nbsp;&nbsp;{{ data.githubName }}</a
      >
    </li>
    <li>
      <a href="mailto:1262500788@qq.com"
        ><div class="icon"><IconVue type="mail" /></div>
        &nbsp;&nbsp;{{ data.mail }}</a
      >
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
        ><div class="icon"><IconVue type="qq" /></div>
        &nbsp;&nbsp;{{ data.qq }}
      </a>
      <div class="pop">
        <img
          :src="data.qqQrCode"
          alt=""
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon"><IconVue type="weixin" /></div>
        &nbsp;&nbsp;{{ data.weixin }}
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import IconVue from "./Icon.vue";
export default {
  components: {
    IconVue,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.contact-container {
  width: 100%;
  padding: 20px;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    cursor: pointer;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  :hover {
    color: @primary;
  }
  a {
    display: flex;
    align-items: center;
  }
  .icon i {
    font-size: 26px;
  }
  .pop {
    img {
      width: 100%;
      border-radius: 10px;
    }
    width: 150px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
    }
  }
}
</style>