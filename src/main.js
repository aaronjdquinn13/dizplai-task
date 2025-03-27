import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // imports the router

const app = createApp(App);
app.use(router);  // uses the roter in App.vue
app.mount('#app');
