import { createApp } from 'vue'
import App from './App.vue'

// 컨테이너 생성
const app = createApp(App);

// vue 2의 el구문
app.mount("#app");