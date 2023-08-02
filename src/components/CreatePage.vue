<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
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
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label"> Link Text </label>
          <input type="text" class="form-control" v-model="linkText" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Link URL </label>
          <input type="text" class="form-control" v-model="linkUrl" />
        </div>
        <div class="row-mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="published"
            />
            <label class="form-check-label" for="gridCheck1">Published</label>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <button
        class="btn btn-primary"
        @click.prevent="submitForm"
        :disabled="isFormInvalid"
      >
        Create Page
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CreatePage",
  //   props: ["pageCreated"],
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
      published: true,
    };
  },
  computed: {
    isFormInvalid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  methods: {
    clearForm() {
      (this.pageTitle = ""),
        (this.content = ""),
        (this.linkText = ""),
        (this.linkUrl = ""),
        (this.published = true);
    },
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert("Please fill all fields to continue");
        return;
      }
      console.log(`Link url is ${this.linkUrl}`);
      this.$emit("pageCreated", {
        pageTitle: this.pageTitle,
        content: this.content,
        links: [{ text: this.linkText, urlPath: this.linkUrl }],
        published: this.published,
      });
      //   this.pageCreated({
      //     pageTitle: this.pageTitle,
      //     content: this.content,
      //     links: [{ text: this.linkText, urlPath: this.linkUrl }],
      //     published: this.published,
      //   });
      this.clearForm();
    },
  },
  watch: {
    pageTitle(newTitle, oldTitle) {
      // This condition is added for the case when
      // the user has changed the link text and it should
      // not update when we change value of page title
      if (this.linkText === oldTitle) {
        this.linkText = newTitle;
      }
    },
  },
};
</script>
