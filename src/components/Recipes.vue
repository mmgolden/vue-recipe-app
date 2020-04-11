<template>
  <section id="recipes">
    <div class="container">
      <recipe-card
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
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
  padding: 0 2rem;
}

.recipe-card {
  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
