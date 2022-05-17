<template>
  <div id="app">
    <!-- this is the landing page ahaahha -->
    <div class="landing-page" v-show="landingPage">
      <div class="btn">
        <button class="help"><a href="rules">?</a></button>
        <Sign />
      </div>
      <Join v-show="isJoinVisible" />

      <div v-show="isJoinNotVisible" class="options">
        <h1 class="logo">code-blooded</h1>
        <input
          ref="userName"
          class="input-landing"
          type="text"
          placeholder="enter a name"
          name="username"
          required
        />
        <!-- this is the button to start a game IF YOU ARE THE HOST -->
        <button class="start-landing" @click="goGame">start a game</button>
        <!-- button to join an existing game WITH A CODE -->
        <button class="join-landing" @click="showModal">show join code</button>
      </div>
      <span class="apcsp">apcsp project</span>
    </div>

    <!-- i guess heres the waiting room div -->
    <div class="waitingRoom" v-show="waitingRoom">
      <div class="code-page">
        <button class="help"><a href="rules">?</a></button>
        <div class="options2">
          <div class="row">
            <div class="code">
              <div class="sample">
                <h1 class="code-header">CODE:</h1>
                <Pin></Pin>
              </div>
              <p class="comment">share this with friends for them to join</p>
              <h2 class="whoJoined">Friends who have joined</h2>
              <div class="friend-list">
                <ul class="list">
                  <li class="friend1 friend">
                    javascript, the host, is playing
                  </li>
                  <li class="friend2 friend">vue, the invitee, is playing</li>
                  <li class="friend3 friend">css, the invitee, is playing</li>
                  <li class="friend4 friend">html, the invitee, is playing</li>
                </ul>
              </div>
              <div class="buttons" v-show="urGuest">
                <Leave />
              </div>
              <div class="buttons" v-show="urHost">
                <button class="start3" @click="goActualGame">START GAME</button>
                <button class="delete3" @click="goWelcomeBack">
                  DELETE GAME
                </button>
              </div>
            </div>
            <div id="chat" class="chat">
              <p class="friend chat">game created</p>
              <span class="space"> </span>
              <input
                id="writeMessage"
                type="text"
                placeholder="write a message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Join from '@/components/reg-comp/Join.vue'
import Sign from '@/components/reg-comp/Sign.vue'

// these are waiting room components i gotta import
import Pin from '@/components/reg-comp/Pin.vue'
import Leave from '@/components/reg-comp/Leave.vue'

//   <Modal v-show="isModalVisible" @close="closeModal"/>
export default {
  name: 'App',
  components: {
    Sign,
    Join,

    // waiting room components
    Pin,
    Leave,
  },
  data() {
    return {
      isJoinVisible: false,
      isJoinNotVisible: true,
      username: null,
      landingPage: true,
      waitingRoom: false,
      urHost: false,
      urGuest: false,
    }
  },
  methods: {
    showModal() {
      this.isJoinVisible = true
      this.isJoinNotVisible = false
    },
    goGame() {
      this.waitingRoom = true
      this.landingPage = false
      this.urHost = true
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
.start-landing,
.join-landing,
.input-landing {
  border-radius: 26px;
  width: 32%;
  font-size: 3rem;
  margin-top: 1rem;
}
.input-landing {
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
.start-landing {
  background-color: var(--fourth-color);
  color: var(--background-color);
  font-size: 3rem;
  border-color: var(--fourth-color);
  padding: 0.5rem;
}
.join-landing {
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

/* heres waitingROom cssss */

.hide {
  display: none;
}
.code {
  width: 60%;
}
.code-page {
  background-color: var(--background-color);
  max-width: 100%;
  height: 100vh;
  font-family: 'Tomorrow', sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
button {
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--medium-weight);
}
a {
  text-decoration: none;
}
.help {
  background-color: gray;
  font-weight: var(--heavy-weight);
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  position: absolute;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.comment {
  color: var(--third-color);
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--heavy-weight);
  font-size: 1.5rem;
}
.options2 {
  display: flex;
  flex-direction: column;
  width: 95vw;
  height: 90vh;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}
.sample {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.buttons {
  display: flex;
  flex-direction: column;
}
.start,
.leave {
  border-radius: 35px;
  width: 70%;
  font-size: 3rem;
  margin-top: 1rem;
}
input {
  border-color: var(--fourth-color);
  border-width: 0.3rem;
  color: var(--font-color);
  font-size: 1.5rem;
  border-radius: 26px;
  width: 40%;
  font-size: 3rem;
  margin-top: 1rem;
  background-color: var(--background-color);
}
.space {
  flex-grow: 1;
}
#writeMessage {
  align-self: flex-end;
  margin-top: auto;
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
.leave {
  background-color: var(--secondary-color);
  color: var(--fourth-color);
  font-size: 3rem;
  border-color: var(--secondary-color);
  padding: 0.5rem;
}
.code-header {
  color: var(--font-color);
  font-size: 4rem;
  margin-bottom: 1rem;
  letter-spacing: 5px;
}
.whoJoined {
  color: var(--font-color);
  font-size: 2rem;
  letter-spacing: 3px;
}
.friend-list {
  border-bottom: 1px solid var(--fourth-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  color: var(--font-color);
  font-weight: var(--medium-weight);
}
li {
  list-style: none;
}

/* CHAT CSS */
#writeMessage {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid var(--third-color);
  border-radius: 20px;
}
input[type='text']::placeholder {
  color: var(--third-color);
}
#chat {
  height: 75vh;
  display: flex;
  flex-direction: column;
  color: var(--font-color);
}
.chat {
  border: 5px solid var(--secondary-color);
  padding: 2rem;
  border-radius: 30px;
  width: 50%;
  margin-left: 1rem;
}
</style>
