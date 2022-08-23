import { createWebHashHistory } from "vue-router"

const routes = [
    {path: '/', name:'Home', component:HomeComp}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router