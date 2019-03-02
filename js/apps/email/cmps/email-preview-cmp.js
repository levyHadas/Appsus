
import bodyText from './body-text-cmp.js'
import mailService from '../services/mail-service.js';
import {eventBus,EMAILS_UNREAD, REPLY} from '../../../event-bus.js'



export default {
    props: ['email', 'isInbox'],
    template: `
        <section class="email-preview-cmp" :class="isRead" @click='readEmail'> 
            <div class="compressed-mail grid" v-if="isCompressed">
                <div class="sender-name" v-if="isInbox">{{email.from}}</div>
                <div class="sender-name" v-else>{{email.to}}</div>
                <div class="email-prev-subj" ref="subject">{{trimmedSubject}}</div>
                <div class="email-prev-time">{{formatDate}}</div>
                <div class="email-btns-container flex">
                    <button class="btn email-btn btn-read-unread" @click.stop="toogleReadEmail" 
                        v-if="isInbox"><i :class="envelopeIcon"></i></button>
                    <button class="btn email-btn btn-delete" @click.stop="deleteEmail"><i class="far fa-trash-alt"></i></button>
                    <button class="btn email-btn btn-replay" @click.stop="emitReplay"><i class="fas fa-reply"></i></button>
                </div>

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
            if (this.email.subject.length > 35) {
                return this.email.subject.substring(0,35) +'...'
            }
            return this.email.subject
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
            mailService.deleteEmail(this.email)
            .then(()=>    {
                this.emailsUnRead = mailService.getNumOfUnRead()
                eventBus.$emit(EMAILS_UNREAD, this.emailsUnRead)

            })
        },
        emitReplay() {
            this.$router.push('/mail-app/compose')
            eventBus.$emit(REPLY, this.email)

        }
    }
}