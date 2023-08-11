// import './assets/main.css'

// createApp
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config';
import './assets/main.scss'

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faShoppingCart, faInstagram, faFacebookSquare)


const app = createApp(App);
// 全局註冊
app.component('font-awesome-icon', FontAwesomeIcon) 
// 啟用 
app.use(router);
app.use(PrimeVue, { unstyled: true });
app.mount("#app");