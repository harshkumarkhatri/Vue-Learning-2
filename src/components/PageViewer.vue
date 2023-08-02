<template>
  <div class="container">
    <h1>Page Title</h1>
    <p>Page Message</p>
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
