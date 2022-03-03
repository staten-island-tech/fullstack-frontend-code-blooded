// main page
<template>
  <div id="app">
    <div class="btn">
      <!-- top rules button and sign in -->
      <button class="help"><a href="rules">?</a></button>
      <button type="button" class="sign-in">sign in</button>
    </div>
    <div class="main-parent">
      <div class="main-in">
        <!-- <h1 class="logo">code-blooded</h1> -->
        <GuestLogin></GuestLogin>
      </div>
    </div>

    <!-- <span class="apcsp">apcsp project</span> -->
  </div>
</template>

<script>
// import Join from '@/components/Join.vue'
// import Modal from '@/components/Modal.vue';
//   <Modal v-show="isModalVisible" @close="closeModal"/>

import GuestLogin from '@/components/GuestLogin.vue'
export default {
  name: 'App',
  components: {
    // Modal,
    GuestLogin,
  },
  data() {
    return {
      isJoinVisible: false,
      isJoinNotVisible: true,
      username: '',
    }
  },
  methods: {
    showModal() {
      this.isJoinVisible = true
      this.isJoinNotVisible = false
      this.username = this.$refs.userName.value
    },
    goGame() {
      if (this.username.length > 0) {
        this.$router.push('/game')
        this.username = this.$refs.userName.value
        console.log(this.username)
      } else {
        alert('Please input a username')
      }
    },
    closeModal() {
      this.isJoinVisible = false
      this.isJoinNotVisible = true
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
/* VARIABLES */
:root {
  --background-color: #0e1555;
  --secondary-color: #4e1184;
  --third-color: #932b77;
  --fourth-color: #fd367e;
  --font-color: #ffff;
  --heavy-weight: 900;
  --medium-weight: 600;
  --thin-weight: 400;
}

.mdc-typography {
  margin: 0;
}

h1 {
  margin: 0;
}
/* Common CSS */
#app {
  background-color: var(--background-color);
  max-width: 100%;
  height: 100vh;
  font-family: 'Tomorrow', sans-serif;
  margin: 0 auto;
}
button {
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--medium-weight);
}
a {
  text-decoration: none;
}
/* ? Button */
.help {
  background-color: gray;
  font-weight: var(--heavy-weight);
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  position: absolute;
}

/* SIGN IN BUTTON */
.sign-in {
  background-color: var(--font-color);
  color: var(--background-color);
  border-radius: 25px;
  height: 3rem;
  width: 9rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--heavy-weight);
  font-size: 1.5rem;
}
/* CODE BLOODED HEADER */
.logo {
  color: var(--font-color);
  font-size: 6rem;
  margin-bottom: 1rem;
}
.main-parent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
