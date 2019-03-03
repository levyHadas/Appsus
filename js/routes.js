
import mailApp from './apps/email/pages/mail-app.js'
import keepApp from './apps/keep/pages/keep-app.js'
import apsusApp from './pages/home-page.js'
import mailList from './apps/email/pages/email-list-page.js'
import compose from './apps/email/pages/email-compose-page.js'
import about from './cmps/about-cmp.js'




const routes = [
    { path: '/', component: apsusApp },
    { path: '/mail-app', component: mailApp, children:[
        { path: '', component: mailList, name:'inbox' },
        { path: 'inbox', component: mailList, name:'inbox' },
        { path: 'compose', component: compose, name:'compose'},
        { path: 'sent', component: mailList, name:'sent'}
    ] },
    { path: '/keep', component: keepApp},
    {path: '/about', component: about}

]

export default routes;