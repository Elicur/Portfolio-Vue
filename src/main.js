import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n'

AOS.init({
  duration: 1000,
})


createApp(App)
    .component('Icon', Icon)
    .use(i18n)
    .mount('#app')
