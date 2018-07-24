<template>
  <div id="vueapp">
    <AppContainer>
      <NavBar/>
      <div style="height: 5em"></div>
      <router-view/>
    </AppContainer>
  </div>
</template>

<script>
import css from "./assets/style.css";
import NavBar from "@/components/NavBar.vue";
import DiscordWidget from "@/components/DiscordWidget.vue";
import AppContainer from "@/components/AppContainer.vue";
export default {
  name: 'App',
  components: {
    NavBar: NavBar,
    DiscordWidget: DiscordWidget,
    AppContainer: AppContainer
  }
}
</script>

<style>
#vueapp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
