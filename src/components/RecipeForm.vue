<template>
  <section id="recipe-form">
    <h2 class="title is-3">Add a recipe</h2>
    <form @submit.prevent="handleSubmit">
      <b-field label="Title" :type="invalidTitle" :message="titleMessage">
        <b-input
          type="text"
          placeholder="Add a title"
          v-model="recipe.title"
          ref="first"
          @keypress.native="clearStatus"
        ></b-input>
      </b-field>
      <b-field label="Ingredients" :type="invalidIngredients" :message="ingredientsMessage">
        <b-input
          type="text"
          placeholder="Add ingredients separated by a comma"
          v-model="recipe.ingredients"
          @keypress.native="clearStatus"
        ></b-input>
      </b-field>
      <b-message type="is-success" v-if="isSuccessful" size="is-small">Recipe successfully added</b-message>
      <p class="control">
        <button class="button is-primary">Add recipe</button>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: "recipe-form",
  data() {
    return {
      isSubmitting: false,
      isSuccessful: false,
      recipe: {
        title: "",
        ingredients: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.isSubmitting = true;
      this.clearStatus();

      if (this.invalidTitle || this.invalidIngredients) {
        return;
      }

      this.$emit("add:recipe", this.recipe);
      this.$refs.first.focus();
      this.recipe = {
        title: "",
        ingredients: ""
      };
      this.isSuccessful = true;
      this.isSubmitting = false;
    },
    clearStatus() {
      this.isSuccessful = false;
    }
  },
  computed: {
    invalidTitle() {
      return this.isSubmitting && this.recipe.title === "" ? "is-danger" : "";
    },
    titleMessage() {
      return this.isSubmitting && this.recipe.title === ""
        ? "Please enter a title"
        : "";
    },
    invalidIngredients() {
      return this.isSubmitting && this.recipe.ingredients === ""
        ? "is-danger"
        : "";
    },
    ingredientsMessage() {
      return this.isSubmitting && this.recipe.ingredients === ""
        ? "Please enter ingredients"
        : "";
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  padding: 0 2rem;
}

form {
  padding: 0 2rem 3rem 2rem;
}
</style>
