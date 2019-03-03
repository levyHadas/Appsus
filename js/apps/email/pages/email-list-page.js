
import emailPreview from '../cmps/email-preview-cmp.js'
import emailService from '../services/mail-service.js'
import mailService from '../services/mail-service.js';



export default {
    template: `
    <section class="email-list-show">
        <div class="mail-title" v-if="isInbox">Incoming mail
            <select class="read-unread-all" v-model="filterBy.options">
                <option value="all" selected>All</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
            </select>
            <input type="search"  id="search-email-input" v-model="filterBy.searchTxt" autofocus placeholder="🔍 Search mail" >
        </div>
        <div class="mail-title" v-else>Recived mail
            <input type="search"  id="search-email-input" v-model="filterBy.searchTxt" autofocus placeholder="🔍 Search mail" >
        </div>
        <email-preview v-for="(currEmail, idx) in filteredEmails" :key="currEmail.id"
            :email="currEmail" :idx="idx" :is-inbox="isInbox"> 
        </email-preview> 
    </section>
    `,
    data() {
        return {
            emails: null,
            mailBoxType: this.$router.currentRoute.name,
            filterBy: {
                // type: this.$router.currentRoute.name,
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
            if (this.filterBy.options === 'all') {
                var filtered = this.emails.filter(email => {
                    return email.type === this.mailBoxType &&
                        (email.body.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.subject.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.to.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.from.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()))
                })
            } else if (this.filterBy.options === 'unread') {
                var filtered = this.emails.filter(email => {
                    return email.type === this.mailBoxType && !email.isRead &&
                        (email.body.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.subject.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.to.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.from.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()))
                })
            } else {
                var filtered = this.emails.filter(email => {
                    return email.type === this.mailBoxType && email.isRead &&
                        (email.body.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.subject.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.to.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()) ||
                            email.from.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase()))
                })
            }
            return filtered
        },
        isInbox() {
            return this.mailBoxType === 'inbox'
        }
   
    },

    created() {
        emailService.getEmails()
            .then((emails) => {
                this.emails = emails
            })        
    },
 
    components: {
        emailPreview,
    },

    watch: {
        '$route.path': function() {
            // this.filterBy.type = this.$router.currentRoute.name
            this.mailBoxType = this.$router.currentRoute.name
            this.filterBy.options = 'all'
        },
        
    }
}