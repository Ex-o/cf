<template>
  <DiscordWidget/>
</template>

<script>
import DiscordWidget from "@/components/DiscordWidget.vue";
export default {
  name: "Home",
  components: {
    DiscordWidget: DiscordWidget
  },
  mounted() {
    componentHandler.upgradeElement(this.$el.childNodes[0]);
  }
}
</script>

<style>
</style>