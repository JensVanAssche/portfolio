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
  margin-bottom: 50px;

  .VueCarousel {
    width: 560px;
    height: auto;
    margin-right: 60px;

    img {
      width: 560px;
      height: auto;
    }
  }

  .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
    outline: none;
  }

  .links {
    color: #005092;
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
</style>