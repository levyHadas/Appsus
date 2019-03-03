


import keepService from '../services/keep-service.js'
import editPanel from '../cmps/edit-panel-cmp.js'
import txtKeep from '../cmps/txt-keep-cmp.js'
import imgKeep from '../cmps/img-keep-cmp.js'
import videoKeep from '../cmps/video-keep-cmp.js'
import todoKeep from '../cmps/todo-keep-cmp.js'
import addKeep from '../pages/add-keep.js'
import headerCmp from '../../../cmps/header-cmp.js'



export default {
    template: `
    <section class="keep-app">
        <header-cmp></header-cmp>
        <!-- <div class="keep-input-container"> -->
            <label class=input-search-label>🔍
            <input type="search"  id="search-keep-input" v-model="filterBy.searchTxt" :class="searchState">
            </label>
            <add-keep></add-keep>
        <!-- </div> -->
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
                if (keep.type === 'video') return keep
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
        },
        searchState() {
            if (this.filterBy.searchTxt !== '') return 'active-search'
            else return ''
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
        headerCmp,
        videoKeep,
    }
}
