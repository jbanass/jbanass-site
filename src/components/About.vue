<template>
  <section>
    <div class="about">
      <div class="about__img half">
        <img
          title="I prefer Spaces over Tabs"
          alt="A floating astronaut in space on a laptop programming"
          src="../assets/Astronaut.png"
        />
      </div>
      <div class="about__content half">
        <h2 class="about__header">Hello</h2>
        <div class="about__subheader">Passionate. Involved. Dedicated.</div>
        <p class="about__description">
          I am an extremely motivated Chicago-based developer immersed in the
          potential of computers since the ripe age of seven. Always consumed by
          the latest hardware and software trends, I live and breathe to push
          the limits of what people think apps can do.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.about__header {
  letter-spacing: 0.2em;
  padding: 10px;
  border-left: 5px solid $teal;
  color: $teal;
  font-size: 80%;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.about__subheader {
  padding: 20px 0px;
  font-family: $subheading-font;
  font-weight: $subheading-weight;
}

.half {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about {
  display: flex;
  flex-direction: column;
  margin: 60px 40px;
}

.about__img {
  align-items: center;

  img {
    width: 60%;
  }
}

@media only screen and (min-width: 768px) {
  .half {
    width: 50%;
  }

  .about__subheader {
    font-size: 120%;
  }

  .about {
    flex-direction: row-reverse;
    margin: 0 30px;
  }

  .about__content {
    width: 50%;
  }

  .about__img {
    width: 50%;
    padding: 0 20px;

    img {
      width: 320px;
    }
  }
}
</style>
