


// import userMsg from './cmps/user-msg-cmp.js';


import homePage from './pages/home-page.js';
import routes from './routes.js';


const router = new VueRouter({routes})



window.vueApp = new Vue({
    el: '#app',
    template:`
    <section>
      
    <transition
    name="fade"
        mode="out-in"
       >
         <router-view/>
       </transition>

    </section>
    `,
    router: router,
    data(){
        return {
            prevHeight: 0,

        }
    },

    components: {
        homePage,
    },
    created(){
    },
    methods:{
        
        beforeLeave(element) {
            this.prevHeight = getComputedStyle(element).height;
          },
          enter(element) {
            const { height } = getComputedStyle(element);
      
            element.style.height = this.prevHeight;
      
            setTimeout(() => {
              element.style.height = height;
            });
          },
          afterEnter(element) {
            element.style.height = 'auto';
          },
        
    }
})
