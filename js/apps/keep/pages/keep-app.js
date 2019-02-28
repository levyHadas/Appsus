


import keepService from '../services/keep-service.js'
import utilService from '../../email/services/util-service.js'
import editPanel from '../cmps/edit-panel-cmp.js'


export default {
    template: `
    <!-- <section class="keep-app"> -->
    <section class="keep-app">
        <header class="mail-app-header">
           <router-link :to="'/'" class="logo"></div> </router-link> 
            <div id="hamburger">🍔</div>
        </header>

<div  class="note-card"   @mouseover="hover=true" :style="colorPicker"
@mouseleave="hover=false" >
    <img src='https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Wayfarers&hatColor=
    Gray01&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=White&eyeType=
    Dizzy&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Light' />
    
    <edit-panel v-if="hover" @change-color="changeColor" >

    </edit-panel>

</div>
<!-- <div class="keep-content">
    <div class="note-card"
    v-for="(note,idx) in notes" :key="note.id"
    >   

    
 <span class="note-title">subject:</span>    {{note.subject}}
 <span class="note-title">body:</span>   {{note.body}}
    </div>
</div> -->
    </section>
    `,
    data() {
        return {
            notes: [],
            hover: false,
            bgColor: 'white',
        }
    },
    props: [],

    methods: {
        changeColor(color) {
            this.bgColor = color
            // console.log(color)
        }


    },
    computed: {

        colorPicker() {
            return {
                'background-color': this.bgColor
            }
        }


    },
    created() {
        this.notes = keepService.createNotes()
        console.log(this.notes)

    },
    components: {
        editPanel,
        utilService
    }
}