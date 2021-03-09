<template>
  <h1>Options mixin example</h1>
  <div>mixin count: {{ mixinCounter }}</div>
  <button @click="addMixinCount">Add count to mixin</button>
</template>

<script>
import counterMixin from "../mixins/counterMixin";

export default {
  name: "OptionsMixins",
  mixins: [counterMixin],

}
</script>

<style scoped>

h1 {
  margin-top: 100px;
}

</style>