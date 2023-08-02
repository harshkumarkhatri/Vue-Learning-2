<template>
  <nav
    id="topNavBar"
    class="navbar navbar-expand-lg"
    :class="[`navbar-${themeShade}`, `bg-${themeShade}`]"
  >
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav mr-auto">
        <li
          v-for="(page, localIndex) in pages"
          class="nav-item"
          :key="localIndex"
        >
          <navbar-link
            :page="page"
            :isActive="localIndex === index"
            :index="localIndex"
            @click.prevent="updateActiveIndex(localIndex)"
          ></navbar-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          Switch Color
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  name: "PageNavbar",
  components: {
    NavbarLink,
  },
  props: ["pages", "index", "updateActiveIndex"],
  data() {
    return {
      themeShade: "light",
    };
  },
  methods: {
    changeTheme() {
      this.themeShade = this.themeShade == "light" ? "dark" : "light";
    },
  },
};
</script>
