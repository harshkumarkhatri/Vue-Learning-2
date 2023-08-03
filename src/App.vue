<template>
  <page-navbar></page-navbar>
  <!-- <page-viewer :page="pages[activePage]"></page-viewer>
  <create-page @page-created="pageCreated"></create-page> -->
  <router-view></router-view>
  <!-- First approach of handling when data is being loaded -->
  <!-- v-if="pages.length > 0" -->
</template>

<script>
import PageNavbar from "./components/PageNavbar.vue";
// import PageViewer from "./components/PageViewer.vue";
// import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    PageNavbar,
    // PageViewer,
    // CreatePage,
  },
  // created() {
  //   this.getPages();
  //   this.$bus.$on("navbarLinkActivated", (index) => {
  //     this.activePage = index;
  //   });
  // },
  // data() {
  //   return {
  //     // Used for tracking the current selected page
  //     activePage: 0,
  //     // navbarDark: false,
  //     pages: [],
  //   };
  // },
  methods: {
    // async getPages() {
    //   let res = await fetch("pages.json");
    //   let data = await res.json();
    //   this.pages = data;
    // },
    pageCreated(pageObject) {
      // console.log(pageObject);
      // TODO: Not adding the value again and again if it is already present
      this.pages.push(pageObject);
      console.log(this.pages);
    },
  },
};
</script>
