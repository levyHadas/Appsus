
import keepService from '../services/keep-service.js'

export default {
    props: ['keep'],
    template: `
        <section>
            <img :src="keep.imgSrc" v-if="keep" alt="Can't get your image">
        </section> 
    `,
    data() {
        return {
        }
    },
    created() {
    },
    methods: {

    },



    mounted() {
      
    },
   
}
