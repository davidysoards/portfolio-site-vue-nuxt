<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
    <the-sticky-nav />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheStickyNav from '~/components/TheStickyNav.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheFooter,
    TheStickyNav,
  },
};
</script>

<style lang="scss">
body {
  display: flex;
  flex-direction: column;
}

img {
  border-radius: 6px;
}

h1 {
  margin: 0;
  font-family: $fanfare-black;
  font-size: 5em;
  color: white;
  line-height: 1;
}

h2 {
  font-family: $albertus;
  font-size: 2.6em;
  color: $color-text;
  @media only screen and ($small-bp) {
    font-size: 3em;
  }
}

h3 {
  margin: 0.6em 0 0.2em;
  font-family: $albertus;
  text-transform: uppercase;
  font-size: 1.2em;
  color: $color-primary-dark;
  @media only screen and ($small-bp) {
    font-size: 1.6em;
  }
  // can't target rich text from contentful with scoped css
  .project-page & {
    @media only screen and ($small-bp) {
      font-size: 1.3em;
    }
  }
}

h4 {
  margin: 0.6em 0 0.2em;
  font-family: $albertus;
  font-size: 1.1em;
  color: $color-primary;
  @media only screen and ($small-bp) {
    font-size: 1.3em;
  }
}

p {
  font-family: $pegasus;
  color: $color-text;
  font-size: 1em;
  @media only screen and ($small-bp) {
    font-size: 1.1em;
  }
  @media only screen and ($medium-bp) {
    font-size: 1.2em;
  }
}
a {
  color: $color-secondary;
  transition: color 0.2s linear, opacity 0.2s linear;
}

button,
.button {
  background-image: linear-gradient(
    to bottom,
    darken($color-secondary, 7%) 0%,
    $color-secondary 50%,
    darken($color-secondary, 13%) 100%
  );
  background-size: auto 200%;
  border: none;
  padding: 0.5em;
  border-radius: 3px;
  font-family: $albertus;
  color: white;
  font-size: 0.9em;
  box-shadow: 0px 0px 2px rgba($color: black, $alpha: 0.15);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-position: bottom;
  }
  @media only screen and ($medium-bp) {
    font-size: 1.1em;
  }
}

main {
  display: grid;
  grid-gap: 1em;
  margin-top: 1em;
}

.wrapper {
  margin: 0 auto;
  padding: 1em 2.5%;
  max-width: 1200px;
}

.hero {
  display: grid;
  background: $color-primary-light;
  min-height: 100vh;

  h1 {
    @media only screen and ($small-bp) {
      font-size: 6em;
    }
    @media only screen and ($medium-bp) {
      font-size: 8em;
    }
    @media only screen and ($large-bp) {
      font-size: 9.2em;
    }
  }

  &-grid {
    display: grid;
    grid-gap: 1em;
    align-content: center;
    align-items: center;
    margin-top: 194px;
    padding-top: 0;
    padding-bottom: 5%;
    overflow: hidden;
    @media only screen and ($medium-bp) {
      margin-top: 110px;
    }
    @media only screen and ($small-bp) {
      grid-template-columns: 1fr 2fr;
    }
  }
}
</style>
