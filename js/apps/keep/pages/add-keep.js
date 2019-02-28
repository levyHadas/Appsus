
import keepService from '../services/keep-service.js'


export default {
    template: `
        <section class="add-keep">
            <h1>txt-note</h1>
            <input class="add-keep-input" v-model="keep.data" autofocus
                :placeholder="placeholderTxt" @keyup.enter="saveKeep">
            <div class="btns-container">
                <button class="txt-keep-btn" @click="setKeepType('txt')">txt</button>
                <button class="todo-keep-btn" @click="setKeepType('todo')">todo</button>
                <button class="img-keep-btn" @click="setKeepType('img')">img</button>
            </div>
        </section> 
    `,
    data() {
        return {
            keep: {
                data: null,
                type: 'txt'
            },
            placeholderTxt: 'Add a Keep'
        }
    },
    created() {
        // this.$refs.textarea.diabled = 'true' 
    },
    methods: {
        setKeepType(keepType) {
            this.keep.type = keepType
            this.placeholderTxt = keepType + ' keep' //TODO - BETTER TEXT
        },
        saveKeep() {
            console.log(this.keep.data)
            if (this.keep.data !== null) keepService.addKeep(this.keep)
        }
    },
    mounted() {
        
    },
    computed: {
        // placeholderTxt() {
        //     if (!txt.length) return 'Enter Your Notes'
        // }
        
    }

}

//oDoc.contentEditable = false;