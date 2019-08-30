<template>
  <div class="video">
    <div>
      <iframe
        width="560"
        height="315"
        :src="url"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    desc: String,
    url: String
  }
};
</script>

<style lang="scss">
.video {
  display: flex;
  flex-direction: row;
  max-width: 1120px;
  margin-bottom: 50px;

  iframe {
    margin-right: 30px;
  }
}
</style>