<template>
  <page-navbar
    :pages="pages"
    :index="activePage"
    :update-active-index="(index) => (activePage = index)"
  ></page-navbar>
  <create-page :page-created="pageCreated"></create-page>
  <!-- <page-viewer :page="pages[activePage]"></page-viewer>
   -->
  <!-- First approach of handling when data is being loaded -->
  <!-- v-if="pages.length > 0" -->
</template>

<script>
// import PageViewer from "./components/PageViewer.vue";
import PageNavbar from "./components/PageNavbar.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    PageNavbar,
    // PageViewer,
    CreatePage,
  },
  created() {
    this.getPages();
  },
  data() {
    return {
      // Used for tracking the current selected page
      activePage: 0,
      // navbarDark: false,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();
      this.pages = data;
    },
    pageCreated(pageObject) {
      console.log(pageObject);
    },
  },
};
</script>
