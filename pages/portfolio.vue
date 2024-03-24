<template>
  <div class="portfolio-page">
    <CoolLightBox :items="items" :index="index" @close="index = null" />

    <section class="hero">
      <div class="wrapper hero-grid">
        <div class="heading">
          <h1 id="title">
            <span class="animated flipInX">My</span>
            <span class="animated flipInX delay-2">Work</span>
          </h1>
        </div>
        <img
          id="desk-illustration"
          class="animated bounceInRight slow"
          src="~/assets/img/desk.svg"
          alt="illustration of desk with a laptop, external monitor and speakers"
        />
        <arrow-double-down />
      </div>
    </section>

    <main id="scroll-down" class="portfolio">
      <div class="wrapper">
        <h2>Portfolio</h2>
        <section class="jump-to">
          <p>Scroll to:</p>
          <div class="categories-list">
            <a v-scroll-to="'#graphics'" class="button">Design &amp; Illustration</a>
          </div>
        </section>
      </div>

      <section id="websites">
        <div class="wrapper">
          <h3 class="category-title">Web &amp; UX</h3>
          <ul class="websites-list">
            <card-full-width
              v-for="project in webProjects"
              :key="project.sys.id"
              v-bind="project.fields"
            />
          </ul>
        </div>
      </section>

      <section id="graphics">
        <div class="wrapper">
          <h3 class="category-title">Design &amp; Illusration</h3>
          <ul class="category-grid">
            <card-overlay
              v-for="(project, projectIndex) in graphicProjects"
              :key="project.sys.id"
              v-bind="project.fields"
              @click="index = projectIndex"
            />
          </ul>
        </div>
      </section>

      <div class="back-to-top">
        <a v-scroll-to="'#scroll-down'" class="button">
          <i class="fas fa-angle-double-up"></i> Back to Top
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox';
import { createClient } from '../plugins/contentful';

import CardFullWidth from '~/components/CardFullWidth.vue';
import CardOverlay from '~/components/CardOverlay.vue';
import ArrowDoubleDown from '~/components/ArrowDoubleDown.vue';

import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

const client = createClient();

export default {
  name: 'Portfolio',
  components: {
    CardFullWidth,
    CardOverlay,
    ArrowDoubleDown,
    CoolLightBox,
  },
  asyncData({ env }) {
    return (
      Promise.all([
        // fetch all web projects
        client.getEntries({
          content_type: 'projectsWeb',
          order: 'fields.order',
        }),
        // fetch all graphics projects
        client.getEntries({
          content_type: 'projectsGraphics',
          order: 'fields.order',
        }),
        // fetch all gif projects
        client.getEntries({
          content_type: 'projectsAnimatedGifs',
          order: 'fields.order',
        }),
        // fetch all art and comics projects
        client.getEntries({
          content_type: 'projectsArt',
          order: 'fields.order',
        }),
      ])
        .then(([projectsWeb, projectsGraphics, projectsAnimatedGifs, projectsArt]) => {
          // return data that should be available
          // in the template
          return {
            webProjects: projectsWeb.items,
            graphicProjects: [
              ...projectsGraphics.items,
              ...projectsAnimatedGifs.items,
              ...projectsArt.items,
            ],
          };
        })
        // eslint-disable-next-line
        .catch(console.error)
    );
  },
  data() {
    return {
      index: null,
    };
  },
  head() {
    return {
      title: 'David Soards | Portolio',
    };
  },
  computed: {
    items() {
      return this.graphicProjects.map((project) => ({
        description: project.fields.description,
        src: project.fields.fullGraphic.fields.file.url,
        // title: project.fields.title,
        // thumb: project.fields.thumbnail.fields.file.url,
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
#desk-illustration {
  box-shadow: none;
}

#title {
  span {
    display: inline-block;
  }
}

#desk-illustration {
  max-height: 75vh;
}

.jump-to {
  p {
    margin-bottom: 0.5em;
  }
  .categories-list {
    display: grid;
    grid-gap: 0.6em;
    grid-template-columns: 1fr 1fr;
    button {
      width: 100%;
    }
    @media (min-width: 450px) {
      grid-template-columns: none;
      grid-auto-flow: column;
    }
  }
}

.category-title {
  margin-bottom: 1em;
}

// =Websites
#websites {
  background: $color-primary-lighter;
  padding-bottom: 3em;
}

.websites-list {
  display: grid;
  grid-gap: 4em;
  max-width: 1000px;
  margin: 0 auto;
  li {
    display: grid;
    grid-gap: 2em;
    grid-auto-columns: 1fr;
    padding: 1em;
    box-shadow: 0px 1px 5px rgba($color: black, $alpha: 0.3);
    align-items: center;
    border-radius: 6px;
    @media only screen and ($medium-bp) {
      grid-template-columns: 1fr 1fr;
    }
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
  }
}

.website-full {
  background: white;
  a:hover {
    opacity: 0.6;
  }
}

.category-grid {
  display: grid;
  grid-gap: 2em;
  justify-items: center;

  @media only screen and ($medium-bp) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and ($large-bp) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.back-to-top {
  margin-top: 1rem;
  margin-bottom: 3rem;
}
</style>
