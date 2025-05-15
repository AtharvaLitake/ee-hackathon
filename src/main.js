import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
//router imports
import { createRouter, createWebHistory } from "vue-router";
//component imports
import HomePage from "./components/HomePage/HomePage.vue";
import BrowseData from "./components/BrowseData/BrowseData.vue";
import TeamMates from "./components/TeamMates/TeamMates.vue";
import DatasetDetails from "./components/BrowseData/DatasetDetails.vue";

//router setup
const routes = [
  { path: "/",
    name: "HomePage",
    component: HomePage
  },
  { 
    path: "/data", 
    name: "BrowseData", 
    component: BrowseData,
  },
  { 
    path: "/team",
    name: "TeamMates",
    component: TeamMates
  },
  { 
    path: "/data/:datasetName", 
    name: "DatasetDetails", 
    component: DatasetDetails, 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

loadFonts();

createApp(App).use(vuetify).use(router).mount("#app");