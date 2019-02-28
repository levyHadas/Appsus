
import utilService from '../../email/services/util-service.js'


var keepsDB = []
const KEEPS_KEY = 'keeps'

export default {
    // createNotes,
    deleteKeep,
    getKeeps,
    addKeep

}

function getKeeps() {
    var keeps = utilService.getFromStorage(KEEPS_KEY)
    if (keeps && keeps.length ) keepsDB = keeps
    else {
        addKeep({type:'txt', data:'bka bka bla bla this is a text keep'})
        addKeep({type:'txt', data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'})
        addKeep({type:'txt', data:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'})
        utilService.saveToStorage(KEEPS_KEY, keepsDB)
    }
    return keepsDB
    
    
}

function addKeep({type, data}) {
    console.log('type', type)
    if (type === 'txt') var newKeep = createTxtKeep(data)
    keepsDB.push(newKeep)
    console.log(keepsDB)
    
    utilService.saveToStorage(KEEPS_KEY, keepsDB)
}

function createTxtKeep(data) {

    return {
        id: utilService.makeId(),
        type: 'txt',
        date: new Date(),
        txt: data
    }
}


function deleteKeep(id) {
    var keepIdx = keepsDB.findIndex(keep => keep.id === id)
    keepsDB.splice(keepIdx,1)
    utilService.saveToStorage(KEEPS_KEY, keepsDB)
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
