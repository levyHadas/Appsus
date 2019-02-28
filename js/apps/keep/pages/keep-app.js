


import keepService from '../services/keep-service.js'
import utilService from '../../email/services/util-service.js'
import editPanel from '../cmps/edit-panel-cmp.js'
import txt from '../cmps/txt-keep-cmp.js'
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
 
 <!-- <div  class="keep-card"   @mouseover="hover=true" :style="colorPicker"
 @mouseleave="hover=false" >
    <img src='https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Wayfarers&hatColor=
    Gray01&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=White&eyeType=
    Dizzy&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Light' />
 
    <edit-panel v-if="hover" @change-color="changeColor" >
 
    </edit-panel>
 
 </div> -->
           <masonry 
           :cols="{default: 4, 1000: 3, 700: 2, 500: 1}" 
           :gutter="{default: '20px', 700: '20px'}"
           >

           <div class="keep-content"  >
                 <div class="keep-card" v-if="keeps"  v-for="(keep,idx) in keeps" :key="keep.id" >
                       <component :is="keep.type" :keep="keep"></component>
                   <!-- <edit-panel v-if="hover" @change-color="changeColor"></edit-panel> -->
               </div>
           </div>
            </masonry>
 
    </section>
    `,
    data() {
        return {
            keeps: [],

        }
    },
    props: [],

    methods: {



    },
    computed: {
        colorPicker() {
            return {
                'background-color': this.bgColor
            }
        },

        checkType() {
        }



    },
    created() {
        this.keeps = keepService.getKeeps()
    },
    components: {
        txt,
        addKeep,
        editPanel,
        //imgKeep,
        //todoKeep
    }
}























// <header class="mail-app-header">
// <router-link :to="'/'" class="logo"></div> </router-link> 
//  <div id="hamburger">🍔</div>
// </header>

// <!-- <div  class="keep-card"   @mouseover="hover=true" :style="colorPicker"
// @mouseleave="hover=false" >
// <img src='https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Wayfarers&hatColor=
// Gray01&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=White&eyeType=
// Dizzy&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Light' />

// <edit-panel v-if="hover" @change-color="changeColor" >

// </edit-panel>

// </div> -->


// <div class="keep-content"  >
//    <div class="keep-card" v-if="keeps"
//          @mouseover="hover=true" 
//          :style="colorPicker"
//            @mouseleave="hover=false"
//            v-for="(keep,idx) in keeps" 
//            :key="keep.id">
//            <txt-keep :keep="keep"></txt-keep>
//         <!-- <span class="keep-title">{{keep.txt}}</span >  -->
//      <edit-panel v-if="hover" @change-color="changeColor" >
//      </edit-panel> 
//  </div>
// </div> 