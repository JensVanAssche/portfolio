<template>
  <div id="app">
    <div id="nav">
      <h1>Jens Van Assche</h1>
      <router-link to="/">Projecten</router-link>
      <router-link to="/videos">Video's</router-link>
    </div>
    <router-view />
    <footer>
      <a href="https://github.com/JensVanAssche" target="_blank">Github</a> -
      <a href="https://www.linkedin.com/in/jens-van-assche-98501a187/" target="_blank">LinkedIn</a>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  background-color: #287fc7;
  color: #ffffff;
}
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#nav {
  padding: 30px;
  padding-bottom: 90px;
  text-align: center;
  h1 {
    font-size: 4rem;
    text-shadow: 5px 5px 0px #000000;
  }
  a {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 20px;
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
footer {
  padding: 30px;
  color: #005092;
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
