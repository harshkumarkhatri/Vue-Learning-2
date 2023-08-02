<template>
  <div class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{ page.message }}</p>
  </div>
</template>

<script>
export default {
  name: "PageViewer",
  props: ["page"],
};
</script>
