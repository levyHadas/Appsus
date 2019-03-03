import mailService from "../services/mail-service.js"
import utilService from '../services/util-service.js';
import { eventBus, REPLY, EMAILS_UNREAD } from '../../../event-bus.js'


export default {
    props: ['email'],
    template: `
        <section class="email-compose">
            <div class="mail-title">Email compose</div>
            
            <input placeholder="To:" v-model="composed.to" autofocus> 
            <input placeholder="Subject" v-model="composed.subject">
            <textarea class="compose-body" rows="8" cols="50" placeholder="email text" v-model="composed.body"></textarea>
            <button id="send-mail-btn" class="btn  btn-success" @click="send">Send</button>

        </section> 
    `,
    data() {
        return {
            composed: {
                type: 'sent', //shuld be named mailBoxType
                id: null,
                subject: '',
                body: '',
                isRead: true,
                date: '',
                from: '',
                to: '',
            },
            // replyedTo: null

        }
    },
    created() {
// 

        this.composed.id = utilService.makeId()
        eventBus.$on(REPLY, (email) => {
            this.$nextTick(() => {
                this.composed.to = email.from
            })
        })
        var replyTo = mailService.getEmailForReply()
        if (replyTo) {
            this.composed.to = 'To: ' + replyTo.from
            this.composed.subject = 'Re: ' + replyTo.subject
            this.composed.body = `${replyTo.from} wrote: \n ${replyTo.body}`
        }
        
        
    },
  
    methods: {
        send() {
            this.composed.date = Date.now()
            mailService.sendEmail(this.composed)
                .then(() => {
                    this.$router.go(-1)
                    this.$emit('toast', 'Email was Sent')
                    if (this.composed.to === 'self') {
                        var unread = mailService.updateNumOfUnread(1)
                        eventBus.$emit(EMAILS_UNREAD, unread)
                    }
                })
        },
        
    },
    watch: {
        'composed.to': function (newVal, oldVal) {
            console.log('watcher')
        }
    }
}
