<template>
  <a
    class="nav-link"
    :class="activeClass"
    aria-current="page"
    :href="page.links[index].urlPath"
    :title="`This link taked to ${page.links[index].text} page`"
    >{{ page.links[index].text }}
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
