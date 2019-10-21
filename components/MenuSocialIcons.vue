<template>
  <ul class="social-icons">
    <li>
      <a href="https://github.com/davidysoards" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </li>

    <li>
      <a href="https://twitter.com/ninjasoards" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/ninjasoards/" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </li>

    <li>
      <a href="https://www.linkedin.com/in/davidysoards/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/ninjasoards" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuSocialIcons',
};
</script>

<style lang="scss" scoped>
.social-icons {
  font-size: 1.3em;
  color: white;
  display: grid;
  grid-gap: 1.6em;
  grid-auto-flow: column;
  justify-content: center;
  a {
    color: white;
    &:hover {
      color: $color-secondary;
    }
  }
  @media only screen and ($medium-bp) {
    font-size: 1.6em;
  }
  @media only screen and ($large-bp) {
    font-size: 1.7em;
  }
}
</style>
