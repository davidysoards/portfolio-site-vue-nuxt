<template>
  <li class="website-full">
    <div class="thumb-container">
      <img :src="imgSrc" :alt="project.imgAlt" />
    </div>
    <div class="content-container">
      <h4>{{ project.heading }}</h4>
      <p>
        {{ project.description }}
      </p>
      <p class="read-story">
        <nuxt-link v-if="project.nuxtLink" :to="project.linkURL">
          {{ project.linkText }}
          <font-awesome-icon :icon="['fas', 'angle-double-right']" />
        </nuxt-link>
        <a v-else :href="project.linkURL" target="_blank">
          {{ project.linkText }}
          <font-awesome-icon :icon="['fas', 'angle-double-right']" />
        </a>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CardFullWidth',
  props: {
    project: { type: Object, default: () => {} },
  },
  data() {
    return {};
  },
  computed: {
    imgSrc() {
      return require(`~/assets/img/${this.project.imgFileName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  text-align: left;
}
.thumb-container {
  overflow: hidden;
  max-height: 300px;
  border-radius: 6px;
  img {
    border-radius: none;
    box-shadow: none;
  }
}
</style>
