<template>
  <header class="fixed-header">
    <div class="wrapper">
      <nuxt-link to="/" class="logo-fixed">
        <img src="~/assets/img/DYS-logo-150.gif" alt="DYS logo" />
      </nuxt-link>
      <nav>
        <ul class="fixed-nav">
          <li>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 50;
  background: rgba($color: white, $alpha: 0.95);
  box-shadow: 1px 0 4px rgba($color: black, $alpha: 0.3);

  img {
    display: block;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2.5%;
  }

  a:hover {
    opacity: 0.6;
  }
}

.logo-fixed {
  img {
    width: 50px;
    @media only screen and ($x-small-bp) {
      width: 36px;
    }
  }
}

.fixed-nav {
  @extend %nav;

  a {
    color: $color-secondary;
  }
}
</style>
