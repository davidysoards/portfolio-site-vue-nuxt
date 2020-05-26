<template>
  <footer>
    <section class="copyright">
      <div class="wrapper">
        <menu-social-icons />
        <p>&copy; {{ currentYear }} DYS Multimedia LLC</p>
      </div>
    </section>
  </footer>
</template>

<script>
import MenuSocialIcons from '~/components/MenuSocialIcons.vue';

export default {
  name: 'TheFooter',
  components: { MenuSocialIcons },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: grid;
  background: $color-primary-light;
}

// =COPYRIGHT & SOCIALS
.copyright {
  grid-column: 1 / -1;
  background: $color-primary;
  color: white;
  .wrapper {
    display: grid;
    grid-gap: 1em;
    @media only screen and ($small-bp) {
      grid-auto-flow: column;
      align-items: center;
      justify-items: start;
    }
  }
  p {
    font-size: 0.9em;
    margin: 0.6em 0;
    color: white;
    text-shadow: 1px 1px 0.5px rgba(0, 0, 0, 0.07);
    @media only screen and ($small-bp) {
      justify-self: end;
    }
  }
}
</style>
