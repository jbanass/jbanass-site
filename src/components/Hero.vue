<template>
  <section class="hero">
    <div class="hero__header">
      <div class="hero__image">
        <img
          alt="Joseph Banass Logo"
          title="Joseph Banass Hero Logo"
          src="../assets/JB-Logo-Main.png"
        />
      </div>
      <p class="hero__text light-gray">
        FULL STACK DEVELOPER BASED IN
        <em class="hero__text--callout">CHICAGO</em>.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
section {
  padding: 0px 0;
}

.hero {
  background: url("../assets/Galaxy-Hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100vh;
  text-align: center;
  box-shadow: inset 0 0 1em #111;
}

.hero__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 5px;

  .hero__image img {
    width: 80%;
  }

  .hero__text {
    font-family: "interstate";
    letter-spacing: 0.3em;
    line-height: 1.4em;
    padding: 10px 35px;
    font-size: 59%;
    color: #cac6c3;

    .hero__text--callout {
      color: $teal;
      font-weight: 700;
    }
  }
}

@media only screen and (min-width: 768px) {
  .hero {
    background-attachment: fixed;
  }

  .hero__header {
    .hero__text {
      font-size: 110%;
    }
  }
}
</style>
