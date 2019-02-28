
import utils from '../../email/services/util-service.js'


var gNotes = []

export default {
    createNotes

}




function createNote(subject, body) {
    return {
        id: utils.makeId(),
        type: 'txt',
        date: new Date(),
        subject,
        body,
        bgColor:'white'

    }
}



function createNotes() {
    var noteOne = createNote('hello', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

    gNotes.push(noteOne)
    var noteTwo = createNote('tal', `Lorcenturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with tcently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

    gNotes.push(noteTwo)
    var noteThree = createNote('i am', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of n book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of n book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of n book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

    gNotes.push(noteThree)
    var noteFour = createNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

    gNotes.push(noteFour)
    var noteFour = createNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

    gNotes.push(noteFour)
    var noteFive = createNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

    gNotes.push(noteFive)
    var noteSix = createNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

    gNotes.push(noteSix)
    var noteSeven = createNote('wassap', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

    gNotes.push(noteSeven)
    return gNotes
}