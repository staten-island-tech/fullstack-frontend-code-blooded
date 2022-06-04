<template>
  <div class="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- if logged in -->
      <button v-if="$auth.isAuthenticated" class="leave" @click="loggedIn">
        leave game
      </button>
      <!-- if not logged it-->
      <button v-if="!$auth.isAuthenticated" class="leave" @click="out">
        leave game
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
.leave{
    border-radius: 35px;
    width:70%;
    font-size:3rem;
    margin-top:1rem;
    font-family: 'Tomorrow', sans-serif;
    background-color: var(--secondary-color);
    color:var(--fourth-color);
    font-size:3rem;
    border-color: var(--secondary-color);
      padding:.5rem;
  }
</style>