<template>
  <div class="contact">
    <div>
      <h1>Ik Ben Jens</h1>
      <p>
        Ik ben 22 jaar en afgestudeerd in de richting Multimedia Technology aan de Karel de Grote Hogeschool. Mijn interesses zijn voornamelijk frontend development in React en Vue, maar ben ook niet vies van wat backend werk.
        <br />
        <br />Ik werk ook graag met Photoshop voor designing en Premiere voor video editing. Op deze site kan je mijn favoriete werk zien dat ik de afgelopen paar jaar heb gemaakt op de KdG.
      </p>
    </div>
    <div>
      <h2>Contact</h2>
      <p>
        jens.va@hotmail.com
        <br />0470998575
      </p>
      <h2>Links</h2>
      <a href="https://github.com/JensVanAssche" target="_blank">Github</a>
      <br />
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
  max-width: 900px;
  display: flex;

  > div:first-child {
    width: 70%;
  }
  > div:last-child {
    width: 30%;
    text-align: right;
  }
  h1 {
    font-size: 2rem;
    text-shadow: 3px 3px 0px #001e36;
  }
  h2 {
    text-shadow: 3px 3px 0px #001e36;
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
}
</style>