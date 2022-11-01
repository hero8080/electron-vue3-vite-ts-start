import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import JsonViewer from "vue3-json-viewer";
import "./assets/main.css";

const app = createApp(App);
app.use(router);

app.use(JsonViewer);
app.mount("#app");
