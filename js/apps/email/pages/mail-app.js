


import mailService from '../services/mail-service.js'
import emailList from '../pages/email-list-page.js'
import headerCmp from '../../../cmps/header-cmp.js'

export default {
    template: `
    <section class="mail-app">
  
        
        <header-cmp></header-cmp>
        <div class="toast-msg" v-if="toastMsg">{{toastMsg}}</div>
        <div id="hamburger" @click="toggleNav" v-if="isMobile">🍔</div>
        <div class="content-container" @click="closeNav">

            <div class="inner-links-container" :class="navState" >
                <router-link :to="'/mail-app/compose'"><button>compose</button></router-link> 
                <router-link :to="'/mail-app/inbox'"><button>inbox</button></router-link> 
                <router-link :to="'/mail-app/sent'"><button>sent</button></router-link> 
            </div>
            <router-view class="email-list-show" @toast="showToast"></router-view>
        </div>
    </section>
    `,
    data() {
        return {
            toastMsg: null,
            navOpen: false,
            unreadMails: ''

        }
    },
    props: [],

    methods: {
        showToast(msg = 'Action was Done') {
            this.toastMsg = msg
            setTimeout(() => this.toastMsg = null, 2000)
        },
        toggleNav() {
            console.log(screen.width)
            this.navOpen = !this.navOpen
        },
        closeNav() {
            this.navOpen = false
        }

    },
    computed: {
        numOfUnread() {
            return this.unreadMails;
        },
        navState(){
            return (this.navOpen) ? 'nav-open' : 'nav-closed'
        },
        isMobile() {
            return document.body.clientWidth < 780
        },
    

    },
    created() {
        this.unreadMails = mailService.getNumOfUnRead()

    },
    components: {
        mailService,
        emailList,
        headerCmp
    }
}

