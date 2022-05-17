import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routers.js"
import { titleControl } from "@/utils"

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleControl.setRouteTitle(to.meta.title);
  }

})

export default router