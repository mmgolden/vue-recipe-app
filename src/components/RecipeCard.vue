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
        <p class="card-header-title">{{ recipe.title }}</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">{{ recipe.ingredients }}</div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Save</a>
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
      </footer>
    </b-collapse>
  </section>
</template>

<script>
export default {
  name: "recipe-card",
  props: {
    recipe: { type: Object, required: true }
  }
};
</script>

<style scoped lang="scss"></style>
