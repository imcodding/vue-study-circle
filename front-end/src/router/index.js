import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({  
    history: createWebHistory(""),  
    routes: [ 
        { 
            path: "/", 
            name: "home", 
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
export default router;
