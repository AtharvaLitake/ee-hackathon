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
import SevenDayAheadDatasetDetails from "./components/BrowseData/SevenDayAheadDatasetDetails.vue";
import DailyMinsDatasetDetails from "./components/BrowseData/DailyMinsDatasetDetails.vue";

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
    path: "/data/Seven_Day_Load_Forecast_by_Weather_Zone", 
    name: "SevenDayAheadDatasetDetails", 
    component: SevenDayAheadDatasetDetails, 
  },
  { 
    path: "/data/Long_Term_Daily_Load_Forecast_Updated", 
    name: "Daily_Mins_Data", 
    component: DailyMinsDatasetDetails, 
  },
  { 
    path: "/data/:datasetName", 
    name: "DatasetDetails", 
    component: DailyMinsDatasetDetails, 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

loadFonts();

createApp(App).use(vuetify).use(router).mount("#app");