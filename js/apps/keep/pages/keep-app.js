


import keepService from '../services/keep-service.js'
import editPanel from '../cmps/edit-panel-cmp.js'
import txtKeep from '../cmps/txt-keep-cmp.js'
import imgKeep from '../cmps/img-keep-cmp.js'
import todoKeep from '../cmps/todo-keep-cmp.js'
import addKeep from '../pages/add-keep.js'
import headerCmp from '../../../cmps/header-cmp.js'

// import { eventBus, EMAILS_UNREAD } from '../../../../js/event-bus.js';


export default {
    template: `
    <section class="keep-app">
        <header-cmp></header-cmp>
        <div class="keep-input-container">

            <add-keep></add-keep>
            <input type="search"  id="search-keep-input" v-model="filterBy.searchTxt" autofocus placeholder="🔍 Search " >
        </div>
        <div class="keep-content">
        <transition-group
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
                <div class="keep-card" v-if="keeps"  v-for="(keep,idx) in filteredKeeps" :key="keep.id" >
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight">
                    <component :is="keep.type+'Keep'" :keep="keep"></component>
                </transition>
            </div>
            </transition-group>
        </div>
 
    </section>
    `,
    data() {
        return {
            keeps: [],
            filterBy: {
                searchTxt: '',
                options: 'all',
            },
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
        },
        filteredKeeps() {
            if (!this.keeps) return
            var found = []
            var keeps = this.keeps.filter(keep => {
                if (keep.type === 'img') return keep
                if (keep.type === 'todo') {
                    for (var i = 0; i < keep.todos.length; i++) {
                        if (keep.todos[i].txt.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase())) {
                            return keep
                        }
                    }
                }
                if (keep.type === 'txt') {
                    return keep.txt.toLowerCase().includes(this.filterBy.searchTxt.toLowerCase())
                }
            })
            return keeps
        }



    },
    created() {
        this.keeps = keepService.getKeeps()
    },
    components: {
        txtKeep,
        addKeep,
        editPanel,
        imgKeep,
        todoKeep,
        headerCmp
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