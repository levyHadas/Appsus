
import utilService from '../../email/services/util-service.js'


var keepsDB = []
const KEEPS_KEY = 'keeps'

export default {
    deleteKeep,
    getKeeps,
    editNote,
    addKeep,
    copyKeep,
    toggleTodoDone,
    addTodoItem

}

function getKeeps() {
    var keeps = utilService.getFromStorage(KEEPS_KEY)
    if (keeps && keeps.length) keepsDB = keeps
    else {
        addKeep({ type: 'img', data: 'https://qph.fs.quoracdn.net/main-qimg-c00c5665edabad203972611b5cee5e48.webp' })
        addKeep({ type: 'txt', data: 'bka bka bla bla this is a text keep' })
        addKeep({ type: 'txt', data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' })
        addKeep({ type: 'todo', data: 'Lorem Ipsum, is simply dummy text, of the printing and, typesetting industry. Lorem' })
        addKeep({ type: 'txt', data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' })
        addKeep({ type: 'img', data: 'https://i.pinimg.com/originals/b7/e3/4c/b7e34ce24dce66c2b0f6bcd7a4d039ff.jpg' })
        addKeep({ type: 'todo', data: 'Going to sleep, eat' })
        utilService.saveToStorage(KEEPS_KEY, keepsDB)
    }
    return keepsDB


}

function addKeep({type, data}) {
    console.log('add keep')
    var newKeep = _createNewKeepObj(type)
    if (type === 'txt') newKeep.txt = data
    if (type === 'img') newKeep.imgSrc = data
    if (type === 'todo') newKeep = _makeTodos(newKeep, data)
    keepsDB.push(newKeep)
    utilService.saveToStorage(KEEPS_KEY, keepsDB)
    return Promise.resolve()
}

function _makeTodos(newKeep, data) {
    var todos = data.split(',')
    newKeep.todos = todos.map(todo => {
        return {txt: todo,
                isDone: false}
    })
    return newKeep
}

function addTodoItem(todo, newItemTxt) {
    console.log(todo)
    todo.todos.push({newItemTxt, isDone:false})
    return Promise.resolve()
}

function toggleTodoDone(todo) {
    todo.isDone = !todo.isDone
    utilService.saveToStorage(KEEPS_KEY, keepsDB)
    return Promise.resolve()


}


function _createNewKeepObj(type) {
    return {
        type: type,
        id: utilService.makeId(),
        date: new Date(),
    }
}

function copyKeep(id) {
    var keep = keepsDB.find(keep => keep.id === id)
    var newKeep= {...keep}
    console.log(newKeep)
    newKeep.id = utilService.makeId()
    keepsDB.push(newKeep)
    utilService.saveToStorage(KEEPS_KEY, keepsDB)
    return Promise.resolve()


}


function deleteKeep(id) {
    var keepIdx = keepsDB.findIndex(keep => keep.id === id)
    keepsDB.splice(keepIdx, 1)
    utilService.saveToStorage(KEEPS_KEY, keepsDB)
    return Promise.resolve()
}

function editNote(newNote) {
    var noteToEdit = keepsDB.find(keep => keep.id === newNote.id)
    noteToEdit.txt = newNote.txt
    utilService.saveToStorage(KEEPS_KEY, keepsDB)
    return Promise.resolve()
}







































// function _createTxtNote(subject, body) {
//     return {
//         id: utilService.makeId(),
//         type: 'txt',
//         date: new Date(),
//         subject,
//         body,

//     }
// }

// function createNotes() {
//     var noteOne = _createTxtNote('hello', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

//     gNotes.push(noteOne)
//     var noteTwo = _createTxtNote('tal', `Lorcenturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with tcently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

//     gNotes.push(noteTwo)
//     var noteThree = _createTxtNote('i am', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of n book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of n book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of n book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

//     gNotes.push(noteThree)
//     var noteFour = _createTxtNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

//     gNotes.push(noteFour)
//     var noteFour = _createTxtNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

//     gNotes.push(noteFour)
//     var noteFive = _createTxtNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

//     gNotes.push(noteFive)
//     var noteSix = _createTxtNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

//     gNotes.push(noteSix)
//     var noteSeven = _createTxtNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

//     gNotes.push(noteSeven)
//     return gNotes
// }
