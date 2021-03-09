<template>
  <h1>Composition API hooks example</h1>


  <div>hook counter: {{ hookCounter }}</div>
  <button @click="addHookCount">Add count to hook</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import useCounter from "../hooks/useCounter";


export default defineComponent({
  name: "CompositionHooks",
  setup() {


    const {hookCounter, addHookCount} = useCounter()


    return { hookCounter, addHookCount};
  },
});
</script>
<style scoped>
h1{
  margin-top: 100px;
}
</style>