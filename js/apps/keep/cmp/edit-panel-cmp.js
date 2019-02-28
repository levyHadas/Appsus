


export default {
    template: `
<section class="edit-panel">
<div class="button-container">
    <i @click="pinKeep(keep.id)" title="Pin note" class="fas fa-thumbtack"></i>
    <i @click="copyKeep(keep.id)" title="Copy note" class="fas fa-copy"></i>
    <i @click="deleteKeep(keep.id)" title="Delete note" class="far fa-trash-alt"></i>
    <i title="Change color" class="fas fa-palette"
             @mouseover.self="hover=true"
    ></i>
    <div class="colors" v-if="hover"
            @mouseover.self="hover=true"
            @mouseleave.self="hover=false"  
    >
    <span class="color-picker-dot" @click="emitChangeColor('lightblue')"  
          title="lightblue" style="background-color:lightblue" >
        </span>
    <span class="color-picker-dot" @click="emitChangeColor('palegoldenrod')" 
           title="palegoldenrod" style="background-color:palegoldenrod">
        </span>
    <span class="color-picker-dot" @click="emitChangeColor('lightgreen')"
          title="lightgreen" style="background-color:lightgreen">
        </span>
    <span class="color-picker-dot" @click="emitChangeColor('lightpink')" 
         title="lightpink" style="background-color:lightpink">
        </span>
    <span class="color-picker-dot" @click="emitChangeColor('lightcyan')" 
         title="lightcyan" style="background-color:lightcyan">
        </span>
    <span class="color-picker-dot" @click="emitChangeColor('white')" 
         title="white" style="background-color:white">
        </span>

 </div>
</div>

</section>
`,
    data() {
        return {
            hover: false,

        }
    },
    methods: {
        emitChangeColor(color) {
            this.$emit('change-color', color)
        },
        pinKeep(id){

        },
        copyKeep(id){

        },
        deleteKeep(id){

        }
    }




}