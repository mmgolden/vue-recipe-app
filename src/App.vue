<template>
  <div id="app">
    <header>
      <div class="container">
        <h1 class="title is-1">Recipes</h1>
      </div>
    </header>
    <main>
      <div class="container">
        <recipe-form />
        <recipes :recipes="recipes" />
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
