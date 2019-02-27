import utilService from './util-service.js';



export default {
    getEmails,
    sendEmail,
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
    if (!emails || !emails.length ) {
        emails = _createEmails()
    }
    emailsDB = emails
    utilService.saveToStorage(EMAILS_KEY, emails)
    return Promise.resolve(emails)
}

function sendEmail(composed) {
    if (composed.to.toLowerCase() !== SELF) _addToEmails(composed)
    else {
        //add as sent
        _addToEmails(composed) 
        //add as recived
        var emailToRecive = {...composed}
        emailToRecive.type = INBOX
        emailToRecive.from = 'self'
        emailToRecive.isRead = false
        _addToEmails(emailToRecive) 
    } 
    utilService.saveToStorage(EMAILS_KEY, emailsDB)
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

function _createEmails() {
    var emails = []
    var email1 = _createExampleEmail(INBOX,'hi inbox mail1', lorem, Date.now() + 10000, 'Tal', '')
    emails.push(email1)
    var email2 = _createExampleEmail(INBOX, 'inbox mail 2', 'Tal!!!!!!!!', Date.now(), 'Noam', '')
    emails.push(email2)
    var email3 = _createExampleEmail(INBOX, 'inbox mail 3', lorem, Date.now(), 'Hadas', '')
    emails.push(email3)
    var email4 = _createExampleEmail(INBOX, 'inbox mail 4', 'Short one', Date.now(), 'Brit', '')
    emails.push(email4)
    return emails


    // var email1 = _createExampleEmail('hi inbox mail1', lorem, Date.now() + 10000, SELF , SELF)
    // sendEmail(email1)
    // var email2 = _createExampleEmail('inbox mail 2', 'Tal!!!!!!!!', Date.now(), SELF, 'PUKI')
    // sendEmail(email2)
    // var email3 = _createExampleEmail('inbox mail 3', lorem, Date.now(), SELF, 'Tamar')
    // sendEmail(email3)
    // var email4 = _createExampleEmail('inbox mail 4', 'Short one', Date.now(), SELF, SELF)
    // sendEmail(email4)
}





