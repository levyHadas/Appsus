


import mailService from '../services/mail-service.js'
import emailCompose from './email-compose-page.js'

export default {
    template: `
        <section class="mail-app">
            <email-compose></email-compose>
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
        emailCompose
        
    }
}