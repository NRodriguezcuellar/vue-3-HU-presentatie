<template>
  <h1>This is a Javascript and Options Api component</h1>
  <div>count: {{ counter }}</div>
  <button @click="addCount">Add count</button>

</template>

<script>
export default {
  name: "OptionsApi",
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