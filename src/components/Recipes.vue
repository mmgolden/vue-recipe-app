<template>
  <section id="recipes">
    <div class="container">
      <b-message v-if="recipes.length < 1">There are no recipes. Create some!</b-message>
      <recipe-card
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
        v-on="$listeners"
        class="recipe-card"
      />
    </div>
  </section>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: "recipes",
  components: {
    RecipeCard
  },
  props: {
    recipes: Array
  }
};
</script>

<style scoped lang="scss">
#recipes {
  padding: 0 2rem 3rem 2rem;
}

.recipe-card {
  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
