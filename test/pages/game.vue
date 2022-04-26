<template>
  <!-- waiting room when u start the game urself -->
  <div class="code-page">
    <button class="help"><a href="rules">?</a></button>
    <div class="options3">
      <div class="row">
        <div class="code">
          <div class="sample">
            <h1 class="code-header" @click="getCode">CODE: {{ newCode }}</h1>
            <Pin></Pin>
          </div>
          <p class="comment">share this with friends for them to join</p>
          <h2 class="whoJoined">Friends who have joined</h2>
          <div class="friend-list">
            <ul class="list">
              <li class="friend1 friend">javascript, the host, is playing</li>
              <li class="friend2 friend">vue, the invitee, is playing</li>
              <li class="friend3 friend">css, the invitee, is playing</li>
              <li class="friend4 friend">html, the invitee, is playing</li>
            </ul>
          </div>
          <div class="buttons">
            <button class="start3" @click="goActualGame">START GAME</button>
            <button class="delete3" @click="goWelcomeBack">DELETE GAME</button>
          </div>
        </div>
        <div id="chat" class="chat">
          <p class="friend chat">game created</p>
          <span class="space"> </span>
          <input id="writeMessage" type="text" placeholder="write a message" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import io from 'socket.io-client'
import Pin from '@/components/Pin.vue'

export default {
  components: {
    Pin,
  },
  data() {
    return {
      newCode: '',
    }
  },
  methods: {
    getCode() {
      this.socketInstance = io('http://localhost:3001')
      this.socketInstance.on('myCode', (arg) => {
        this.newCode = arg
        return this.newCode
      })
    },
    goActualGame() {
      this.$router.push('/actualGame')
    },
    goWelcomeBack() {
      this.$router.push('/welcomeBack')
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
* {
  --background-color: #0e1555;
  --secondary-color: #4e1184;
  --third-color: #932b77;
  --fourth-color: #fd367e;
  --font-color: #ffff;
  --heavy-weight: 900;
  --medium-weight: 600;
  --thin-weight: 400;
}
.hide {
  display: none;
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
.options3 {
  display: flex;
  flex-direction: row;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.code {
  width: 40vw;
}

.comment {
  color: var(--third-color);
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--heavy-weight);
  font-size: 1.5rem;
}
.options3 {
  display: flex;
  flex-direction: column;
  width: 90vw;
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
.start3,
.delete3 {
  border-radius: 35px;
  width: 70%;
  font-size: 3rem;
  margin-top: 1rem;
}
#game-input {
  border-color: var(--fourth-color);
  border-width: 0.3rem;
  color: var(--font-color);
  font-size: 3.5rem;
  border-radius: 26px;
  width: 40%;
  font-size: 2rem;
  margin-top: 1rem;
  background-color: var(--background-color);
  padding: 0.5rem;
  color: var(--font-color);
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--thin-weight);
}

.start3 {
  background-color: var(--fourth-color);
  color: var(--background-color);
  font-size: 3rem;
  border-color: var(--fourth-color);
  padding: 0.5rem;
}
.delete3 {
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
  align-self: flex-end;
}
input[type='text']::placeholder {
  color: var(--third-color);
}
#chat {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--font-color);
}
.chat {
  border: 5px solid var(--secondary-color);
  padding: 2rem;
  border-radius: 30px;
  width: 40%;
  margin-left: 1rem;
}
</style>
