<template>
  <h1>This is a TypeScript and Composition API component</h1>
  <div>count: {{ counter }}</div>
  <button @click="addCount">Add count</button>
  <br/>
  <br/>


</template>

<script lang="ts">
import {defineComponent, ref} from "vue";



export default defineComponent({
  name: "CompositionApi",
  setup() {
    const counter = ref(0);
    const addCount = () => counter.value++;


    return {counter, addCount};
  },
});
</script>
