






export default {
    props: ['txt'],
    template: ` 
    <section class="body-txt"   @click='toggleTxt'>
        <p v-if="compressedEmail">
            {{getShortText}}
        </p>    
        <p v-else>
              {{txt}}
        </p>
        <!-- <button class="badge badge-info"  @click='toggleTxt'>{{getButtonText}}</button> -->
     </section>
    `
    ,
    data() {
        return {
            isLongText: false,
            compressedEmail: true,

        }
    },

    methods: {
        toggleTxt() {
            this.compressedEmail = !this.compressedEmail
        }

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


    },
    created() {

    },
    components: {

    }
}