<template>
  <teleport to="#teleport-target">
    <div id="parentNode">
      <h1>id: {{ grandfather}}</h1>
      <button @click="checkElementLocation">Get teleport target id</button>
    </div>
  </teleport>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent( {
  name: "TeleportExample",
  data() {
    return {
      grandfather: null,
    };
  },
  methods: {
    // checkElementLocation(event:PointerEvent ) {
    checkElementLocation(event) {
      //const parentNode = (event.currentTarget as HTMLElement).parentElement;
      const parentNode = event.currentTarget.parentElement;
      this.grandfather = parentNode.parentElement.id
    },
  },
});
</script>
<style scoped>
</style>