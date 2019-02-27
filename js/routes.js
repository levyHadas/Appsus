
import mailApp from './apps/email/pages/mail-app.js'
import apsusApp from './pages/apsus-app.js'
import mailList from './apps/email/pages/email-list-page.js'
import compose from './apps/email/pages/email-compose-page.js'
import sent from './apps/email/pages/email-sent-page.js'












const routes = [
    { path: '/', component: apsusApp },
    { path: '/mail-app', component: mailApp, children:[
        // { path: '', component: mailList },
        { path: '/inbox', component: mailList },
        { path: '/compose', component: compose},
        { path: '/sent', component: sent}
    ] },
    // { path: '/sndkjfn', component: mailApp}

]

export default routes;