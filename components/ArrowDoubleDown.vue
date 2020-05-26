<template>
  <a v-scroll-to="'#scroll-down'" class="arrow animated fadeInUp delay-1s">
    <img
      src="~/assets/img/double-down.svg"
      alt="double down arrow"
      class="customFloat customBounce-hover"
    />
  </a>
</template>

<script>
export default {
  name: 'ArrowDoubleDown',
};
</script>

<style lang="scss" scoped>
.arrow {
  grid-column: 1 / -1;
  font-size: 2em;
  cursor: pointer;
  img {
    box-shadow: none;
  }
  @media only screen and ($x-small-bp) {
    display: none;
  }
}
</style>
