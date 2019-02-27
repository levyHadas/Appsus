


// import userMsg from './cmps/user-msg-cmp.js';


import apsusApp from './pages/apsus-app.js';
import routes from './routes.js';


const router = new VueRouter({routes})



window.vueApp = new Vue({
    el: '#app',
    router: router,
    components: {
        apsusApp,
    },
    created(){
        
    
    }
})
