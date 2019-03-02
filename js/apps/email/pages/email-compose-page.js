import mailService from "../services/mail-service.js"
import utilService from '../services/util-service.js';
import {eventBus,REPLY} from '../../../event-bus.js'


export default {
    props:['email'],
    template: `
        <section class="email-compose">
            <div class="mail-title">email compose</div>
            
            <input placeholder="To:" v-model="composed.to" autofocus>
            <input placeholder="Subject" v-model="composed.subject">
            <textarea id="text-area" rows="8" cols="50" placeholder="email text" v-model="composed.body"></textarea>
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
                to: ''
            },
            replyedTo: null

        }
    },
    created() {
        
        this.composed.id = utilService.makeId()
        eventBus.$on(REPLY, (email) => this.setReply(email))

    },
    methods: {
        send() {
            this.composed.date = Date.now()
            mailService.sendEmail(this.composed)
                .then(() => {
                    this.$router.go(-1)
                    this.$emit('toast', 'Email was Sent')
                    if (this.composed.to === 'self') {
                        var emailsUnRead = mailService.getNumOfUnRead()
                        eventBus.$emit(EMAILS_UNREAD, emailsUnRead)
                    }
                })
        },
        setReply(email) {
            this.composed.to = email.from
            console.log(this.composed.to)
        }
    }
}
