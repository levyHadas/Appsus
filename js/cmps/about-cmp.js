

import navBar from '../cmps/nav-bar-cmp.js'

export default {
    template: `
<section class="about-page">
    <div class="bg-about">

        <nav-bar class="about-nav-bar"></nav-bar >
        <div class="about-txt-container">
            <h1>About Us </h1>
            <p class="about-us-txt">
            Tal Barak, 29 years old, born in Qiryat-Ono. son of loving parents, Eli and Ilana. 
            Currently living in Tel-Aviv, with my loving girlfriend, Brit. <br>
            Motivational fullstack web developer. People person and a team player. <br>
            tal63566@gmail.com
           <br>
            <hr><hr>
            Hadas Levy, junior developer, living in tel aviv with my spouse, Noam.
            I love animals and I love travelling! <br>
            hadasl789@gmail.com
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