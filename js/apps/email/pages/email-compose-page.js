import mailService from "../services/mail-service.js";

// • Has a form with subject and body
// • Use the service to add email to the list
// • Yes, we are only supporting selfi-emails for now (-:

export default {
    template: `
        <section class="email-compose">
            <h1>email compose</h1>
            <input placeholder="To:" v-model="composed.to">
            <input placeholder="Subject" v-model="composed.subject">
            <textarea placeholder="email text" v-model="composed.body"></textarea>
            <button @click="send">Send</button>

        </section> 
    `,
    data() {
        return {
            composed: {
                subject: '',
                body: '',
                date: '',
                from: '',
                to: ''
            }

        }
    },
    // props: ['book','review', 'reviewIdx'],
    created() {

    },
    methods: {
        send() {
            this.composed.sentAt = Date.now()
            mailService.sendEmail(this.composed)
            this.$router.go(-1)
        }
        // emitDelete() {
        //     var reviewDetails = {
        //         book: this.book,
        //         reviewIdx: this.reviewIdx
        //     }
        //     this.$emit('deleted', reviewDetails)
        // }
    }

}