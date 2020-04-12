<template>
  <section id="recipe-card">
    <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <b-input
          v-if="isEditMode"
          type="text"
          v-model="recipe.title"
          placeholder="Add a title"
          class="card-header-title"
        ></b-input>
        <p v-else class="card-header-title">{{ recipe.title }}</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <b-taginput v-if="isEditMode" v-model="recipe.ingredients" ellipsis class="content"></b-taginput>
        <b-taglist v-else>
          <b-tag v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</b-tag>
        </b-taglist>
      </div>
      <footer class="card-footer">
        <a v-if="isEditMode" class="card-footer-item" @click="editRecipe(recipe)">Save</a>
        <a v-else class="card-footer-item" @click="enableEditMode(recipe)">Edit</a>
        <a v-if="isEditMode" class="card-footer-item" @click="cancelEdit(recipe)">Cancel</a>
        <a v-else class="card-footer-item" @click="$emit('delete:recipe', recipe.id)">Delete</a>
      </footer>
    </b-collapse>
  </section>
</template>

<script>
export default {
  name: "recipe-card",
  props: {
    recipe: { type: Object, required: true }
  },
  data() {
    return {
      cachedRecipe: {},
      isEditMode: false
    };
  },
  methods: {
    enableEditMode(recipe) {
      this.cachedRecipe = Object.assign({}, recipe);
      this.isEditMode = true;
    },

    editRecipe(recipe) {
      if (recipe.title === "" || recipe.ingredients.length < 1) {
        return;
      }
      this.$emit("edit:recipe", recipe.id, recipe);
      this.isEditMode = false;
    },

    cancelEdit(recipe) {
      Object.assign(recipe, this.cachedRecipe);
      this.isEditMode = false;
    }
  }
};
</script>

<style scoped lang="scss"></style>
