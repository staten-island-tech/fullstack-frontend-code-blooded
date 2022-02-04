// manual signin page
<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> Welcome Back! </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <p class="smalltext">
            Keep track of your progress and connect with friends
          </p>
          <input
            type="text"
            placeholder="username/email"
            name="username"
            required
          />
          <input type="text" placeholder="password" name="password" required />
        </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer"> This is the default footer! </slot>
        <button type="button" class="btn-green" @click="close">
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style scoped>
.modal-backdrop {
  background-color: tomato;
  width: 50vw;
  height: 70vh;
  z-index: 20;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
</style>
