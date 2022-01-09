<template>
  <section class="landing">
    <div class="center-v-h">
      <img
        class="hero-image"
        alt="Joseph Banass Logo"
        title="Joseph Banass Hero Logo"
        src="../assets/JB-Logo-Main.png"
      />
      <p class="hero-text light-gray">
        FULL STACK DEVELOPER BASED IN <em class="callout">CHICAGO</em>.
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

.center-v-h {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateX(0%) translateY(-50%);
}

.landing {
  background: url("../assets/Galaxy-Hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100vh;
  text-align: center;
  box-shadow: inset 0 0 1em #111;
}

.hero-image {
  width: 80%;
}

.hero-text {
  font-family: "interstate";
  letter-spacing: 0.3em;
  line-height: 1.4em;
  padding: 10px 35px;
  font-size: 59%;
  color: #cac6c3;
}

.callout {
  color: $teal;
  font-weight: 700;
}

@media only screen and (min-width: 768px) {
  .landing {
    background-attachment: fixed;
  }

  .hero-text {
    font-size: 110%;
  }

  .hero-image {
    padding-bottom: 30px;
  }
}
</style>
