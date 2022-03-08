<template>
  <div :class="{ show: isScrolled }" class="sticky-footer">
    <div class="wrapper">
      <nuxt-link to="/" class="logo">
        <img src="~/assets/img/DYS-logo-150.gif" alt="DYS logo" />
      </nuxt-link>
      <nav>
        <ul class="nav">
          <li>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheStickyNav',
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
      // if (this.isScrolled) {
      //   console.log('over');
      // } else {
      //   console.log('under');
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.sticky-footer {
  opacity: 0;
  transform: translate3d(0, 70px, 0);
  transition: 0.3s ease-in;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 50;
  background: rgba($color: white, $alpha: 0.95);
  box-shadow: 1px 0 4px rgba($color: black, $alpha: 0.3);

  &.show {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

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

.logo {
  img {
    width: 50px;
    @media only screen and ($x-small-bp) {
      width: 36px;
    }
  }
}

.nav {
  @extend %nav;

  a {
    color: $color-secondary;
  }
}
</style>
