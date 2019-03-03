

export default{
        template: `
        <nav class="nav-bar">
            <h1>Appsus.</h1>
            <h2> Youre personal, free, assistent. </h2>
            <div class="links-container home-page-links-container">
                    <router-link to="/" class="home-btn" exact>Home</router-link>|
                    <router-link to="/about">About</router-link> |
                    <router-link to='/mail-app'>mail</router-link>|
                    <router-link to='/keep'>keep</router-link>

            </div>
        </nav>`,
        methods: {
        }
}
