import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import Add from "../components/Add.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:'AddActiveAclss',
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    
    },
    {
      path: '/Add',
      name: 'about',
      component:Add
   
     
    }
  ]
})

export default router
