import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //자동으로 index.js를 참조
import store from "./store";

//뷰 인스턴스를 생성, 빌드하고 index.html <div id="app">에 mount라 하라
createApp(App).use(store).use(router).mount("#app");
