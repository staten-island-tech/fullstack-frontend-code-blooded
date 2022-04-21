<template>
  <div class="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" class="sign-in" @click="login">
        log in
      </button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" class="sign-in" @click="logout">
        log out
      </button>
    </div>
  </div>
</template>

<script>
// .. imports removed for brevity

export default {
  name: 'Sign',
  methods: {
    // Log the user in
    login () {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin,
      })
      // eslint-disable-next-line no-console
      console.log("hello")
    }
    
  }
}
</script>
<style scoped>
  .sign-in{
    background-color: var(--font-color);
    color:var(--background-color);
    border-radius: 25px;
    height:3rem;
    width:9rem;
    position:absolute;
    right:2rem;
    top:2rem;
    font-family: 'Tomorrow', sans-serif;
    font-weight: var(--heavy-weight);
     font-size:1.5rem;
     z-index:1;
  }

</style>
