
import mailService from '../services/mail-service.js';




export default {
    props: [],
    template: `
    <section class="main-app">
    <router-link to="/" exact>Home</router-link> | 
            <router-link to="/about">About</router-link> |
            <router-link to='/mail-app'>mail</router-link>

    </section>
    `,
    data() {
        return {


        }
    },

    methods: {


    },
    computed: {


    },
    created() {

    },
    components: {
        mailService
    }
}