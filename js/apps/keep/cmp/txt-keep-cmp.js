

export default {
    template: `
        <div class="txt-note">
            <h1>txt-note</h1>
            <textarea id="text-area" readonly rows="8" cols="50" v-model="txt"  
                placeholder="Enter your text  here" @click="toggleEditMode" 
                @blur="toggleEditMode" ref="textarea"></textarea>
        </div> 
    `,
    data() {
        return {
          type: 'txt',
          txt: ''
        }
    },
    created() {
        // this.$refs.textarea.diabled = 'true' 
    },
    methods: {
        toggleEditMode() {
            this.$refs.textarea.readOnly = !this.$refs.textarea.readOnly
        },
        sendAsEmail() {

        }
    },
    mounted() {
        
    },
    compoted: {
        // placeholderTxt() {
        //     if (!txt.length) return 'Enter Your Notes'
        // }
        
    }

}

//oDoc.contentEditable = false;