<template>
  <li>
    <!-- <a
      class="nav-link"
      :class="activeClass"
      aria-current="page"
      :href="page.links[0].urlPath"
      :title="`This link taked to ${page.links[0].text} page`"
      @click.prevent="$bus.$emit('navbarLinkActivated', index)"
      >{{ page.links[0].text }}
    </a> -->
    <router-link
      :to="`/${index}`"
      class="nav-link"
      active-class="active"
      aria-current="page"
      :title="`This link taked to ${page.links[0].text} page`"
      >{{ page.links[0].text }}
    </router-link>
  </li>
</template>

<script scoped>
export default {
  name: "NavbarLink",
  props: ["page", "index"],
  // computed: {
  //   activeClass() {
  //     return {
  //       active: this.isActive,
  //       emphasize: this.isActive,
  //     };
  //   },
  // },
};
</script>

<style>
.emphasize {
  text-decoration: underline !important;
}
</style>
