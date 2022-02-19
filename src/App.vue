<template>
  <Hero />
  <About />
  <Project />
  <Footer />
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Hero,
    About,
    Project,
    Footer,
  },
};
</script>
