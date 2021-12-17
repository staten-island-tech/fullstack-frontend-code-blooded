<template>
  <div class="page onJoin">
    <h1>text</h1>
    <h1>Code: {{ code }}</h1>
  </div>
</template>

<script>
export default {
  name: 'OnJoin',
  data() {
    return {
      code: 'this is the code',
    }
  },
  //   methods: {
  //     randomCode() {
  //       console.log('working')
  //     },
  //   },
}
</script>

<style>
div {
  background-color: #0e1555;
  height: 200px;
  width: 200px;
}
</style>
