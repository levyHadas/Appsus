
import mailApp from './apps/email/pages/mail-app.js'
import apsusApp from './pages/apsus-app.js'
import mailList from './apps/email/pages/mail-app.js'
import compose from './apps/email/pages/email-compose-page.js'












const routes = [
    { path: '/', component: apsusApp },
    { path: '/mail-app', component: mailApp, children:[
        { path: '', component: mailList },
        { path: '/inbox', component: mailList },
        { path: '/compose', component: compose}
        // { path: '/sent', component: compose}
    ] },
    // { path: '/sndkjfn', component: mailApp}

]

export default routes;