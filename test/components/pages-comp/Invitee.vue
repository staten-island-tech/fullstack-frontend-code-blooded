<template>
  <div class="code-page">
    <button class="help"><a href="rules">?</a></button>
    <div class="options2">
      <div class="row">
        <div class="code">
          <div class="sample">
            <h1 class="code-header">CODE: {{ code }}</h1>
            <Pin></Pin>
          </div>
          <p class="comment">share this with friends for them to join</p>
          <h2 class="whoJoined">Friends who have joined</h2>
          <div class="friend-list">
            <ul class="list" v-for="player in players" :key="player">
              <li>{{ player }}, is playing</li>
              <!-- <li class="friend1 friend">javascript, the host, is playing</li>
              <li class="friend2 friend">vue, the invitee, is playing</li>
              <li class="friend3 friend">css, the invitee, is playing</li>
              <li class="friend4 friend">html, the invitee, is playing</li>
           -->
            </ul>
          </div>
          <div class="buttons">
            <Leave />
          </div>
        </div>
        <div id="chat" class="chat">
          <p class="friend chat">game created</p>
          <p class="friend chat">type a message to access chat</p>
          <span class="space"> </span>

          <!-- here is the chat space i made -->
          <div class="chatList">
            <div class="messages-container">
              <div v-for="message in messages" :key="message.id">
                <b>{{ message.user }}</b> :{{ message.text }}
              </div>
            </div>
            <input
              id="writeMessage"
              v-model="text"
              @click="start"
              v-on:keyup.enter="sendMessage"
              type="text"
              placeholder="write a message"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pin from '@/components/reg-comp/Pin.vue'
import Leave from '@/components/reg-comp/Leave.vue'
export default {
  name: 'Invitee',
  components: {
    Pin,
    Leave,
  },
  props: {
    socketInfo: Object,
    code: String,
    players: Array,
    username: String,
  },
  data() {
    return {
      text: '',
      messages: [],
    }
  },
  methods: {
    start() {
      this.socketInfo.on('message-received', (data) => {
        this.messages = this.messages.concat(data)
      })
    },
    sendMessage() {
      console.log(this.text)
      this.addMessage()
      this.text = ''
    },
    addMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        user: this.username,
      }
      this.socketInfo.emit('message', message, this.code)
    },
    goIndex() {
      this.$router.push('/')
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
/* DISPLAY NONE */
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
