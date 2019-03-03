import utilService from '../services/util-service.js'




export default {
    getEmails,
    sendEmail,
    toggleUnread,
    deleteEmail,
    getNumOfUnRead,
    updateNumOfUnread,
}

var emailsDB = []


const EMAILS_KEY = 'emails'
const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur magni? Consectetur architecto earum soluta repellat assumenda quae dolor amet quasi voluptas voluptatum, beatae vitae velit ullam quod ducimus itaque?'
const SELF = 'self'
const INBOX = 'inbox'
var numOfUnread

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
    var email1 = _createExampleEmail(INBOX, 'Hey bro! long time', lorem, Date.now() + 10000, 'Tal', '')
    emails.push(email1)
    var email2 = _createExampleEmail(INBOX, 'about the project..', 'Tal!!!!!!!!', Date.now(), 'Noam', '')
    emails.push(email2)
    var email3 = _createExampleEmail(INBOX, 'what do you think?', lorem, Date.now(), 'Hadas', '')
    emails.push(email3)
    var email4 = _createExampleEmail(INBOX, 'urgent! ', 'Short one', Date.now(), 'Brit', '')
    emails.push(email4)
   var  email5 = _createExampleEmail(INBOX, 'whats up man?',lorem, Date.now(), 'tal', '')
    emails.push(email5)
    var email6 = _createExampleEmail(INBOX, 'coming to visit?',lorem, Date.now(), 'brad', '')
    emails.push(email6)
    var email7 = _createExampleEmail(INBOX, 'shopping time baby!', lorem, Date.now(), 'yaron', '')
    emails.push(email7)
    var email8 = _createExampleEmail(INBOX, 'you think i look ok?', lorem, Date.now(), 'maor', '')
    emails.push(email8)
    var email9 = _createExampleEmail(INBOX, 'im out of ideas',lorem, Date.now(), 'shay', '')
    emails.push(email9)
    var email10 = _createExampleEmail(INBOX, 'how much mail can one man write?', lorem, Date.now(), 'adi', '')
    emails.push(email10)
    var email11 = _createExampleEmail(INBOX, 'think about school', lorem, Date.now(), 'guy', '')
    emails.push(email11)
    var email12 = _createExampleEmail(INBOX, 'can pigs fly?', lorem, Date.now(), 'self', '')
    emails.push(email12)
    var email13 = _createExampleEmail(INBOX, 'and how about an elephent?',lorem, Date.now(), 'self', '')
    emails.push(email13)
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


function _countUnread() {
    getEmails()
    var unread = 0
    for (var i = 0; i < emailsDB.length; i++) {
        if (emailsDB[i].isRead === false) unread++

    }
    return unread
}

function getNumOfUnRead() {
    if (!numOfUnread) numOfUnread = _countUnread()
    return numOfUnread
}

function updateNumOfUnread(change) {
    numOfUnread += change
    return numOfUnread
}
