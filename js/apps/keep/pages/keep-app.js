


import keepService from '../services/keep-service.js'
import utilService from '../../email/services/util-service.js'
// import { eventBus, EMAILS_UNREAD } from '../../../../js/event-bus.js';


export default {
    template: `
    <!-- <section class="keep-app"> -->
    <section class="keep-app">
        <header class="mail-app-header">
           <router-link :to="'/'" class="logo"></div> </router-link> 
            <div id="hamburger">🍔</div>
        </header>
<div class="keep-content">
    <div class="note-card"
    v-for="(note,idx) in notes" :key="note.id"
>

 <span class="note-title">subject:</span>    {{note.subject}}
 <span class="note-title">body:</span>   {{note.body}}
    </div>



</div>
    </section>
    `,
    data() {
        return {
            notes: []
        }
    },
    props: [],

    methods: {


    },
    computed: {

    },
    created() {
        this.notes = keepService.createNotes()
        console.log(this.notes)
    },
    components: {
        keepService,
        utilService
    }
}