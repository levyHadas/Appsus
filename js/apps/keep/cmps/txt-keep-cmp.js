

import editPanel from '../cmps/edit-panel-cmp.js'
import keepService from '../services/keep-service.js'

export default {
    props: ['keep'],
    template: `
        <section @mouseover="hover=true" @mouseleave="hover=false">
            <textarea class="txt-keep-textarea"v-if="note" id="text-area" v-model="note.txt" 
                :style="colorPicker" @keyup="adjustHeight"
                placeholder="Enter your text  here" @click="editNote" 
                @blur="saveNote"
                :class="isPinned"
                 ref="textarea">
            </textarea>
            <edit-panel :class="isShown" :keep="keep" 
                @change-color="changeColor">
            </edit-panel>
        </section> 
    `,
    data() {
        return {
           note: null,
           hover: false,
           bgColor: '#c0cad3',
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
            // this.$refs.textarea.style.height =  this.$refs.textarea.scrollHeight
            if (this.editMode === true) {
                keepService.editNote(this.note)
                this.editMode = false
            }
            
        },
        adjustHeight() {
            this.$refs.textarea.style.height =  this.$refs.textarea.scrollHeight+'px'
            
        },
        sendAsEmail() {
            
        }
    },
    
    mounted() {
        this.$refs.textarea.style.height =  this.$refs.textarea.scrollHeight+20+'px';
    },
    computed: {
        colorPicker() {
            // if (this.$refs.textarea) var height = this.$refs.textarea.scrollHeight
            // else var height = '100px'
            return {
                'background-color': this.bgColor,
                // 'height': height
            }
        },
        isShown(){
           return (this.hover)?  'show':  'hide'
        },
        isPinned(){
            return (this.keep.isPinned)? 'pinned' : 'unPinned'
        }


    
 
    },
    components:{
        editPanel,
    },
 
    
 

}
