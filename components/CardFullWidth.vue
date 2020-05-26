<template>
  <li class="website-full">
    <div class="thumb-container">
      <img :src="imgSrc" :alt="image.fields.description" />
    </div>
    <div class="content-container">
      <h4>{{ heading }}</h4>
      <p>
        {{ description }}
      </p>
      <p class="read-story">
        <nuxt-link v-if="isNuxtLink" :to="link">
          {{ linkDisplay }}
          <font-awesome-icon :icon="['fas', 'angle-double-right']" />
        </nuxt-link>
        <a v-else :href="link" target="_blank" rel="noopener noreferrer">
          {{ linkDisplay }}
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
    image: { type: Object, default: () => {} },
    heading: { type: String, default: '' },
    description: { type: String, default: '' },
    isNuxtLink: { type: Boolean, default: false },
    link: { type: String, default: '' },
    linkDisplay: { type: String, default: '' },
  },
  computed: {
    imgSrc() {
      return `https:${this.image.fields.file.url}`;
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
