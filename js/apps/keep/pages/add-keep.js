
import keepService from '../services/keep-service.js'

export default {
    template: `
        <section class="add-keep">
            <input class="add-keep-input" v-model="keep.data" autofocus
                :placeholder="placeholderTxt" @keyup.enter="saveKeep">
            <div class="btns-container-add">
                <button class="add-keep-btn txt-keep-btn" @click="setKeepType('txt')"><i class="far fa-file-alt"></i></button>
                <button class="add-keep-btn todo-keep-btn" @click="setKeepType('todo')"><i class="far fa-list-alt"></i></button>
                <button class="add-keep-btn img-keep-btn" @click="setKeepType('img')"><i class="far fa-image"></i></button>
                <button class="add-keep-btn img-keep-btn" @click="setKeepType('video')"><i class="far fa-play-circle"></i></button>
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
    },
    methods: {
        setKeepType(keepType) {
            this.keep.type = keepType
            if (keepType === 'todo') this.placeholderTxt = 'Enter a comma separated list'
            if (keepType === 'img') this.placeholderTxt = 'Enter an image Url'
            if (keepType === 'video') this.placeholderTxt = 'Enter a video Url'
            if (keepType === 'txt') this.placeholderTxt = 'Enter any text'
            if (this.keep.data) this.saveKeep()
        },
        saveKeep() {
            if (this.keep.data !== null) keepService.addKeep(this.keep)
            this.keep.data = null
            // this.$router.push('/mail-app/compose')
        }
    },
 
    computed: {
    }

}

//oDoc.contentEditable = false;