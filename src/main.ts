import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "@/locales";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "@/router";

import "@/assets/index.css";
import "@/assets/scss/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createI18n(i18n));

app.mount("#app");
