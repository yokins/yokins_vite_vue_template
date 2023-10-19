import "normalize.css";
import "nprogress/nprogress.css";
import "./assets/styles/global.scss";

import { createApp } from "vue";
import pinia from "@/stores/index.js";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
