import editPanel from '../cmps/edit-panel-cmp.js'
import keepService from '../services/keep-service.js'

export default {
   props: ['keep'],
   template: `
       <section @mouseover="hover=true" @mouseleave="hover=false" :class="isPinned">
           <!-- <span class="btn-add-todo-item" title="Add" @click="edit">+</span>
           <input class=addTodoItem autofocus v-if="isEditMode" v-model="newItemTxt"
               @blur="addTodoItem" @keyup.enter="addTodoItem"/>  -->
           <ul v-if="todoKeep" class="todos" >To Do:
               <li class="todo" v-for="todo in todoKeep.todos" @click="toggleDone(todo)"
                   :class="todo.isDone ? 'is-done':''">{{todo.txt}}</li>
           </ul>


           <edit-panel :class="isShown" :keep="keep"
               @change-color="changeColor">
           </edit-panel>
       </section>
   `,
   data() {
       return {
          todoKeep: null,
          hover: false,
          bgColor: 'white',
          isEditMode: false,
          newItemTxt: ''

       }
   },
   created() {
       this.todoKeep = this.keep

   },
   methods: {
       changeColor(color) {
           this.bgColor = color
       },
       toggleDone(todo) {
           keepService.toggleTodoDone(todo)
       },
       edit() {
           this.isEditMode = true;
       },
       // addTodoItem() {
       //     keepService.addTodoItem(this.todoKeep, this.newItemTxt)
       //         .then(() => this.isEditMode = false)

       // },

       // editNote() {

       //     this.editMode = true
       // },
       // saveNote() {
       //     if (this.editMode === true) {
       //         keepService.editNote(this.note)
       //         this.editMode = false
       //     }

       // },
       sendAsEmail() {

       }
   },

   mounted() {


   },
   computed: {
       colorPicker() {
           return {
               'background-color': this.bgColor,
           }
       },
       isShown(){
          return (this.hover)?  'show':  'hide'
       },
       isPinned(){
           return (this.keep.isPinned)? 'pinned': 'un-pinned'
       }

   },
   components:{
       editPanel,
   },




}