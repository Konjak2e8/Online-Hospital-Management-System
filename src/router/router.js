import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import { use } from 'vue/types/umd'

//路由配置项
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router