<template>
  <h1>This is a TypeScript and Composition API component</h1>
  <div>count: {{ counter }}</div>
  <button @click="addCount">Add count</button>
  <br/>
  <br/>


  <div>hook counter: {{ hookCounter}}</div>
  <button @click="addHookCount">Add count to hook</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useCounter from "../hooks/useCounter";


export default defineComponent({
  name: "CompositionApi",
  setup() {
    const counter = ref(0);
    const addCount = () => counter.value++;



    const {hookCounter, addHookCount} = useCounter()


    return { counter, addCount, hookCounter, addHookCount };
  },
});
</script>