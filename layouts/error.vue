<template>
  <div class="flex-container">
    <div class="flex-item">
      <h1>WTF?!</h1>
      <h2 v-if="error.statusCode === 404">
        Sorry, but the page you were trying to view does not exist.
      </h2>
      <h2 v-else>An unknown error occurred.</h2>
      <nuxt-link to="/">Back to Home Page</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-item {
  text-align: center;
  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 1em;
  }
}
</style>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
