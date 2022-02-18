<template>
  <Hero />
  <About />
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Hero,
    About,
  },
};
</script>
