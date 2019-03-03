
import editPanel from './edit-panel-cmp.js'

export default {
    props: ['keep'],
    template: `
        <section
        class="video-keep-card"
        @mouseover="hover=true" 
        @mouseleave="hover=false"
        :class="isPinned"
        :style="colorPicker"
        >
            <!-- <video :src="keep.videoSrc" v-if="keep"></video> -->
            <iframe  class="video-keep-card"  :src="getSrc" v-if="keep">  </iframe>
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
        isPinned() {
            return (this.keep.isPinned) ? 'pinned' : 'unPinned'
        },
        getSrc(){
            var url = this.keep.videoSrc
            var videoCode = url.substring(url.indexOf('?v=')+3)

            var src= 'https://www.youtube.com/embed/'+videoCode
            console.log(src)
            return src
        }
    },



    mounted() {

    },
    components: {
        editPanel
    }

}
