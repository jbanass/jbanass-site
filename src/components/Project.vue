<template>
  <section class="shadow">
    <div class="project">
      <div class="project__image half">
        <img
          src="../assets/Computer.png"
          alt="A monitor with code displayed"
          title="Joseph Banass Project Logo"
        />
      </div>
      <div class="project__content half">
        <h2 class="project__header">Projects</h2>
        <div class="project__subheader">All talk and no show?</div>
        <p class="project__description">
          Not quite. Below are a few choice projects that I enjoyed making the
          most from different languages and frameworks, like Ruby, Python,
          Scala, Vue, and C++
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style lang="scss" scoped>
section {
  background: url("../assets/Moon-Background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}

.project {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 70px;

  .project__image {
    align-items: center;
    img {
      width: 60%;
    }
  }

  .project__content {
    margin: 0 40px;

    .project__header {
      letter-spacing: 0.2em;
      padding: 10px;
      border-left: 5px solid $teal;
      color: $teal;
      font-size: 80%;
      text-align: left;
      text-transform: uppercase;
      margin-bottom: 30px;
    }

    .project__subheader {
      padding: 20px 0;
      font-family: $subheading-font;
      font-weight: $subheading-weight;
    }
  }
}

@media only screen and (min-width: 768px) {
  section {
    background-attachment: fixed;
  }

  .project {
    flex-direction: row;
    padding-top: 0;
    padding-bottom: 0;

    .project__image {
      img {
        width: 320px;
      }
    }

    .project__content {
      .project__subheader {
        font-size: 120%;
      }
    }
  }
}
</style>
