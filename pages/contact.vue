<template>
  <main id="contact">
    <div class="wrapper">
      <h2>Holler At Your Boy</h2>
      <p v-if="status" class="contact-status">{{ status }}</p>
      <form
        v-else
        ref="contactForm"
        name="contactme"
        class="contact-form"
        @submit.prevent="handleSubmit"
      >
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            class="contact-input"
            placeholder="📛"
            aria-label="name"
            required
          />
        </label>
        <label>
          Email
          <input
            id="email"
            name="email"
            type="email"
            required
            class="contact-input"
            placeholder="✉️"
            aria-label="email"
          />
        </label>
        <label>
          Message
          <textarea
            id="comment"
            name="message"
            class="contact-input"
            placeholder="🖊️"
            aria-label="message"
          ></textarea>
        </label>
        <div class="hidden">
          <label>Don't fill this out: <input name="_gotcha" /></label>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      status: '',
    };
  },
  methods: {
    async handleSubmit(e) {
      try {
        const data = new FormData(e.target);
        const res = await fetch('https://formspree.io/f/mrgnovqn', {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          this.status = "Thanks! I'll get back to you soon.";
          this.$refs.contactForm.reset();
          setTimeout(() => {
            this.status = '';
          }, 5000);
        } else {
          res.json().then((data) => {
            if (Object.hasOwn(data, 'errors')) {
              this.status = data.errors.map((error) => error.message).join(', ');
            } else {
              this.status = 'Oops! There was a problem submitting your form';
            }
          });
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        this.status = 'Oops! There was a problem submitting your form';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  grid-gap: 0;
  background: $color-primary-light;
  margin: 0;
  height: 100vh;
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
  max-width: 768px;
  @media only screen and ($medium-bp) {
    width: 640px;
  }
  label {
    color: white;
    font-size: 1.2em;
    text-align: left;
  }
  input,
  textarea {
    width: 100%;
    margin-bottom: 1em;
    margin-top: 0.25em;
  }
  textarea {
    height: 150px;
    resize: vertical;
  }
  .contact-input {
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

.hidden {
  display: none;
}

.contact-status {
  font-size: 1.75rem;
}
</style>
