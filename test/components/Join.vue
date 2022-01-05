<template>
    <div class="optionapp">
<div class="options">
      <h1 class="logo">code-blooded</h1>
      <input type="text" placeholder="enter a name" name="username" required>
      <button class="start">start a game</button>
      <div class="join-contain">
          <input type="text" placeholder="enter code" name="join-code" required>
        <button class="join">join</button>
      </div>
    </div>
    </div>
</template>
<script>
  export default {
    name: 'Options',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>