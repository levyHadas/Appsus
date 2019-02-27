





export default {
    props: ['email'],
    template: `
<section class="email-preview-cmp"> 
    <div class="sender-name">tal barak</div>
    <div class="subj">{{email.subject}}</div>- 
    <div class="body">{{email.body}}</div>
    <div class="recived-at">is read: {{email.isRead}}</div>
    <div class="date">{{formatDate}}</div>

</section>
`
    ,
    data() {
        return {
            date: ''
        }
    },
    computed: {
        formatDate() {
            // return this.date = new Date(email.date)

        }
    },

    created() {
        console.log(this.email)
        // this.subject = email.subject
        // this.body = email.body
        // this.isRead = email.isRead
        // this.date = email.date
    }
}