import { createRouter, createWebHistory } from "vue-router";
import checkAuth from '../middlewares/checkAuth'

const router = createRouter({  
    history: createWebHistory(""),  
    routes: [ 
        { 
            path: "/", 
            name: "root", 
            component: () => import("../views/HomeView.vue") 
        },   
        { 
            path: "/login", 
            name: "login", 
            component: () => import("../views/LoginView.vue") 
        },    
        { 
            path: "/home", 
            name: "home", 
            component: () => import("../views/HomeView.vue") 
        },    
        { 
            path: "/myPage", 
            name: "myPage", 
            component: () => import("../views/MyPageView.vue") 
        },
    ],
}); 
router.beforeEach((to, from, next) => {
    const excludeAuthPath = ['root', 'login', 'home'];
    const isAuthenticated = excludeAuthPath.indexOf(to.name) < 0 ? false : true;

    checkAuth(next, isAuthenticated);
});
export default router;
