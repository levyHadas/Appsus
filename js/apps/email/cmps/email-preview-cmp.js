
import bodyText from './long-text-cmp.js'




export default {
    props: ['email'],
    template: `
<section class="email-preview-cmp"> 
    <div class="sender-name">{{email.from}}</div>
    <div class="email-prev-subj">{{email.subject}}</div>- 
    <body-text v-if="showBody" :txt="email.body"></body-text>
    <div class="email-prev-time">{{formatDate}}</div>
</section>
`
    ,
    data() {
        return {
            hour: '',
            min:'',
            showBody:false,
            
        }
    },
    computed: {
        formatDate() {
            // return
             this.hour = new Date(this.email.date).getHours()
             this.min=new Date(this.email.date).getMinutes()
return `${this.hour} : ${this.min}`
        }
    },

    created() {
        console.log(this.email)
        // this.subject = email.subject
        // this.body = email.body
        // this.isRead = email.isRead
        // this.date = email.date
    },
    components:{
        bodyText,
    }
}