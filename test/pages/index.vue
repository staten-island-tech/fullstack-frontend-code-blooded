<template>
  <div id="app">
    <div class="btn">
      <button class="help"><a href="rules">?</a></button>
      <Sign />
    </div>
    <Join v-show="isJoinVisible" />

    <ActualGame v-show="testingComp" :socketInfo="socketInfo"></ActualGame>

    <div class="landing-wrapper" v-show="wrapper">
      <div v-show="isJoinNotVisible" class="options">
        <h1 class="logo">code-blooded</h1>
        <input
          ref="userName"
          class="input"
          type="text"
          placeholder="enter a name"
          name="username"
          required
        />
        <button class="start" @click="goGame">start a game</button>
        <button class="join" @click="showModal">show join code</button>
      </div>
    </div>

    <span class="apcsp">apcsp project</span>
  </div>
</template>

<script>
import io from 'socket.io-client'

import Join from '@/components/reg-comp/Join.vue'
import Sign from '@/components/reg-comp/Sign.vue'

// pages comp
import ActualGame from '@/components/pages-comp/ActualGame.vue'

//   <Modal v-show="isModalVisible" @close="closeModal"/>
export default {
  name: 'App',
  components: {
    Sign,
    Join,

    // page

    ActualGame,
  },

  data() {
    return {
      isJoinVisible: false,
      isJoinNotVisible: true,
      username: null,
      testingComp: false,
      wrapper: true,
      socketInfo: {},
    }
  },

  methods: {
    showModal() {
      this.isJoinVisible = true
      this.isJoinNotVisible = false
      // this.username = this.$refs.userName.value;
      console.log(this.socketInstance)
    },
    goGame() {
      // this.$router.push('/game');
      // this.username = this.$refs.userName.value;

      this.testingComp = true
      this.wrapper = false
      this.socketInstance = io('http://localhost:3001')

      this.socketInfo = this.socketInstance
      this.socketInfo.emit('testingEvent', 'hi')
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
/* FLEX BOX FOR BUTTONS */
.options,
.join-contain {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}
.options {
  width: 90vw;
  height: 90vh;
  flex-direction: column;
}
.start,
.join,
input {
  border-radius: 26px;
  width: 32%;
  font-size: 3rem;
  margin-top: 1rem;
}
input {
  border-color: var(--fourth-color);
  border-width: 0.3rem;
  color: var(--font-color);
  font-size: 3.5rem;
  background-color: var(--background-color);
  text-align: center;
}
::placeholder {
  padding: 0.5rem;
  color: var(--font-color);
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--thin-weight);
}
.start {
  background-color: var(--fourth-color);
  color: var(--background-color);
  font-size: 3rem;
  border-color: var(--fourth-color);
  padding: 0.5rem;
}
.join {
  background-color: var(--secondary-color);
  color: var(--fourth-color);
  font-size: 3rem;
  border-color: var(--secondary-color);
  padding: 0.5rem;
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
  background-image: linear-gradient(
    -225deg,
    #41327a 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
/* BOTTOM LOGO THINGY */
.apcsp {
  background-color: var(--third-color);
  bottom: 0;
  position: absolute;
  padding: 1rem;
  border-radius: 5px 30px 5px 5px;
}
/* Join Components */
.join-contain {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 49%;
}
</style>
