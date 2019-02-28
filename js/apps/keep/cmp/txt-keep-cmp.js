

export default {
    props: ['keep'],
    template: `
        <div class="txt-note">
            <h1>txt-note</h1>
            <textarea v-if="note" id="text-area" readonly rows="8" cols="50" v-model="note.txt"  
                placeholder="Enter your text  here" @click="toggleEditMode" 
                @blur="toggleEditMode" ref="textarea"></textarea>
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
        toggleEditMode() {
            this.$refs.textarea.readOnly = !this.$refs.textarea.readOnly
        },
        sendAsEmail() {

        }
    },
    mounted() {
        return this.note = this.keep
    },
    compoted: {
     
 
    }

}
