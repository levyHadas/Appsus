

import editPanel from '../cmps/edit-panel-cmp.js'
import keepService from '../services/keep-service.js'

export default {
    props: ['keep'],
    template: `
        <section
            
               @mouseover="hover=true" 
             @mouseleave="hover=false"  >
            
            <h1><pre>{{todo.todos}}</pre></h1>
            <!-- <textarea v-if="todo" 
                 id="text-area" 
                 

                v-model="todo.todos" 

                placeholder="Enter your text  here" @click="editNote" 
                @blur="saveNote"
                :style="colorPicker">
            </textarea> -->
             <!-- <edit-panel v-if="hover"  -->
             <edit-panel :class="isShown" 
             
             @change-color="changeColor"></edit-panel>
        

        </section> 
    `,
    data() {
        return {
           todo: null,
       
        }
    },
    created() {
        this.todo = this.keep

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
    
 
    },
    components:{
        editPanel,
    },
 
    
 

}
