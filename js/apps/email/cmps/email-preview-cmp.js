
import bodyText from './body-text-cmp.js'




export default {
    props: ['email'],
    template: `
<section class="email-preview-cmp" :class="isRead" @click='readEmail'> 
    <div class="compressed-mail" v-if="isCompressed">
        <div class="sender-name">{{email.from}}</div>
        <div class="email-prev-subj">{{email.subject}}</div>
        <!-- <body-text v-if="showBody" :txt="email.body"></body-text> -->
        <div class="email-prev-time">{{formatDate}}</div>
    </div>
    <body-text v-else  :currEmail="email">  </body-text>


</section>
`
    ,
    data() {
        return {
            hour: '',
            min: '',
            showBody: false,
            isCompressed: true,
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
        // console.log(this.email)
        // this.subject = email.subject
        // this.body = email.body
        // this.isRead = email.isRead
        // this.date = email.date
    },
    components: {
        bodyText,
    },
    methods: {
        isShowBody() {
            this.showBody = !this.showBody
        },
        readEmail() {
            this.isCompressed = !this.isCompressed;
            setTimeout(() => {
                this.email.isRead = true;
            }, 3000);
        }
    }
}