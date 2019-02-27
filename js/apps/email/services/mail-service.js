import utilService from './util-service.js';

import utills from './utills.js'


export default {
    getEmails,
    sendEmail,
    createEmails,
    toggleUnread
}

var emailsDB = []


const EMAILS_KEY = 'emails'
var gNextId = 1
const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur magni? Consectetur architecto earum soluta repellat assumenda quae dolor amet quasi voluptas voluptatum, beatae vitae velit ullam quod ducimus itaque?'
var gNextId = 1
const SELF = 'self'
const INBOX = 'inbox'
const SENT = 'sent'

function getEmails() {
    var emails = utilService.getFromStorage(EMAILS_KEY)
    return Promise.resolve(emails)
}

function sendEmail(composed) {
    console.log(composed)
    if (composed.to.toLowerCase() === SELF)
    {
        _addToEmails(SENT, composed)
        _addToEmails(INBOX, composed)
    } else _addToEmails(SENT, composed)
    return Promise.resolve()
}

function toggleUnread(email) {
    console.log('gothere')
    email.isRead = !email.isRead
    utilService.saveToStorage(EMAILS_KEY, emailsDB)
}

// function getEmailById() {

// }

function _addToEmails(email) {
    emailsDB.push(email)
    utilService.saveToStorage(EMAILS_KEY, emailsDB)
    return Promise.resolve()
}

function _createExampleEmail(type, subject, body, date, from = 'lorem', to = 'hadas') {
    return {
        type,
        id: gNextId++,
        subject,
        body,
        isRead: false,
        date,
        from,
        to,

    }
}

function createEmails() {
    var email1 = _createExampleEmail(INBOX,'hi inbox mail1', lorem, Date.now() + 10000, 'Tal', '')
    _addToEmails(email1)
    var email2 = _createExampleEmail(INBOX, 'inbox mail 2', 'Tal!!!!!!!!', Date.now(), 'Noam', '')
    _addToEmails(email2)
    var email3 = _createExampleEmail(INBOX, 'inbox mail 3', lorem, Date.now(), 'Hadas', '')
    _addToEmails(email3)
    var email4 = _createExampleEmail(INBOX, 'inbox mail 4', 'Short one', Date.now(), 'Brit', '')
    _addToEmails(email4)

    // var email1 = _createExampleEmail('hi inbox mail1', lorem, Date.now() + 10000, SELF , SELF)
    // sendEmail(email1)
    // var email2 = _createExampleEmail('inbox mail 2', 'Tal!!!!!!!!', Date.now(), SELF, 'PUKI')
    // sendEmail(email2)
    // var email3 = _createExampleEmail('inbox mail 3', lorem, Date.now(), SELF, 'Tamar')
    // sendEmail(email3)
    // var email4 = _createExampleEmail('inbox mail 4', 'Short one', Date.now(), SELF, SELF)
    // sendEmail(email4)
}





