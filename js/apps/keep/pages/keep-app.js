


import keepService from '../services/keep-service.js'
import utilService from '../../email/services/util-service.js'
import txtKeep from '../cmp/txt-keep-cmp.js'
import addKeep from '../pages/add-keep-page.js'
// import { eventBus, EMAILS_UNREAD } from '../../../../js/event-bus.js';


export default {
    template: `
    <!-- <section class="keep-app"> -->
    <section class="keep-app">
        <header class="mail-app-header">
           <router-link :to="'/'" class="logo"></div> </router-link> 
            <div id="hamburger">🍔</div>
        </header>
        <add-keep></add-keep>
        <!-- <txt-note></txt-note> -->
        <div class="keep-content">
            <div class="keep-card"
            v-for="(keep,idx) in keeps" :key="keep.id">
                <span class="keep-title">{{keep.txt}}</span>  
    </div>



</div>
    </section>
    `,
    data() {
        return {
            keeps: []
        }
    },
    props: [],

    methods: {


    },
    computed: {

    },
    created() {
        this.keeps = keepService.getKeeps()
        console.log(this.keeps)
    },
    components: {
        txtKeep,
        addKeep
    }
}