
import bodyText from './body-text-cmp.js'
import mailService from '../services/mail-service.js';
import {eventBus,EMAILS_UNREAD} from '../../../event-bus.js'



export default {
    props: ['email', 'isInbox'],
    template: `
        <section class="email-preview-cmp" :class="isRead" @click='readEmail'> 
            <div class="compressed-mail" v-if="isCompressed">
                <div class="sender-name" v-if="isInbox">{{email.from}}</div>
                <div class="sender-name" v-else>{{email.to}}</div>
                <div class="email-prev-subj">{{email.subject}}</div>
                <div class="email-prev-time">{{formatDate}}</div>
                <button id="email-btn" class="btn email-btn btn-info" @click.stop="toogleReadEmail" 
                    v-if="isInbox">toggle read/un-read</button>
                <button id="email-btn"  class="btn email-btn btn-danger" @click.stop="deleteEmail">Delete</button>
                <button id="email-btn" class="btn  btn-success" @click.stop>Reply</button>

            </div>
            <body-text v-else  :currEmail="email">  </body-text>


        </section>
`
    ,
    data() {
        return {
            hour: '',
            min: '',
            isCompressed: true,
            emailsUnRead: '',
        }
    },
    computed: {
        formatDate() {
            // return
            this.hour = new Date(this.email.date).getHours()
            this.min = new Date(this.email.date).getMinutes()
            return `${this.hour} : ${this.min}`
        },
        isRead() {
            if (this.email.isRead) return 'read'
            else return 'un-read'
        }
    },

    created() {
        this.emailsUnRead = mailService.getNumOfUnRead()
        // console.log(this.emailsRead)
    },
    components: {
        bodyText,
    },
    methods: {
        readEmail() {

            this.isCompressed = !this.isCompressed;

            if (this.email.isRead === true) return
            setTimeout(() => {
                mailService.toggleUnread(this.email)
            this.emailsUnRead = mailService.getNumOfUnRead()
            eventBus.$emit(EMAILS_UNREAD, this.emailsUnRead)

            }, 1500);
        },
        toogleReadEmail() {
            mailService.toggleUnread(this.email)
            this.emailsUnRead = mailService.getNumOfUnRead()
            eventBus.$emit(EMAILS_UNREAD, this.emailsUnRead)
            // this.email.isRead= !this.email.isRead
            
        },
        deleteEmail() {
            console.log(this.email)
            mailService.deleteEmail(this.email)
            .then(()=>    {
                this.emailsUnRead = mailService.getNumOfUnRead()
                eventBus.$emit(EMAILS_UNREAD, this.emailsUnRead)

            })
        }
    }
}