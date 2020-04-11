<template>
  <section id="recipe-form">
    <h2 class="title is-3">Add a recipe</h2>
    <form>
      <b-field label="Title">
        <b-input type="text" placeholder="Add a title"></b-input>
      </b-field>
      <b-field label="Ingredients">
        <b-input
          type="text"
          placeholder="Add ingredients separated by a comma"
        ></b-input>
      </b-field>
      <p class="control">
        <button class="button is-primary">
          Add recipe
        </button>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: "recipe-form"
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
