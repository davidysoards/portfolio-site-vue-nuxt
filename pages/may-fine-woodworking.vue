<template>
  <div class="project-page">
    <section class="hero">
      <div class="hero-wrapper project-hero-grid">
        <div class="hero-heading">
          <h1 class="animated fadeInLeftBig">Case Study</h1>
        </div>
        <img
          :src="heroImage"
          :alt="heroAlt"
          class="project-image animated rotateIn delay-5"
        />

        <arrow-double-down />
      </div>
    </section>

    <main id="scroll-down" class="projects">
      <div class="wrapper">
        <h2>{{ pageTitle }}</h2>
        <div v-html="richText" class="rich-text"></div>
      </div>

      <div>
        <a href="#scroll-down">
          <button><i class="fas fa-angle-double-up"></i> Back to Top</button>
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { createClient } from '../plugins/contentful';
import ArrowDoubleDown from '~/components/ArrowDoubleDown.vue';

const client = createClient();
const richTextRenderOptions = {
  renderNode: {
    'embedded-asset-block': node =>
      `<figure style="margin-bottom:2.6rem; text-align:center;">
        <img src="${node.data.target.fields.file.url}" alt="" />
        <figcaption style="font-size:1rem;">${node.data.target.fields.description}</figcaption>
      </figure>`,
  },
};

export default {
  name: 'MayFineWoodworking',
  components: {
    ArrowDoubleDown,
  },
  asyncData({ env }) {
    return client
      .getEntry('7jMnJrE8kLcYXGJjm9xcSJ')
      .then(entry => {
        // console.log(entry.fields);
        return {
          heroImage: entry.fields.heroImage.fields.file.url,
          heroAlt: entry.fields.heroImage.fields.description,
          pageTitle: entry.fields.pageTitle,
          richText: documentToHtmlString(
            entry.fields.pageBody,
            richTextRenderOptions
          ),
        };
      })
      .catch(console.error);
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  background: $color-primary-light;
  min-height: 100vh;
  img {
    box-shadow: none;
  }
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

  .project-hero-grid {
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
      grid-template-columns: 1fr 1fr;
      grid-gap: 3em;
    }
  }
}

.project-image {
  max-height: 66vh;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
}

.wrapper {
  max-width: 740px;
}

h2 {
  text-align: left;
  margin-bottom: 1em;
}

.rich-text {
  text-align: left;
  font-size: 1.1em;
  line-height: 1.5;
}
</style>
