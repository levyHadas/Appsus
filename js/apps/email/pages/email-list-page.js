
import emailPreview from '../cmps/email-preview-cmp.js'
import emailService from '../services/mail-service.js'



export default {
    props: [],
    template: `
    <section class="email-list-show">
        <input type="search"  id="search-email-input" v-model="filterBy.searchTxt" autofocus placeholder="🔍 Search mail" >
        <div class="sender-name" v-if="isInbox">From:</div>
        <div class="sender-name" v-else>Sent To:</div>
        <email-preview v-for="(currEmail, idx) in filteredEmails" :key="currEmail.id"
            :email="currEmail" :idx="idx" :is-inbox="isInbox"> 
        </email-preview> 
    </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: {
                type: 'inbox',
                searchTxt: '',
                options: 'all',
            },
        }
    },

    methods: {


    },

    computed: {
        //to do - fins a better way to filter whitout repeating code
        filteredEmails() {
            if (!this.emails) return
            var type = this. getRelativeRoute()
            if (this.filterBy.options === 'all') {
                var filtered = this.emails.filter(email => {
                    return email.type === type &&
                        (email.body.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.subject.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.to.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.from.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()))
                })
            } else if (this.filterBy.options === 'unread') {
                var filtered = this.emails.filter(email => {
                    return email.type === type && !email.isRead &&
                        (email.body.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.subject.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.to.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.from.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()))
                })
            } else {
                var filtered = this.emails.filter(email => {
                    return email.type === type && email.isRead &&
                        (email.body.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.subject.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.to.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.from.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()))
                })
            }
            return filtered
        },
        isInbox() {
            return this.getRelativeRoute() === 'inbox'
        }
    },

    created() {
        emailService.getEmails()
            .then((emails) => {
                this.emails = emails
            })
    },
    methods: {
        getRelativeRoute() {
            var pathStrs = this.$route.path.split('/')
            var type = pathStrs[pathStrs.length-1]
            if (type === '' || type === 'mail-app') type = 'inbox'
            return type
        }
    },
    components: {
        emailPreview,
        emailService
    },
    mounted() {
        var type = this. getRelativeRoute()
        this.filterBy.type = type

    }
}