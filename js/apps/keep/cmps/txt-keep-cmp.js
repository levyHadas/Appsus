

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
                 readonly

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
        }
    },
    created() {
    },
    methods: {
        changeColor(color) {
            this.bgColor = color
            // console.log(color)
        },
        
        editNote() {
            this.$refs.textarea.readOnly = false
        },
        saveNote() {
            console.log(this.note)
            this.$refs.textarea.readOnly = true
            keepService.editNote(this.note)

        },
        sendAsEmail() {

        }
    },
    mounted() {
        return this.note = this.keep
    },
    computed: {
        colorPicker() {
            return {
                'background-color': this.bgColor
            }
        },
        isShown(){
           return (this.hover)?  'show':  'hide'
        },
    
 
    },
    components:{
        editPanel,
    } 

}
