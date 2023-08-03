<template>
  <div v-if="page" class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{ page.message }}</p>
  </div>
</template>

<script>
export default {
  name: "PageViewer",
  props: ["index"],
  // Second approach of handling when data is being loaded
  // props: {
  //   page: {
  //     type: Object,
  //     default(rawProps) {
  //       console.log(rawProps);
  //       return {
  //         pageTitle: "",
  //         message: "",
  //       };
  //     },
  //   },
  // },
  created() {
    console.log("Rarams print is ");
    console.log(this.$route.params);

    this.page = this.$pages.getSinglePage(this.$route.params.index);

    // this.$watch(
    //   () => this.$route.params,
    //   (newParams, oldParams) => {
    //     console.log(oldParams);
    //     this.page = this.$pages.getSinglePage(newParams.index);
    //   }
    // );
  },

  // Watcher would also be added dynamically by passing it in created

  data() {
    return {
      page: null,
    };
  },

  watch: {
    index(newIndex, oldIndex) {
      console.log(oldIndex);
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },
  // ["page"],
};
</script>
