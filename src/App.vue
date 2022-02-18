<template>
  <Hero />
  <About />
  <Project />
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";

export default {
  name: "App",
  components: {
    Hero,
    About,
    Project,
  },
};
</script>
