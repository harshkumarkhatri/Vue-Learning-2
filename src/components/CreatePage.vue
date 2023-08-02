<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label"> Page Title </label>
        <input type="text" class="form-control" v-model="pageTitle" />
        <!--
            First way of setting up binding for a form
             :value="pageTitle"
          @input="(e) => (pageTitle = e.target.value)" -->
      </div>
      <div class="mb-3">
        <label for="" class="form-label"> Content </label>
        <textarea
          type="text"
          class="form-control"
          rows="5"
          v-model="content"
        ></textarea>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-primary"
          @click="pageCreated({ pageTitle, content })"
        >
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePage",
  props: ["pageCreated"],
  data() {
    return {
      pageTitle: "",
      content: "",
    };
  },
};
</script>
