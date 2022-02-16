<template>
  <section>
    <div class="about">
      <div class="about-img">
        <img
          title="I prefer Spaces over Tabs"
          alt="A floating astronaut in space on a laptop programming"
          src="../assets/Astronaut.png"
        />
      </div>
      <div>
        <h2 class="section-header">Hello</h2>
        <div class="section-subheader">Passionate. Involved. Dedicated.</div>
        <p class="section-description">
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
.about {
  display: flex;
  flex-direction: column;
  margin: 60px 40px;
}

.about-img {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
}

@media only screen and (min-width: 768px) {
  .about {
    flex-direction: row-reverse;
    margin: 0 30px;
  }

  .about-img {
    padding: 0 20px;
    img {
      width: 320px;
    }
  }
}
</style>
