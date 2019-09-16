<template>
  <div class="project">
    <div>
      <carousel :paginationEnabled="false" :perPage="1" :navigationEnabled="true">
        <slide>
          <img :src="`/img/${img1}`" />
        </slide>
        <slide>
          <img :src="`/img/${img2}`" />
        </slide>
        <slide>
          <img :src="`/img/${img3}`" />
        </slide>
      </carousel>
    </div>
    <div>
      <h2>{{ title }}</h2>
      <p style="white-space: pre-line;">{{ desc }}</p>
      <div class="links">
        <a :href="link" target="_blank">Demo</a>
        <a :href="github" target="_blank">Github</a>
        <a v-if="github2" :href="github2" target="_blank">Github (Backend)</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Project",
  components: {
    Carousel,
    Slide
  },
  props: {
    title: String,
    desc: String,
    link: String,
    img1: String,
    img2: String,
    img3: String,
    github: String,
    github2: String
  }
};
</script>

<style lang="scss">
.project {
  display: flex;
  flex-direction: row;
  max-width: 1120px;
  margin-bottom: 100px;

  .VueCarousel {
    width: 560px;
    height: auto;
    margin-right: 50px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
    outline: none;
  }

  h2 {
    font-size: 2rem;
    margin-top: 15px;
    text-shadow: 3px 3px 0px #001e36;
  }

  .links {
    a {
      color: #005092;
      text-decoration: none;
      margin-right: 20px;
      &.router-link-exact-active {
        color: #ffffff;
        text-decoration: underline;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media only screen and (max-width: 1000px) {
  .project {
    flex-direction: column;
    .VueCarousel {
      margin-bottom: 20px;
      margin-right: 0px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media only screen and (max-width: 635px) {
  .project {
    .VueCarousel {
      width: 100%;
    }
  }
}
</style>