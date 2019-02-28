
import keepService from '../services/keep-service.js'

export default {
    props: ['keep'],
    template: `
        <div class="txt-note">
            <h1>txt-note</h1>
            <textarea v-if="note" id="text-area" readonly rows="8" cols="50" v-model="note.txt"  
                placeholder="Enter your text  here" @click="editNote" 
                @blur="saveNote" ref="textarea"></textarea>
        </div> 
    `,
    data() {
        return {
           note: null
          
        }
    },
    created() {
    },
    methods: {
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
   
}
