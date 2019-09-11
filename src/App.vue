<template>
  <div id="app">
    <div id="nav">
      <h1>Jens Van Assche</h1>
      <router-link to="/">Projecten</router-link>
      <router-link to="/videos">Video's</router-link>
      <router-link to="/contact">Over Mij</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  background-color: #287fc7;
  color: #ffffff;
}
body {
  margin: 0;
  overflow-x: hidden;
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
  padding-bottom: 90px;
  text-align: center;
  padding-top: 40px;
  width: 100vw;
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
