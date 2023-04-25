import { createApp } from 'vue'
import App from './App.vue'
import { createChakra } from "@chakra-ui/vue-next";
import './assets/main.css'
const chakra = createChakra({
    cssReset: true,
  });
const app = createApp(App)
app.use(chakra)
app.mount('#app')
