import { createApp } from 'vue'

import * as VueRouter from 'vue-router';

import App from './App.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'

const routes = [
    { path: '/', component: Page1 },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
