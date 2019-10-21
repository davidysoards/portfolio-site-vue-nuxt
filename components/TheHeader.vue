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
            <nuxt-link to="#contact">Contact</nuxt-link>
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

    <!-- fixed sticky nav -->
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
    <!-- /fixed sticky nav -->
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
%nav {
  display: grid;
  grid-gap: 2.6em;
  grid-auto-flow: column;
  justify-content: center;
  a {
    font-family: $albertus;
    font-size: 1em;
    text-shadow: 1px 1px 0.5px rgba(0, 0, 0, 0.07);
    &:hover {
      color: $color-secondary;
    }
  }
}

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

// =FIXED HEADER =========
/*** change to footer ***/
.fixed-header {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 50;
  background: rgba($color: white, $alpha: 0.95);
  box-shadow: 1px 0 4px rgba($color: black, $alpha: 0.3);
  .wrapper {
    display: flex;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  nav {
    margin-left: auto;
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
