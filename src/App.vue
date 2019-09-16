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
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat:700&display=swap");

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
  overflow-x: hidden;
  h1 {
    font-size: 4rem;
    text-shadow: 5px 5px 0px #001e36;
    font-weight: 1000;
  }
  a {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 20px;
    color: #ffffff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #ffffff;
      text-shadow: 3px 3px 0px #001e36;
    }
    &:hover {
      transition: 0.1s;
      text-shadow: 3px 3px 0px #001e36;
    }
  }
  .blue-background {
    background: #005092;
    margin-left: -20px;
    width: 110%;
    height: 375px;
    transform: rotate(2deg) translateY(-50px);
  }
  .nav-content {
    position: absolute;
    top: 50px;
    width: calc(100vw - 60px);
    text-align: center;
    padding: 0 30px;
  }
}
#main {
  min-height: calc(100vh - 595px);
  padding: 0 30px;
}
#footer {
  width: 100vw;
  height: 120px;
  overflow: hidden;
  padding-top: 50px;
  .blue-background {
    background: #005092;
    margin-left: -20px;
    width: 110%;
    height: 200px;
    transform: rotate(2deg) translateY(50px);
  }
}

@media only screen and (max-width: 616px) {
  #nav {
    padding-bottom: 0px;
    .nav-content {
      top: 0;
    }
  }

  #main {
    min-height: calc(100vh - 545px);
  }

  #footer {
    padding-top: 0px;
  }
}

@media only screen and (max-width: 500px) {
  #nav {
    a {
      margin: 0;
      display: block;
      padding-bottom: 10px;
    }

    .blue-background {
      height: 450px;
    }
  }
}
</style>
