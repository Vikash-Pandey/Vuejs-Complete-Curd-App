
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import store from "./stores/index"
const app = createApp(App).use(store)
app.use(VueSweetalert2);
app.use(createPinia())
app.use(router)

app.mount('#app')
