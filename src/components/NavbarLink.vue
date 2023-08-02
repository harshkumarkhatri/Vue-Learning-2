<template>
  <a
    class="nav-link"
    :class="activeClass"
    aria-current="page"
    :href="page.links[0].urlPath"
    :title="`This link taked to ${page.links[0].text} page`"
    >{{ page.links[0].text }}
  </a>
</template>

<script scoped>
export default {
  name: "NavbarLink",
  props: ["page", "isActive", "index"],
  computed: {
    activeClass() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>

<style>
.emphasize {
  text-decoration: underline !important;
}
</style>
