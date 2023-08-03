import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./components/PageViewer";
import CreatePage from "./components/CreatePage";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/:index?",
      component: PageViewer,
      props: true,
    },
    {
      path: "/create",
      component: CreatePage,
    },
  ],
});

export default router;
