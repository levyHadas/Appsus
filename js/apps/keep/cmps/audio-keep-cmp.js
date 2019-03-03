
import editPanel from '../cmps/edit-panel-cmp.js'

export default {
    props: ['keep'],
    template: `
        <section
        class="img-keep"
        @mouseover="hover=true" 
        @mouseleave="hover=false"
        :class="isPinned"
        :style="colorPicker"
        >
            <audio :src="keep.audioSrc" v-if="keep"></audio>
            <edit-panel :class="isShown" :keep="keep"
             
             @change-color="changeColor"></edit-panel>
        </section> 
    `,
    data() {
        return {
            hover: null,
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
    },
    computed: {
        isShown() {
            return (this.hover) ? 'show' : 'hide'
        },
        colorPicker() {
            return {
                'background-color': this.bgColor
            }
        },
        isPinned(){
            return (this.keep.isPinned)? 'pinned' : 'unPinned'
        },

    },



    mounted() {
      
    },
    components: {
        editPanel
    }

}
