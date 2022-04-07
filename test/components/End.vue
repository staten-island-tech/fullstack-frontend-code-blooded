<template>
  <div class="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- if logged in -->
      <button v-if="$auth.isAuthenticated" class="exitGame" @click="loggedIn">
        end game
      </button>
      <!-- if not logged it-->
      <button v-if="!$auth.isAuthenticated" class="exitGame" @click="out">
        end game
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Leave',
  methods: {
    // if user is logged in
    loggedIn () {
      this.$router.push('/welcomeBack');
    },
    // if user is logged out
    out () {
      this.$auth.logout({
        returnTo: window.location.origin,
      })
    }
    
  }
}
</script>
<style scoped>
.exitGame{
  background-color: var(--fifth-color);
  color: var(--font-color);
  border-color: var(--fifth-color);
  font-family: 'Tomorrow', sans-serif;
    font-weight:var(--medium-weight);
    border-radius: 15px;
  font-size:1.7rem;
    padding:.5rem;
    text-transform: uppercase;
    bottom:0;
    right:0;
    position:absolute;
}
</style>