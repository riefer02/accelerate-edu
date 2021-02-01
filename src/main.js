import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./index.css";

library.add(faArrowCircleRight, faArrowCircleLeft);

createApp(App).use(Router).component("fa", FontAwesomeIcon).mount("#app");
