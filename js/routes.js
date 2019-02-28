
import mailApp from './apps/email/pages/mail-app.js'
import keepApp from './apps/keep/pages/keep-app.js'
import apsusApp from './pages/apsus-app.js'
import mailList from './apps/email/pages/email-list-page.js'
import compose from './apps/email/pages/email-compose-page.js'












const routes = [
    { path: '/', component: apsusApp },
    { path: '/mail-app', component: mailApp, children:[
        { path: '', component: mailList },
        { path: 'inbox', component: mailList },
        { path: 'compose', component: compose},
        { path: 'sent', component: mailList}
    ] },
    { path: '/keep', component: keepApp}

]

export default routes;