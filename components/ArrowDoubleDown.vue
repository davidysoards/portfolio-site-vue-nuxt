<template>
  <div class="arrow animated fadeInUp delay-1s">
    <a href="#scroll-down">
      <img
        src="~/assets/img/double-down.svg"
        alt="double down arrow"
        class="customFloat customBounce-hover"
      />
    </a>
  </div>
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
  img {
    box-shadow: none;
  }
  @media only screen and ($x-small-bp) {
    display: none;
  }
}
</style>
