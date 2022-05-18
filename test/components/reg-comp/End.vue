<template>
  <div class="home">
    <!-- doesn't work cause t's no longer a page -->
    <!-- <Welcomeback v-show="welcomeTrue"></Welcomeback> -->
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- if logged in -->
      <button v-if="$auth.isAuthenticated" class="exitGame" @click="out">
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
// import Welcomeback from '@/components/pages-comp/Welcomeback.vue';
// import Welcomeback from '../pages-comp/Welcomeback.vue';
export default {
  name: 'Leave',
  components: {
    // Welcomeback
  },
  data(){
    return{
      welcomeTrue: false,
    }
  },
  methods: {
    // if user is logged in
    loggedIn () {
      this.welcomeTrue = true;
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