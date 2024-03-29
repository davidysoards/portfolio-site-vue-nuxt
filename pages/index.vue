<template>
  <div class="home-page">
    <section class="hero">
      <div class="wrapper hero-grid">
        <div class="hero-heading">
          <h1>
            <span class="animated flipInX">My</span>
            <span class="animated flipInX delay-1">Name</span>
            <span class="animated flipInX delay-2">Is</span>
            <span class="animated flipInX delay-3">David</span>
          </h1>
        </div>
        <svg-head-balloon />
        <arrow-double-down />
      </div>
    </section>

    <main id="scroll-down" class="home">
      <section class="i-am">
        <div class="wrapper">
          <h2>I'm a ...</h2>
          <ul class="i-am-skills-list">
            <li class="skill developer">
              <img
                src="~/assets/img/developer-small.gif"
                alt="developer icon text editor on a laptop"
              />
              <h3>Developer</h3>
            </li>

            <li class="skill designer">
              <img src="~/assets/img/designer-small.gif" alt="designer icon drawing a text box" />
              <h3>Designer</h3>
            </li>

            <li class="skill illustrator">
              <img
                src="~/assets/img/illustrator-small.gif"
                alt="illustrator icon drawing on a wacom tablet"
              />
              <h3>Illustrator</h3>
            </li>
          </ul>
        </div>
      </section>

      <section class="i-create">
        <div class="wrapper">
          <h2>I love to create</h2>
          <ul class="i-create-list">
            <li class="i-create-category">
              <nuxt-link to="/portfolio#websites">
                <img
                  src="~/assets/img/mfw-mobile-thumb.jpg"
                  alt="homepage of may fine woodworking"
                />
                <h3>Websites &amp; Apps</h3>
              </nuxt-link>
              <p>
                I enjoy helping people promote &amp; operate their businesses more efficiently. At
                the same time I always advocate for the customer/user.
              </p>
            </li>

            <li class="i-create-category">
              <nuxt-link to="/portfolio#graphics">
                <img src="~/assets/img/Garden-Variety-thumb.jpg" alt="flyer for photo contest" />
                <h3>Graphics</h3>
              </nuxt-link>
              <p>
                I create a variety of graphics for the web &amp; print, including logos, icons,
                business cards &amp; promotional materials.
              </p>
            </li>

            <li class="i-create-category">
              <nuxt-link to="/portfolio#graphics">
                <img src="~/assets/img/3_walks.gif" alt="3 walk cycles" />
                <h3>Animations</h3>
              </nuxt-link>
              <p>
                I love adding motion to my designs using the principles of animation with After
                Effects or JavaScript &amp; CSS.
              </p>
            </li>

            <li class="i-create-category">
              <nuxt-link to="/portfolio#graphics">
                <img src="~/assets/img/art-prints-thumb.jpg" alt="several art poster prints" />
                <h3>Art &amp; Comics</h3>
              </nuxt-link>
              <p>
                I specialize in ink &amp; watercolor paintings and sequential art that combines both
                traditional &amp; digital techniques.
              </p>
            </li>
          </ul>

          <nuxt-link to="/portfolio" class="button">
            See My Portfolio
            <i class="fas fa-angle-double-right"></i>
          </nuxt-link>
        </div>
      </section>

      <section class="process">
        <div class="wrapper">
          <h2>My UX Design Process</h2>
          <ul class="process-list">
            <li>
              <img
                src="~/assets/img/process-research-small.png"
                alt="process icon eyeball with magnifying glass"
              />
              <h3>Research &amp; Inventory</h3>
              <p>
                Step One is to understand my client and their customers. That means asking
                questions, listening and identifying needs. Once we have established goals for the
                project, I create an inventory of the necessary content.
              </p>
            </li>
            <li>
              <img
                src="~/assets/img/process-sketch-small.png"
                alt="sketching icon pencil drawing wireframes on paper"
              />
              <h3>Sketch &amp; Ideate</h3>
              <p>
                I'm a traditionalist. I sketch out my ideas using pencil or pen and paper. Sketching
                on paper allows me to concentrate on the structure and content of what I am creating
                without getting distracted by typography and color choices.
              </p>
            </li>
            <li>
              <img
                src="~/assets/img/process-test-small.png"
                alt="usability test icon hand touching tablet"
              />
              <h3>Test &amp; Iterate</h3>
              <p>
                Do as little as is necessary in order to validate your ideas. Snapshots of a
                wireframe sketch and a few post-it notes can be made into a prototype and tested. I
                take notes, evaluate the results and make changes as needed.
              </p>
            </li>
          </ul>
          <nuxt-link to="/portfolio" class="button">
            View My Work
            <i class="fas fa-angle-double-right"></i>
          </nuxt-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import SvgHeadBalloon from '~/components/SvgHeadBalloon.vue';
import ArrowDoubleDown from '~/components/ArrowDoubleDown.vue';

export default {
  name: 'Home',
  components: {
    SvgHeadBalloon,
    ArrowDoubleDown,
  },
  head() {
    return {
      title: `David Soards | Home`,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero-heading {
  span {
    display: inline-block;
  }
}

.head-balloon {
  max-width: 100%;
  max-height: 75vh;
  overflow: visible;
  #bighead,
  #balloon,
  #hello {
    visibility: hidden;
  }
}

// =I'm a ==========
.i-am {
  h3 {
    color: $color-text;
  }

  ul {
    display: grid;
    grid-gap: 1em;
    @media only screen and ($medium-bp) {
      grid-template-columns: repeat(3, minmax(150px, 1fr));
    }
  }
}

// =I create ==========
.i-create {
  background: $color-primary-lighter;

  ul {
    display: grid;
    grid-gap: 1em;
    justify-items: center;
    @media only screen and ($medium-bp) {
      grid-gap: 1em 3em;
      grid-template-columns: repeat(2, minmax(300px, 1fr));
    }
  }
  .button {
    margin-bottom: 1em;
    display: inline-block;
  }
}

.i-create-category {
  display: grid;
  justify-items: center;
  margin-bottom: 1em;
  max-width: 400px;

  a {
    img {
      transition: opacity 0.2s linear;
      &:hover {
        opacity: 0.7;
      }
    }
    ba h3 {
      transition: color 0.2s linear;
      &:hover {
        color: $color-secondary;
      }
    }
  }
}

// =process ==========
.process {
  margin-bottom: 2rem;
  ul {
    display: grid;
    grid-gap: 1em;

    h3 {
      text-transform: none;
      color: $color-text;
    }
    @media only screen and ($medium-bp) {
      grid-template-columns: repeat(3, minmax(150px, 1fr));
    }

    li {
      p {
        text-align: left;
      }
    }
  }
  .button {
    margin-top: 1em;
    display: inline-block;
  }
}
</style>
