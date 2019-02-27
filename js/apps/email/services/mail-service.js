import utilService from './util-service.js';



export default{
    getEmails,
    sendEmail,
    createEmails
}

var emailsDB = {
    inbox:[],
    sent:[]
}

const EMAILS_KEY = 'emails'
const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur magni? Consectetur architecto earum soluta repellat assumenda quae dolor amet quasi voluptas voluptatum, beatae vitae velit ullam quod ducimus itaque?'


function getEmails(type) {
    var emails = utilService.getFromStorage(EMAILS_KEY)
    return Promise.resolve(emails[type])
}

function sendEmail(composed) {
    _addToEmails(composed)
}

function _addToEmails(type, email) {
    emailsDB[type].push(email)
    utilService.saveToStorage(EMAILS_KEY, emailsDB)
    return Promise.resolve(email)
}

function _createExampleEmail(subject, body, date) {
    return {
        subject,
        body,
        isRead: false,
        date
    }
}

function createEmails() {
    var email1 = _createExampleEmail('hi inbox mail1',lorem, Date.now() + 10000)
    _addToEmails('inbox', email1)
    var email2 = _createExampleEmail('inbox mail 2','Tal!!!!!!!!', Date.now())
    _addToEmails('inbox', email2)
    var email3 = _createExampleEmail('inbox mail 3',lorem, Date.now())
    _addToEmails('inbox', email3)
    var email4 = _createExampleEmail('inbox mail 4','Short one', Date.now())
    _addToEmails('inbox', email4)
    
    var email1 = _createExampleEmail('hi inbox mail1',lorem, Date.now() + 10000)
    _addToEmails('sent', email1)
    var email2 = _createExampleEmail('inbox mail 2','Tal!!!!!!!!', Date.now())
    _addToEmails('sent', email2)
    var email3 = _createExampleEmail('inbox mail 3',lorem, Date.now())
    _addToEmails('sent', email3)
    var email4 = _createExampleEmail('inbox mail 4','Short one', Date.now())
    _addToEmails('sent', email4)
}





