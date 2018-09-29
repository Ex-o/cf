<template>
    <div class="layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="header mdl-layout__header mdl-layout__header--fixed mdl-color--black-100 mdl-color-text--black-100 mdl-shadow--3dp">
            <div class="mdl-layout__header-row">
                <img class="meducian-logo" src="../assets/logo.gif" width="50px">
                <span class="mdl-layout__title mdl-color-text--black-blue-100">CP Community</span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <router-link to="/" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                        <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">donut_small</i> Home
                        <span class="mdl-ripple"></span>
                    </router-link>
                    <a href="" id="cmp" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                        <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">compare</i> Compare
                        <span class="mdl-ripple"></span>
                    </a>
                    <div class="mdl-tooltip" data-mdl-for="cmp">
                        Currently under maintenance.
                    </div>
                    <router-link to="GymPicker" id="gymp" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                        <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">fitness_center</i> Gym Picker
                        <span class="mdl-ripple"></span>
                    </router-link>
                    <div class="mdl-tooltip" data-mdl-for="gymp">
                        Pick a contest from the codeforces gym that you and your team haven't attempted before.
                    </div>
                    <router-link to="VCPicker" id="vcp" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                        <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">search</i> Virtual Contest Picker
                        <span class="mdl-ripple"></span>
                    </router-link>
                    <div class="mdl-tooltip" data-mdl-for="vcp">
                        Pick a contest from the codeforces' rounds that you and your friends haven't attempted before.
                    </div>
                    <a href="https://discord.gg/algorithms" id="discord" target="_blank" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                        <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">chat</i> Discord
                        <span class="mdl-ripple"></span>
                    </a>
                    <div class="mdl-tooltip" data-mdl-for="discord">
                        Join the community's discord server and meet awesome people.
                    </div>
                </nav>
            </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
            <span id='logo'>CPC</span>
            <nav class="navigation mdl-navigation">
                <a href="index.html" class="mdl-navigation__link">
                    <i class="mdl-color-text--deep_orange-teal-400 material-icons" role="presentation">donut_small</i> Analyze </a>
                <a href="" class="mdl-navigation__link">
                    <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">compare</i> Compare</a>
                <a href="l" class="mdl-navigation__link">
                    <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">trending_up</i>Virtual Rating Change</a>
                <router-link to="VCPicker" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-navigation__link">
                    <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">search</i> Virtual Contest Picker
                    <span class="mdl-ripple"></span>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style>
</style>
