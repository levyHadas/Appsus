




import emailPreview from '../cmps/email-preview-cmp.js'



export default {
    props: [],
    template: `
    <section >
        <email-preview>  </email-preview>
    </section>
    `,
    data() {
        return {


        }
    },

    methods: {
        // onSelectBook(currBook) {
        //     this.$emit('selected', currBook)
        // }

    },
    computed: {


    },
    created() {
    },
    components: {
        emailPreview
    }
}