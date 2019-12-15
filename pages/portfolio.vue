<template>
  <div class="portfolio-page">
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
          <p>Jump to:</p>
          <div class="categories-list">
            <nuxt-link to="#websites">
              <button>Web &amp; UX</button>
            </nuxt-link>
            <nuxt-link to="#graphics">
              <button>Graphics</button>
            </nuxt-link>
            <nuxt-link to="#animation">
              <button>Animation</button>
            </nuxt-link>
            <nuxt-link to="#art-comics">
              <button>Art &amp; Comics</button>
            </nuxt-link>
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
          <h3 class="category-title">Graphics</h3>
          <ul class="category-grid">
            <card-overlay
              v-for="project in graphicProjects"
              :key="project.sys.id"
              v-bind="project.fields"
            />
          </ul>
        </div>
      </section>

      <section id="animation">
        <div class="wrapper">
          <h3 class="category-title">Animation</h3>
          <ul class="category-grid">
            <card-overlay
              v-for="project in gifProjects"
              :key="project.sys.id"
              v-bind="project.fields"
            />
          </ul>
        </div>
      </section>

      <section id="art-comics">
        <div class="wrapper">
          <h3 class="category-title">Art &amp; Comics</h3>
          <ul class="category-grid">
            <card-overlay
              v-for="project in artProjects"
              :key="project.sys.id"
              v-bind="project.fields"
            />
          </ul>
        </div>
      </section>

      <div>
        <a href="#scroll-down">
          <button><i class="fas fa-angle-double-up"></i> Back to Top</button>
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import { createClient } from '../plugins/contentful';

import CardFullWidth from '~/components/CardFullWidth.vue';
import CardOverlay from '~/components/CardOverlay.vue';
import ArrowDoubleDown from '~/components/ArrowDoubleDown.vue';

const client = createClient();

export default {
  name: 'Portfolio',
  components: {
    CardFullWidth,
    CardOverlay,
    ArrowDoubleDown,
  },
  head() {
    return {
      title: 'David Soards | Portolio',
    };
  },
  asyncData({ env }) {
    return Promise.all([
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
      .then(
        ([
          projectsWeb,
          projectsGraphics,
          projectsAnimatedGifs,
          projectsArt,
        ]) => {
          // return data that should be available
          // in the template
          return {
            webProjects: projectsWeb.items,
            graphicProjects: projectsGraphics.items,
            gifProjects: projectsAnimatedGifs.items,
            artProjects: projectsArt.items,
          };
        }
      )
      .catch(console.error);
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

// =Animation
#animation {
  background: $color-primary-lighter;
  padding-bottom: 2em;
}
</style>
