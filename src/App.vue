<template>
  <div id="app">
    <header>
      <div class="container">
        <h1 class="title is-1">Recipes</h1>
      </div>
    </header>
    <main>
      <div class="container">
        <recipe-form @add:recipe="addRecipe" />
        <recipes :recipes="recipes" @delete:recipe="deleteRecipe" @edit:recipe="editRecipe" />
      </div>
    </main>
  </div>
</template>

<script>
import RecipeForm from "@/components/RecipeForm.vue";
import Recipes from "@/components/Recipes.vue";

export default {
  name: "App",
  components: {
    RecipeForm,
    Recipes
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: "🍪 Chocolate chip cookies",
          ingredients:
            "butter, sugar, vanilla extract, eggs, flour, baking soda, baking powder, salt, chocolate chips"
        },
        {
          id: 2,
          title: "🍌 Banana bread",
          ingredients:
            "flour, baking soda, salt, egg, sugar, vegetable oil, buttermilk, vanilla extract, bananas, walnuts"
        }
      ]
    };
  },
  methods: {
    addRecipe(recipe) {
      const lastId =
        this.recipes.length > 0 ? this.recipes[this.recipes.length - 1].id : 0;
      const id = lastId + 1;
      const newRecipe = { ...recipe, id };
      this.recipes = [...this.recipes, newRecipe];
    },
    deleteRecipe(id) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    },
    editRecipe(id, updatedRecipe) {
      this.recipes = this.recipes.map(recipe =>
        recipe.id === id ? updatedRecipe : recipe
      );
    }
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

#app {
  font-family: "Heebo", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

.title {
  padding: 3rem 2rem;
}

.container {
  max-width: 700px !important;
}

$primary: #40a576;
$primary-invert: findColorInvert($primary);

$colors: (
  "primary": (
    $primary,
    $primary-invert
  )
);

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
