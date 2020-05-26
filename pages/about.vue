<template>
  <div class="about-page">
    <section class="hero">
      <div class="wrapper about-hero-grid">
        <div class="heading">
          <h1 class="title">
            <div class="animated fadeInLeftBig">It's All</div>
            <div class="animated fadeInLeftBig delay-2">About Me</div>
          </h1>
          <h2 id="subtitle" class="animated fadeInUp delay-5">
            (Well, at least this page is.)
          </h2>
        </div>
        <img
          id="headshot"
          class="animated zoomIn"
          src="~/assets/img/david-soards-headshot-bw.jpg"
          alt="David Y. Soards looking arms crossed looking to his left"
        />
        <arrow-double-down />
      </div>
    </section>

    <main id="scroll-down" class="about">
      <div class="wrapper">
        <h2>About</h2>

        <p>
          Hello. I’m David Soards and I have a desire to create. I’m also extremely curious about
          how things are made, and I like things that are made well. These traits (or curses) have
          manifest themselves in numerous ways over the years through various creative endeavors.
          Today, I work as a Front-End Developer and UX Designer. I focus on creating products that
          are both visually appealing and also offer the best possible User Experience. I'm a big
          fan of Comics and Animation. I love to incorporate Drawing and Storytelling into my Design
          work whenever possible.
        </p>

        <p>
          User Experience Design is exciting to me because it gives me the opportunity to combine my
          love of visual design and technology with the solid business principles I developed in
          college and my natural entrepreneurial instincts. My goal is to design quality products
          that will enhance people’s lives, to develop websites and applications that people are
          excited to show to their friends and family, and to create experiences that users remember
          and want to experience again.
        </p>

        <p>
          I’m very interested in how the principles of animation and how motion design can be used
          to create better User Experiences on the web. I believe motion for UX is an area that is
          going to continue to grow and receive even more interest in the very near future. I get
          excited about anything related to animation on the web using SVG, JavaScript and CSS. The
          animations at the top of each page of this site were created with Greensock and CSS. The
          GIFs and videos were created in After Effects.
        </p>

        <p>
          Continuing education is extremely important to me, and I’m always looking to learn more
          and new things. Having completed two cohorts at Code Louisville myself, I’m now very happy
          to be giving back and working as a mentor in both the Front-End and JavaScript classes.
        </p>

        <p>
          Please contact me via social media or email if you are interested in the possibility of
          working together.
        </p>

        <p>Thanks for reading!</p>

        <p>DYS</p>
      </div>
      <!-- /wrapper -->
    </main>
  </div>
</template>

<script>
import ArrowDoubleDown from '~/components/ArrowDoubleDown.vue';

export default {
  name: 'About',
  components: {
    ArrowDoubleDown,
  },
  head() {
    return {
      title: `David Soards | About`,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-hero-grid {
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

#subtitle {
  font-size: 1.9em;
  color: white;
  @media only screen and ($x-small-bp) {
    font-size: 1.6em;
  }
}

#headshot {
  max-height: 75vh;
}

main.about {
  .wrapper {
    max-width: 45em;
  }
  h2 {
    text-align: left;
  }
  p {
    font-size: 1.3em;
    text-align: left;
  }
}
</style>
