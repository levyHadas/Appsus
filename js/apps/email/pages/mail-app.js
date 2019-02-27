


import mailService from '../services/mail-service.js'
import emailList from '../pages/email-list-page.js'
// import emailDetails  from '../cmps/email-details-cmp.js'


export default {
    template: `
    <section class="mail-app">
        <header class="mail-app-header">
            <div class="logo">📧 our logo</div>
            <input type="search"  id="search-email-input" autofocus placeholder="🔍 Search mail" >
            <button>🍔apps</button>
        </header>
        <div class="content-container">
            <div class="inner-links-container">
                <router-link :to="'/compose'" ><button>compose</button></router-link> 
                <router-link :to="'/inbox'" ><button>inbox</button></router-link> 
                <router-link :to="'/sent'" ><button>sent</button></router-link> 
            </div>
            <router-view class="email-list-show"></router-view>
        <!-- <email-list></email-list> -->

    </div>
    </section>
    `,
    data() {
        return {


        }
    },
    props: [],

    methods: {


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