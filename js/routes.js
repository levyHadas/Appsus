
import mailApp from './pages/mail-app.js'
// import bookDetails from './cmps/book-details-cmp.js'
// import bookAdd from './cmps/book-add-cmp.js'






var homePage = {
    template: `
    <section class="home-page">
        <h1>email app!</h1>
        <router-link to="/" exact>Home</router-link> | 
        <router-link to="/about">About</router-link> |
        <router-link to='/mail-app'>mail</router-link>
    </section>`,
    methods: {
    }
}

var interval;

var about = {
    template: `
<section class="about-page">
        <router-link to="/" exact>Home</router-link> | 
        <router-link to="/about">About</router-link> |
        <router-link to='/mail-app'>mail</router-link>
    <h1>about us </h1>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora debitis voluptatum porro eius quidem
        culpa impedit commodi sint. Repellendus sapiente officiis corrupti! Est exercitationem incidunt similique 
        quod deleniti cum voluptate?            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Tempora debitis voluptatum porro eius quidem
        culpa impedit commodi sint. Repellendus sapiente officiis corrupti! Est exercitationem incidunt similique 
        quod deleniti cum voluptate?            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Tempora debitis voluptatum porro eius quidem
        culpa impedit commodi sint. Repellendus sapiente officiis corrupti! Est exercitationem incidunt similique 
        quod deleniti cum voluptate?            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Tempora debitis voluptatum porro eius quidem
        culpa impedit commodi sint. Repellendus sapiente officiis corrupti! Est exercitationem incidunt similique 
        quod deleniti cum voluptate?            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Tempora debitis voluptatum porro eius quidem
        culpa impedit commodi sint. Repellendus sapiente officiis corrupti! Est exercitationem incidunt similique 
        quod deleniti cum voluptate?
    </p>
</section>
`,
    methods: {

    },
    created() {

    },
    destroyed() {
    }

}




const routes = [
    { path: '/', component: homePage },
    { path: '/mail-app', component: mailApp },
    { path: '/about', component: about },

]

export default routes;