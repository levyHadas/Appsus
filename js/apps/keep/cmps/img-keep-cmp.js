
import keepService from '../services/keep-service.js'
import editPanel from '../cmps/edit-panel-cmp.js'

export default {
    props: ['keep'],
    template: `
        <section
        class="img-keep"
        @mouseover="hover=true" 
        @mouseleave="hover=false"
        :class="isPinned"
        :style="colorPicker">
            <img  :src="keep.imgSrc" v-if="keep" alt="Can't get your image">
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
