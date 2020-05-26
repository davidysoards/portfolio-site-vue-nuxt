<template>
  <header class="main-header">
    <div class="wrapper">
      <nav>
        <ul class="main-nav">
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

      <nuxt-link to="/" class="logo customPulse-hover">
        <img src="~/assets/img/DYS-logo-150.gif" alt="DYS logo" />
      </nuxt-link>

      <div class="socials-menu">
        <menu-social-icons />
      </div>
    </div>
  </header>
</template>

<script>
import MenuSocialIcons from '~/components/MenuSocialIcons.vue';

export default {
  name: 'TheHeader',
  components: { MenuSocialIcons },
};
</script>

<style lang="scss" scoped>
nav {
  a.current-page {
    border-bottom: 2px solid $color-secondary;
  }
}

// =MAIN HEADER =========
.main-header {
  position: absolute;
  width: 100%;
  z-index: 100;
  .wrapper {
    display: grid;
    grid-gap: 1em;
    max-width: none;
    @media only screen and ($medium-bp) {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}

.main-nav {
  @extend %nav;
  a {
    cursor: pointer;
    color: white;
    @media only screen and ($small-bp) {
      font-size: 1.2em;
    }
    @media only screen and ($medium-bp) {
      font-size: 1em;
    }
    @media only screen and ($large-bp) {
      font-size: 1.3em;
    }
  }
}

.logo {
  @media only screen and ($large-bp) {
    order: -1;
  }
  img {
    width: 75px;
    @media only screen and ($large-bp) {
      margin-right: 2em;
    }
  }
}

.socials-menu {
  @media only screen and ($large-bp) {
    margin-left: auto;
  }
}
</style>
