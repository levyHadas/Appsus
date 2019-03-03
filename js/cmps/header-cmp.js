
import { eventBus, EMAILS_UNREAD } from '../../../../js/event-bus.js';
import mailService from '../apps/email/services/mail-service.js'

export default {
    template: `
<section>
<header class="app-header">
         <router-link class="main-app-header-logo logo" :to="'/'" > </router-link> 
          <div class="unread-mail-count"> 
               <router-link :to="'/mail-app'" exact> <i class="far fa-envelope"></i> </router-link> 
               <span>{{numOfUnread}}</span>
           </div>
          <div class="apps" @click="toggleAppsNav"><i class="fas fa-th"></i></div>
        <div class="apps-btn-modal" :class='appsModalState' >
                 <div class="apps-btn-card ">
                 <router-link :to="'/mail-app'" exact> <i class="fas fa-at"></i> </router-link>   
                 
                   <p>Email</p>
                 </div>
                 <div class="apps-btn-card ">               
               <router-link :to="'/'" exact> <i class="fas fa-home"></i> </router-link>   
                   <p>Home</p>
                 </div>
                 <div class="apps-btn-card ">
                   <router-link :to="'/keep'" exact> <i class="fas fa-sticky-note"></i> </router-link> 
                   <p>Keeps</p>
                 </div>
                 <div class="apps-btn-card ">
                   <router-link :to="'/'" exact> <i class="fas fa-book" :class="showDisabled" ></i> </router-link> 
                   <p>Books</p>
                </div>

        </div>
        </header>

</section>
`,
    data() {
        return {
            unreadMails: '',
            appsNavShown: false

        }
    },

    methods: {

        toggleAppsNav() {
            this.appsNavShown = !this.appsNavShown
        }
    },
    computed: {
        numOfUnread() {
            return this.unreadMails;
        },
        showDisabled(){
            return 'disabled'
        },
        appsModalState(){
            if (this.appsNavShown) return 'open-apps-modal'
            else return 'close-apps-modal'
        }
    },

    created() {
        this.unreadMails = mailService.getNumOfUnRead()
        eventBus.$on(EMAILS_UNREAD, unreadMail =>
            this.unreadMails = unreadMail)
    },
    components: {
        mailService,

    }


}