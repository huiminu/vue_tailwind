// import './assets/main.css'

// createApp
import { createApp } from 'vue'
import App from './App.vue'

// router
import router from "./router";

// tailwind樣式
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
// 啟用 router
app.use(router);
app.mount("#app");