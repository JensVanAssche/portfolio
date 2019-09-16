<template>
  <div id="app">
    <div id="nav">
      <div class="blue-background"></div>
      <div class="nav-content">
        <h1>Jens Van Assche</h1>
        <router-link to="/">Projecten</router-link>
        <router-link to="/videos">Video's</router-link>
        <router-link to="/contact">Over Mij</router-link>
      </div>
    </div>
    <div id="main">
      <router-view />
    </div>
    <div id="footer">
      <div class="blue-background"></div>
    </div>
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
  width: 100vw;
  position: relative;
  padding-bottom: 50px;
  h1 {
    font-size: 4rem;
    text-shadow: 5px 5px 0px #000000;
  }
  a {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 20px;
    color: #ffffff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #ffffff;
      text-decoration: underline;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .blue-background {
    background: #005092;
    width: 110%;
    height: 350px;
    transform: rotate(2deg) translateY(-50px);
  }
  .nav-content {
    position: absolute;
    top: 50px;
    width: 100vw;
    text-align: center;
  }
}
#main {
  min-height: calc(100vh - 570px);
  padding: 0 30px;
}
#footer {
  width: 100vw;
  height: 120px;
  overflow: hidden;
  padding-top: 50px;
  .blue-background {
    background: #005092;
    width: 110%;
    height: 200px;
    transform: rotate(2deg) translateY(50px);
  }
}
</style>
