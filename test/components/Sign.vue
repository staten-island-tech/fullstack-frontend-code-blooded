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
    }
    
  }
}
</script>
