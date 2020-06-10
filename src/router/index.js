import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import Board from "../components/Board.vue";
import News from "../components/News.vue";
import BoardContents from "../components/BoardContents.vue";
import Write from "../components/Write.vue";
import ConfirmedInfo from "../components/ConfirmedInfo.vue";
import GlobalInfo from "../components/GlobalInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/todeveloper_watch",
    name: "todeveloper_watch",
    component: Board
  },
  {
    path: "/write",
    name: "write",
    component: Write
  },
  {
    path: "/contents",
    name: "contents",
    component: BoardContents,
    props: true
  },
  {
    path: "/confinfo",
    name: "confinfo",
    component: ConfirmedInfo
  },
  {
    path: "/globalinfo",
    name: "globalinfo",
    component: GlobalInfo
  },
  {
    path: "/news",
    name: "news",
    component: News
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  next();
  document.getElementById("loading").style.display = "";
});
export default router;
