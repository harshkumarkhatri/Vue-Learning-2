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
          v-for="(page, localIndex) in publishedPages"
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
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  created() {
    this.getThemeSettings();
  },
  methods: {
    changeTheme() {
      this.themeShade = this.themeShade == "light" ? "dark" : "light";
      this.storeThemeSettings();
    },
    storeThemeSettings() {
      localStorage.setItem("theme", this.themeShade);
    },
    getThemeSettings() {
      let theme = localStorage.getItem("theme");
      if (theme != null) {
        this.themeShade = theme;
      }
    },
  },
};
</script>
