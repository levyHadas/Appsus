


import keepService from '../services/keep-service.js'
import utilService from '../../email/services/util-service.js'
// import { eventBus, EMAILS_UNREAD } from '../../../../js/event-bus.js';


export default {
    template: `
    <section class="keep-app">

    </section>
    `,
    data() {
        return {

        }
    },
    props: [],

    methods: {


    },
    computed: {

    },
    created() {
    },
    components: {
        keepService,
        utilService
    }
}