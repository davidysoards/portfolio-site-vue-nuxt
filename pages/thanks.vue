<template>
  <main>
    <h2>Yay! Your message was sent successfully.</h2>
  </main>
</template>

<script>
export default {
  name: 'Thanks',
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  grid-gap: 0;
  background: $color-primary-light;
  margin: 0;
  height: 100vh;
}
h2 {
  color: white;
}
footer {
  margin-top: 0;
}
</style>
