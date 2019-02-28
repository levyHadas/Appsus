

import editPanel from '../cmps/edit-panel-cmp.js'

export default {
    props: ['keep'],
    template: `
        <section                 @mouseover="hover=true" 
             @mouseleave="hover=false"  >
            <textarea v-if="note" 
                 id="text-area" 
                 readonly

                v-model="note.txt" 


                :style="colorPicker"
                placeholder="Enter your text  here" @click="toggleEditMode" 
                @blur="toggleEditMode" ref="textarea">
            </textarea>
             <edit-panel v-if="hover" 
             
             @change-color="changeColor"></edit-panel>

        </section> 
    `,
    data() {
        return {
           note: null,
           hover: true,
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
        toggleEditMode() {
            this.$refs.textarea.readOnly = !this.$refs.textarea.readOnly
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
    
 
    },
    components:{
        editPanel,
    } 

}
