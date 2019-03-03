

import navBar from '../cmps/nav-bar-cmp.js'

export default {
    template: `
<section class="about-page">
    <div class="bg-about">

        <nav-bar class="about-nav-bar"></nav-bar >
        <div class="about-txt-container">
            <h1>about us </h1>
            <p class="about-us-txt">
            Tal Barak, 29 years old, born in Qiryat-Ono. son of loving parents, Eli and Ilana. 
            currently living in Tel-Aviv, with my loving girlfriend, Brit. 
            I was in the restaurant buisness for 6 years, and now, as my priorities have changed,
            i have decided to get out of my comfort zone, make a big change in my life, making my way to be a full-stack web developer. <br>
            <hr><hr>
            Hadas Levy, junior developer, living in tel aviv with my spouse, Noam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad sint facere, consectetur maxime odit, incidunt, velit magnam sequi delectus est soluta! Error, sapiente molestiae? Dolorem quidem minus reprehenderit tempora.
            </p>

        </div>

    </div>
</section>
`,
    methods: {

    },
    created() {

    },
    destroyed() {
    },
    components: {
        navBar
    }

}