


import mailService from '../services/mail-service.js'
import emailList from '../pages/email-list-page.js'
// import emailDetails  from '../cmps/email-details-cmp.js'
import { eventBus, EMAILS_UNREAD } from '../../../../js/event-bus.js';


export default {
    template: `
    <section class="mail-app">
        <header class="app-header">
           <router-link :to="'/'" class="logo"></div> </router-link> 
           <div class="unread-mail-count"><i class="far fa-envelope"></i><span>{{numOfUnread}}</span></div>
           <div id="hamburger">🍔</div>
        </header>
        <div class="toast-msg" v-if="toastMsg">{{toastMsg}}</div>
        <div class="content-container">
            <div class="inner-links-container">
                <router-link :to="'/mail-app/compose'"><button>compose</button></router-link> 
                <router-link :to="'/mail-app/inbox'"><button>inbox</button></router-link> 
                <router-link :to="'/mail-app/sent'"><button>sent</button></router-link> 
            </div>
            <router-view class="email-list-show" @toast="showToast"></router-view>

    </div>
    <div class="mail-app-footer"> ©H&T puppy-rights 2019.</div>
    </section>
    `,
    data() {
        return {
            toastMsg: null,
            unreadMails: '',
        }
    },
    props: [],

    methods: {
        showToast(msg = 'Action was Done') {
            this.toastMsg = msg
            setTimeout(() => this.toastMsg = null, 2000)
        }

    },
    computed: {
        numOfUnread() {
            return this.unreadMails;
        }


    },
    created() {
        mailService.getEmails(),
            this.unreadMails = mailService.getNumOfUnRead()
        eventBus.$on(EMAILS_UNREAD, unreadMail =>
            this.unreadMails = unreadMail)
    },
    components: {
        mailService,
        emailList,
    }
}