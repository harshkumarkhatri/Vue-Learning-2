<template>
  <div class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{ page.message }}</p>
  </div>
</template>

<script>
export default {
  name: "PageViewer",
  // Second approach of handling when data is being loaded
  props: {
    page: {
      type: Object,
      default(rawProps) {
        console.log(rawProps);
        return {
          pageTitle: "",
          message: "",
        };
      },
    },
  },
  // ["page"],
};
</script>
