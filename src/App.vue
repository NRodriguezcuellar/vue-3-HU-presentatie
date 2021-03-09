<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <teleport-example/>
  <composition-api/>
  <options-api/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TeleportExample from "./components/TeleportExample.vue";
import CompositionApi from "./components/CompositionApi.vue";
import OptionsApi from "./components/OptionsApi.vue";

export default defineComponent({
  name: 'App',
  components: {
    OptionsApi,
    CompositionApi,
    TeleportExample,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>