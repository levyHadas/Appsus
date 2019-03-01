




// import bookApp from './pages/book-app-cmp.js';
// import userMsg from './cmps/user-msg-cmp.js';







import mailApp from '../apps/email/pages/mail-app.js'
import navBar from '../cmps/nav-bar-cmp.js'
import about from '../cmps/about-cmp.js'
import keep from '../apps/keep/pages/keep-app.js'



export default {
    props: [],
    template: `
    <section class="apsus-app">
        <div class="bg">
                <nav-bar> </nav-bar>
                <footer> ©H&T puppy-rights 2019.</footer>
        </div>

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
        mailApp,
        navBar,
        about,
        keep
    }
}