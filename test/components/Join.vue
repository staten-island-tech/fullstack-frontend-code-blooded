<template>
  <div class="optionapp">
    <div class="options">
      <h1 class="logo">code-blooded</h1>
      <input type="text" placeholder="enter a name" name="username" required />
      <button class="start" @click="goGame">
        <a href="game">start a game</a>
      </button>
      <div class="join-contain">
        <input
          id="join-code"
          type="text"
          placeholder="enter code"
          name="join-code"
          required
        />
        <button class="join invitee" @click="goInvitee">join</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Options',
  props: ['username'],
  methods: {
    close() {
      this.$emit('close')
    },
    goGame() {
      this.$router.push('/game')
    },
    goInvitee() {
      this.$router.push('/invitee')
      console.log(this.username)
    },
  },
}
</script>
<style scoped>
.optionapp {
  z-index: 20;
}
#join-code {
  font-size: 2.5rem;
  padding: 0.2rem;
}
</style>
