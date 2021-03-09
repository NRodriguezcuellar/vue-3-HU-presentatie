<template>
  <h1>This is a Javascript and Options Api component</h1>
  <div>count: {{ counter }}</div><button @click="addCount">Add count</button>
  <button @click="removeCount">Remove count</button>
  <br/>
  <br/>
  <div>mixin count: {{ mixinCounter }}</div>
  <button @click="addMixinCount">Add count to mixin</button>
</template>

<script>
import counterMixin from "../mixins/counterMixin";

export default {
  name: "OptionsApi",
  mixins: [counterMixin],
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addCount() {
      this.counter++
    }

  }
}
</script>

<style scoped>

h1 {
  margin-top: 100px;
}

</style>