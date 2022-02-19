<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__image">
        <img
          alt="Joseph Banass Logo"
          title="Joseph Banass Logo"
          src="../assets/JB-Logo-Footer.png"
        />
      </div>
      <div class="footer__copy">Let's get in touch.</div>
      <div class="footer__social">
        <div v-for="socialMedia in socialMedias()" :key="socialMedia.id">
          <a :href="socialMedia.url" :id="socialMedia.id"
            ><i :class="socialMedia.class"
          /></a>
        </div>
      </div>
    </div>
    <div class="footer__copyright">&copy; {{ copyrightYear() }}</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    copyrightYear: () => {
      return new Date().getFullYear();
    },
    socialMedias: () => {
      return [
        {
          class: "ion-social-facebook",
          url: "https://www.facebook.com/joe.banass",
          id: "facebook",
        },
        {
          class: "ion-social-linkedin",
          url: "https://www.linkedin.com/in/joe-banass",
          id: "linkedin",
        },
        {
          class: "ion-social-github",
          url: "https://www.github.com/jbanass",
          id: "github",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  .footer__image {
    margin: 25px 0 45px 0;
    img {
      width: 200px;
    }
  }

  .footer__content {
    margin-bottom: 30px;

    .footer__copy {
      color: $light-purple;
      font-family: $subheading-font;
      margin-bottom: 12px;
    }
  }

  .footer__social {
    flex-direction: row;
    display: flex;
    text-align: center;
    gap: 35px;
    div {
      width: 40px;
      height: 40px;

      a {
        color: $light-purple;
        vertical-align: middle;
        transition: 0.4s;
        &:hover,
        &:active {
          color: $light-gray;
        }
      }
    }
  }

  .footer__copyright {
    font-size: 70%;
    color: $light-purple;
  }
}
</style>
