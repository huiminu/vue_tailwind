// import './assets/main.css'

// createApp
import { createApp } from 'vue'
import App from './App.vue'

// router
import router from "./router";

// primevue
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'

// primevue 元件
import Button from 'primevue/button'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faShoppingCart, faInstagram, faFacebookSquare)

// 自己的css
import './assets/main.scss'

const app = createApp(App);
// 全局註冊
app.component('font-awesome-icon', FontAwesomeIcon) 
// 元件註冊
app.component('Button', Button);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('ConfirmPopup', ConfirmPopup);
app.component('Calendar', Calendar);
app.component('Dropdown', Dropdown);

// 啟用 
app.use(router);
app.use(PrimeVue);
app.use(ConfirmationService);
// app.use(PrimeVue, { unstyled: true });

app.mount("#app");