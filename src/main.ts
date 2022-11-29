import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router/router'
import App from './App.vue'

import "@/tailwind/tailwind.css"

createApp(App).use(createPinia()).use(router).mount('body')