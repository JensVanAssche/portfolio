<template>
  <div class="contact">
    <div>
      <h1>Contact</h1>
      <p>jens.va@hotmail.com</p>
      <p>0470998575</p>
    </div>
    <div>
      <h1>Links</h1>
      <a href="https://github.com/JensVanAssche" target="_blank">Github</a>
      <p></p>
      <a href="https://www.linkedin.com/in/jens-van-assche-98501a187/" target="_blank">LinkedIn</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss">
.contact {
  display: flex;

  > div {
    margin: 0 30px;
  }
  a {
    color: #005092;
    text-decoration: none;
    &.router-link-exact-active {
      color: #ffffff;
      text-decoration: underline;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: #005092;
  }
}
</style>