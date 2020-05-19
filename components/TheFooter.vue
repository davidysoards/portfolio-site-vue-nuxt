<template>
  <footer>
    <section id="contact">
      <div class="wrapper">
        <h2>Holler At Your Boy</h2>

        <form id="reused_form" class="contact-form">
          <p>
            <input
              id="name"
              name="name"
              type="text"
              class="feedback-input"
              placeholder="📛 Name"
              aria-label="name"
              required
            />
          </p>
          <p>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="feedback-input"
              placeholder="✉️ Email"
              aria-label="email"
            />
          </p>
          <p>
            <textarea
              id="comment"
              name="message"
              class="feedback-input"
              placeholder="🖊️ Message"
              aria-label="message"
            ></textarea>
          </p>
          <button type="submit">Send Message</button>
        </form>
        <div id="error_message" style="width:100%; height:100%; display:none;">
          <h4>Error</h4>
          Sorry there was an error sending your form.
        </div>
        <div
          id="success_message"
          style="width:100%; height:100%; display:none;"
        >
          <h2>Yay! Your message was sent successfully.</h2>
        </div>
      </div>
      <!-- /wrapper -->
    </section>

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
  margin-top: 1em;
}

// =CONTACT FORM
#contact {
  padding-bottom: 1em;
  h2 {
    font-family: $fanfare-black;
    font-size: 3.5em;
    line-height: 1.1;
    color: white;
    margin-bottom: 0.5em;
    @media only screen and ($small-bp) {
      font-size: 5em;
    }
  }
}

.contact-form {
  display: grid;
  // grid-gap: 1em;
  max-width: 768px;
  margin: 0 auto;
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 150px;
    resize: vertical;
  }
  .feedback-input {
    color: $color-text;
    font-family: $pegasus;
    padding: 0.5em;
    width: 100%;
    border: 3px solid rgba(0, 0, 0, 0);
    &:focus {
      border: 3px solid $color-primary;
      color: $color-primary;
      outline: none;
      padding: 0.5em;
    }
  }
  button {
    width: auto;
    background: rgba($color: black, $alpha: 0.05);
    border: 2px solid white;
    color: white;
    &:hover {
      background: $color-secondary;
    }
    @media only screen and ($small-bp) {
      width: 33%;
      justify-self: end;
    }
  }
}

// =COPYRIGHT & SOCIALS
.copyright {
  grid-column: 1 / -1;
  background: $color-primary;
  color: white;
  /* margin-bottom: 60px;
  @media only screen and ($x-small-bp) {
    margin-bottom: 46px;
  } */
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
