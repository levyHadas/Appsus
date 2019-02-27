


import mailService from '../services/mail-service.js'
import emailList from '../pages/email-list-page.js'
// import emailDetails  from '../cmps/email-details-cmp.js'


export default {
    template: `
    <section class="mail-app">
        <header class="mail-app-header">
            <div class="logo"></div>
            <input type="search"  id="search-email-input" autofocus placeholder="🔍 Search mail" >
            <div id="hamburger">🍔</div>
        </header>
        <div class="toast-msg" v-if="toastMsg">{{toastMsg}}</div>
        <div class="content-container">
            <div class="inner-links-container">
                <router-link :to="'/compose'" ><button>compose</button></router-link> 
                <router-link :to="'/inbox'" ><button>inbox</button></router-link> 
                <router-link :to="'/sent'" ><button>sent</button></router-link> 
                <!-- <router-view></router-view> -->
            </div>
            <router-view class="email-list-show" @toast="showToast"></router-view>
        <!-- <email-list></email-list> -->

    </div>
    </section>
    `,
    data() {
        return {
            toastMsg: null 
        }
    },
    props: [],

    methods: {
        showToast(msg = 'Action was Done') {
            this.toastMsg = msg
            setTimeout(() => this.toastMsg = null,2000)
        }

    },
    computed: {


    },
    created() {
        mailService.createEmails()
    },
    components: {
        mailService,
        emailList,
    }
}