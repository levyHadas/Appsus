import utilService from '../services/util-service.js'




export default {
    getEmails,
    sendEmail,
    toggleUnread,
    deleteEmail,
    getNumOfUnRead
}

var emailsDB = []


const EMAILS_KEY = 'emails'
const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur magni? Consectetur architecto earum soluta repellat assumenda quae dolor amet quasi voluptas voluptatum, beatae vitae velit ullam quod ducimus itaque?'
const SELF = 'self'
const INBOX = 'inbox'
// const SENT = 'sent'

function getEmails() {
    var emails = utilService.getFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
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
        var emailToRecive = { ...composed }
        emailToRecive.type = INBOX
        emailToRecive.from = 'self'
        emailToRecive.isRead = false
        emailToRecive.id = utilService.makeId()
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


function _addToEmails(email) {
    emailsDB.push(email)
    utilService.saveToStorage(EMAILS_KEY, emailsDB)
    return Promise.resolve()
}

function _createExampleEmail(type, subject, body, date, from = 'lorem', to = 'hadas') {
    return {
        type, //shuld be named mailBoxType
        id: utilService.makeId(),
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
    var email1 = _createExampleEmail(INBOX, 'hi inbox mail1', lorem, Date.now() + 10000, 'Tal', '')
    emails.push(email1)
    var email2 = _createExampleEmail(INBOX, 'inbox mail 2', 'Tal!!!!!!!!', Date.now(), 'Noam', '')
    emails.push(email2)
    var email3 = _createExampleEmail(INBOX, 'inbox mail 3', lorem, Date.now(), 'Hadas', '')
    emails.push(email3)
    var email4 = _createExampleEmail(INBOX, 'inbox mail 4', 'Short one', Date.now(), 'Brit', '')
    emails.push(email4)
    return emails
}




function deleteEmail(email) {
    var idx = getEmailIdx(email.id)
    emailsDB.splice(idx, 1)
    utilService.saveToStorage(EMAILS_KEY, emailsDB)
    return Promise.resolve()
}


function getEmailIdx(id) {
    return emailsDB.findIndex((email) => email.id === id)

}

function getNumOfUnRead() {
    var unread = 0
    for (var i = 0; i < emailsDB.length; i++) {
        if (emailsDB[i].isRead === false) unread++

    }
    return unread
}
