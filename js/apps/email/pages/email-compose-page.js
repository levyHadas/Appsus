import mailService from "../services/mail-service.js"
import {eventBus,EMAILS_UNREAD} from '../../../event-bus.js'
import utilService from '../services/util-service.js';



// • Has a form with subject and body
// • Use the service to add email to the list
// • Yes, we are only supporting selfi-emails for now (-:

export default {
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
            }

        }
    },
    created() {
        this.composed.id = utilService.makeId()
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
        }
    }

}