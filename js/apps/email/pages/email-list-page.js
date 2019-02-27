
import emailPreview from '../cmps/email-preview-cmp.js'
import emailService from '../services/mail-service.js'



export default {
    props: [],
    template: `
    <section class="email-list-show" >
        <email-preview 
        v-for="(currEmail, idx) in emails"
        :key="currEmail.id"
        :email="currEmail" 
            :idx="idx"
        > 
     </email-preview> 
    </section>
    `,
    data() {
        return {

            emails: null,

        }
    },

    methods: {


    },
    computed: {


    },
    created() {
        emailService.getEmails()
            .then((emails) => {
                this.emails = emails
            })
    },
    components: {
        emailPreview,
        emailService
    }
}