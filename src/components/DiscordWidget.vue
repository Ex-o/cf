<template>
    <div class="mdl-grid content">
        <div class="demo-card-wide mdl-card mdl-shadow--3dp mdl-cell mdl-cell--12-col">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">Welcome</h2>
            </div>
            <div class="mdl-card__supporting-text">
                Competitive Programming Community is a community of commpetitive programmers on Discord focused on discussing algorithmic
                problems daily.
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a href="https://discord.gg" id="discordBtn" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Join Discord
                </a>
                <a :href="discordInviteLink" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Continue
                </a>
            </div>
            <div class="mdl-card__menu">
                <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DiscordWidget",
  data() {
    return {
      discordInviteLink: 'https://discord.gg/algorithms'
    }
  }
}
</script>

<style>

</style>
