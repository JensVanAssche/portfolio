import Vue from "vue";
import Router from "vue-router";
import Projects from "./views/Projects.vue";
import Videos from "./views/Videos.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "projects",
      component: Projects
    },
    {
      path: "/videos",
      name: "videos",
      component: Videos
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ],
  mode: "history"
});
