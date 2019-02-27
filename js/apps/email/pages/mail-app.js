


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
<button>compose</button>
<button>inbox</button>
<button>sent</button>
</div>
        <email-list></email-list>

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