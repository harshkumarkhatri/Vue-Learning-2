<template>
  <!-- <p>This is some simple text</p>
   <Navbar></Navbar>
  <PageViewer></PageViewer> -->
  <page-navbar
    :pages="pages"
    :index="activePage"
    :update-active-index="(index) => (activePage = index)"
  ></page-navbar>
  <page-viewer :page="pages[activePage]"></page-viewer>
</template>

<script>
import PageViewer from "./components/PageViewer.vue";
import PageNavbar from "./components/PageNavbar.vue";

export default {
  components: {
    PageNavbar,
    PageViewer,
  },
  data() {
    return {
      // Used for tracking the current selected page
      activePage: 0,
      // navbarDark: false,
      pages: [
        {
          pageTitle: "Hello vue",
          message: "Welcome to my first vue website",
          links: [
            { text: "Home", urlPath: "index.html" },
            { text: "About", urlPath: "about.html" },
            { text: "Contact", urlPath: "contact.html" },
          ],
        },
        {
          pageTitle: "About Vue",
          message: "Welcome to my first vue website",
          links: [
            { text: "Home", urlPath: "index.html" },
            { text: "About", urlPath: "about.html" },
            { text: "Contact", urlPath: "contact.html" },
          ],
        },
        {
          pageTitle: "Contact Vue",
          message: "Welcome to my first vue website",
          links: [
            { text: "Home", urlPath: "index.html" },
            { text: "About", urlPath: "about.html" },
            { text: "Contact", urlPath: "contact.html" },
          ],
        },
      ],
    };
  },
};
</script>
