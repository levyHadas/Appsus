






export default {
    props: ['currEmail'],
    template: ` 
    <section class="body-txt"  >
<div class="body-header">
        <h4 class="body-header-txt">{{currEmail.subject}}</h4>
    <div class="body-buttons">
        <button @click.stop>Delete</button>
        <button @click.stop>Reply</button>
    </div>
</div>

<div class="body-body" >
<span class='text-description'>From:</span>{{currEmail.from}} <br>
 <span class='text-description'>At:</span>  {{formatDate}} <br>
 <span class='text-description'>Body: </span>{{currEmail.body}}
</div>

     </section>
    `
    ,
    data() {
        return {
            isLongText: false,
            compressedEmail: true,
            hour:'',
            min:'',
            day:'',
            month:'',


        }
    },

    methods: {
        toggleTxt() {
            this.compressedEmail = !this.compressedEmail
        },


    },
    computed: {
        getShortText() {
            if (this.txt.length > 30) {
                return this.txt.slice(0, 33) + '...'
            }
            else return this.txt

        },
        getButtonText() {
            if (this.compressedEmail) return 'show more'
            else return 'show less'
        },
        formatDate() {
            // return
            this.hour = new Date(this.currEmail.date).getHours()
            this.min = new Date(this.currEmail.date).getMinutes()
            this.day = new Date(this.currEmail.date).getDay()
            this.month = new Date(this.currEmail.date).getMonth()+1
            return `${this.hour}:${this.min}, ${this.day}.${this.month}`
        }


    },
    created() {

    },
    components: {

    }
}