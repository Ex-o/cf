<template>
    <header class="header mdl-layout__header mdl-layout__header--fixed mdl-color--black-100 mdl-color-text--black-100 mdl-shadow--3dp">
        <div class="mdl-layout__header-row">
            <img class="meducian-logo" src="../assets/logo.gif" width="50px">
            <!-- <img class="meducian-logo" src="https://im5.ezgif.com/tmp/ezgif-5-aaa6c75750.gif" width="50px"> -->
            <span class="mdl-layout__title mdl-color-text--black-blue-100">CP Community</span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <router-link to="/" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">donut_small</i> Home
                    <span class="mdl-ripple"></span>
                </router-link>
                <a href="" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">compare</i> Compare
                    <span class="mdl-ripple"></span>
                </a>
                <a href="" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">trending_up</i> Virtual Rating Change
                    <span class="mdl-ripple"></span>
                </a>
                <router-link to="VCPicker" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">search</i> Virtual Contest Picker
                    <span class="mdl-ripple"></span>
                </router-link>
                <a href="https://discord.gg/algorithms" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    <i class="mdl-color-text--black-grey-400 material-icons" role="presentation">chat</i> Discord
                    <span class="mdl-ripple"></span>
                </a>
            </nav>
        </div>
    </header>
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
