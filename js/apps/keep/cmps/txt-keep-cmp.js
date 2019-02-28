

import editPanel from '../cmps/edit-panel-cmp.js'
import keepService from '../services/keep-service.js'

export default {
    props: ['keep'],
    template: `
        <section

               @mouseover="hover=true" 
             @mouseleave="hover=false"  >
            <textarea v-if="note" 
                 id="text-area" 
                 

                v-model="note.txt" 


                :style="colorPicker"
                placeholder="Enter your text  here" @click="editNote" 
                @blur="saveNote"
                 ref="textarea">
            </textarea>
             <!-- <edit-panel v-if="hover"  -->
             <edit-panel :class="isShown" 
             
             @change-color="changeColor"></edit-panel>
        

        </section> 
    `,
    data() {
        return {
           note: null,
           hover: false,
           bgColor: 'white',
           editMode: false
        }
    },
    created() {
        this.note = this.keep

    },
    methods: {
        changeColor(color) {
            this.bgColor = color
        },
        
        editNote() {
            
            this.editMode = true
        },
        saveNote() {
            if (this.editMode === true) {
                keepService.editNote(this.note)
                this.editMode = false
            }
            
        },
        sendAsEmail() {
            
        }
    },
    
    mounted() {

        this.$refs.textarea.style.height =  this.$refs.textarea.scrollHeight+50+'px';
        

    },
    computed: {
        colorPicker() {
            return {
                'background-color': this.bgColor,
                // 'height': this.$refs.textarea.scrollHeight+40+'px'
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
