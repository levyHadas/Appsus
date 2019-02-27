


// import userMsg from './cmps/user-msg-cmp.js';


import mailApp from './pages/mail-app.js';
import myRoutes from './routes.js';


const myRouter = new VueRouter({routes: myRoutes})



window.vueApp = new Vue({
    el: '#app',
    router: myRouter,
    components: {
        mailApp,
    },
    created(){
        
    
    }
})
