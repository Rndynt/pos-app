import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);  // Buat instance app
app.use(router);  // Gunakan router pada instance app
app.mount('#app');  // Baru kemudian mount
