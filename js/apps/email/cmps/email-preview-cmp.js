
import bodyText from './body-text-cmp.js'
import mailService from '../services/mail-service.js';
import {eventBus,EMAILS_UNREAD, REPLY} from '../../../event-bus.js'



export default {
    props: ['email', 'isInbox'],
    template: `
        <section class="email-preview-cmp grid" :class="isRead" @click='readEmail'>
            <div class="compressed-mail grid" v-if="isCompressed">
                <div class="sender-name" v-if="isInbox">{{email.from}}</div>
                <div class="sender-name" v-else>{{email.to}}</div>
                <div class="email-prev-subj" ref="subject">{{trimmedSubject}}</div>
                <div class="email-prev-time">{{formatDate}}</div>
            </div>
            <body-text v-else  :currEmail="email">  </body-text>
            <div class="email-btns-container flex" v-if="btnsContainerShouldShow">
                <button class="btn email-btn btn-read-unread" @click.stop="toogleReadEmail" 
                    v-if="isInbox"><i :class="envelopeIcon"></i></button>
                <button class="btn email-btn btn-delete" @click.stop="deleteEmail"><i class="far fa-trash-alt"></i></button>
                <button class="btn email-btn btn-replay" @click.stop="emitReplay"><i class="fas fa-reply"></i></button>
            </div> 
         


        </section>
`
    ,
    data() {
        return {
            hour: '',
            min: '',
            isCompressed: true,
            // emailsUnRead: '',
        }
    },
    computed: {
        formatDate() {
            // return
            this.hour = new Date(this.email.date).getHours()
            this.min = new Date(this.email.date).getMinutes()
            return `${this.hour}:${this.min}`
        },
        isRead() {
            if (this.email.isRead) return 'read'
            else return 'un-read'
        },
        envelopeIcon(){
            if (this.email.isRead) return 'far fa-envelope'
            else return 'far fa-envelope-open'
        },
        trimmedSubject() {
            var isMobile = document.body.clientWidth < 600
            if (this.email.subject.length > 20 && isMobile) {
                return this.email.subject.substring(0,20) +'...'
            } else if (this.email.subject.length > 50) {
                return this.email.subject.substring(0,25) +'...'
            }
            return this.email.subject
        },
        btnsContainerShouldShow() {
            var isMobile = document.body.clientWidth < 550
            if (isMobile && this.isCompressed) return false
            else return true
        }
    },

    created() {
        this.emailsUnRead = mailService.getNumOfUnRead()
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
                var unread = mailService.updateNumOfUnread(1)
                // this.emailsUnRead = mailService.getNumOfUnRead()
                eventBus.$emit(EMAILS_UNREAD, unread)

            }, 700);
        },
        toogleReadEmail() {
            if (this.email.isRead) mailService.updateNumOfUnread(-1)
            else mailService.updateNumOfUnread(1)
            mailService.toggleUnread(this.email)
            var unread = mailService.updateNumOfUnread(1)
            eventBus.$emit(EMAILS_UNREAD, this.unread)
            // this.emailsUnRead = mailService.getNumOfUnRead()
            
        },
        deleteEmail() {
            var unread = !this.email.isRead
            mailService.deleteEmail(this.email)
            .then(()=> { if (unread) {
                eventBus.$emit(EMAILS_UNREAD, mailService.updateNumOfUnread(-1))}
            })
        },
        emitReplay() {
            this.$router.push('/mail-app/compose')
            eventBus.$emit(REPLY, this.email)

        }
    }
}