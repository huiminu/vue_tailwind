import { createRouter, createWebHistory } from "vue-router";
import index from "../page/Index.vue";

const router = createRouter({
  // 起手式
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  // linkActiveClass對應router-link使用的地方做樣式更動
  routes: [
    // 路由表
    {
      path: "/",
      name: "index",
      component: index,
      linkActiveClass:'active',
    },
    {
      path: "/components",
      name: "components",
      component: () => import("../page/Components.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../page/Test.vue"),
      children:[
        {
          path:"step1",
          component: () => import("../page/Step1.vue"),
          // components:{
          //   badges:()=>import('../components/Badges.vue'),
          //   button:()=>import('../components/Button.vue')
          // },
        },
        {
          path:"step2",
          component: () => import("../page/Step2.vue"),
        },
      ]
    },
    // 404頁面 : 提供404頁面讓用戶知道是錯誤頁面
    {
      // *表示全局皆吃的到
      path:'/:pathMatch(.*)*',
      component: () => import("../page/Step2.vue"),
    },
    // 重新導向 : 直接把用戶導入到正確頁面
    // 在test頁面下 重新導向到首頁(test/step1/step2都會作用)
    {
      path:'/test/:pathMatch(.*)*',
      redirect:{
        // 重新導入到index頁面
        name:'index',
      }
    }
  ],
});

export default router;
