

import editPanel from '../cmps/edit-panel-cmp.js'
import keepService from '../services/keep-service.js'

export default {
    props: ['keep'],
    template: `
        <section @mouseover="hover=true" @mouseleave="hover=false">
            
            <ul v-if="todoKeep" class="todos">To Do:
                <li class="todo" v-for="todo in todoKeep.todos"
                :class="isPinned"
                >{{todo}}</li>
            </ul>
            <!-- <textarea v-if="todo" 
                 id="text-area" 
                 

                v-model="todo.todos" 

                placeholder="Enter your text  here" @click="editNote" 
                @blur="saveNote"
                :style="colorPicker">
            </textarea> -->
            
            <edit-panel :class="isShown" :keep="keep" 
                @change-color="changeColor">
            </edit-panel>
        

        </section> 
    `,
    data() {
        return {
           todoKeep: null,
           hover: false,
           bgColor: 'white',
       
        }
    },
    created() {
        this.todoKeep = this.keep

    },
    methods: {
        changeColor(color) {
            this.bgColor = color
        },
        
        // editNote() {
            
        //     this.editMode = true
        // },
        // saveNote() {
        //     if (this.editMode === true) {
        //         keepService.editNote(this.note)
        //         this.editMode = false
        //     }
            
        // },
        sendAsEmail() {
            
        }
    },
    
    mounted() {

    
    },
    computed: {
        colorPicker() {
            return {
                'background-color': this.bgColor,
            }
        },
        isShown(){
           return (this.hover)?  'show':  'hide'
        },
        isPinned(){
            return (this.keep.isPinned)? 'pinned' : 'unPinned'
        },
        
 
    },
    components:{
        editPanel,
    },
 
    
 

}
