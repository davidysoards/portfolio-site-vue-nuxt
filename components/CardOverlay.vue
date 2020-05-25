<template>
  <li class="item">
    <img :src="thumbSrc" :alt="thumbAlt" />
    <div class="item_overlay">
      <button tabindex="-1" @click="$emit('click')">View →</button>
      <div class="text-container">
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CardOverlay',
  props: {
    description: { type: String, default: '' },
    thumbnail: { type: Object, default: () => {} },
  },
  computed: {
    thumbSrc() {
      return this.thumbnail.fields.file.url;
    },
    thumbAlt() {
      return this.thumbnail.fields.description;
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 300px;
  display: grid;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 1px 5px rgba($color: black, $alpha: 0.3);

  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    border-radius: none;
    box-shadow: none;
  }

  &:hover {
    .item_overlay {
      transform: translateY(0);
    }
  }

  .item_overlay {
    background: rgba($color: #000000, $alpha: 0.2);
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    display: grid;
    justify-items: center;
    align-items: end;
    transform: translateY(100%);
    transition: 0.3s;

    .text-container {
      background: $color-primary-dark;
      width: 100%;
      padding: 0.3em;
    }

    p {
      color: white;
      margin-bottom: 0.6em;
    }

    button {
      background: rgba($color: #000000, $alpha: 0.2);
      border: 2px solid white;

      &:hover {
        background: $color-secondary;
      }
    }
  }
}
</style>
