<template>
  <div>
    <h1>testing</h1>
    <div v-for="colors in color" :key="colors" class="card">
      <h1>{{ colors }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      color: ['black', 'red', 'green', 'blue', 'yellow'],
      property: ['addFour', 'addTwo', 'number', 'reverse', 'skip'],
    }
  },
}
</script>

<style scoped>
div {
  background-color: rgb(197, 255, 236);
  height: 100px;
}
</style>
