<template>
  <div class="code-page">
    <ActualGame
      v-show="gameTime"
      :socketInfo="socketInfo"
      :code="code"
      :players="players"
      :username="username"
      :playersEx="playersEx"
      :myHand="myHand"
    ></ActualGame>
    <!-- the waiting room -->
    <div class="hostRoom" v-show="inRoom">
      <div class="options3">
        <div class="row">
          <div class="code">
            <div class="sample">
              <h1 class="code-header">CODE: {{ code }}</h1>
            </div>
            <p class="comment">share this with friends for them to join</p>
            <h2 class="whoJoined">
              {{ players.length }} Friends who have joined
            </h2>
            <div class="friend-list">
              <ul class="list" v-for="player in players" :key="player">
                <li>{{ player }}, is playing</li>
                <!-- <li class="friend1 friend">javascript, the host, is playing</li>
              <li class="friend2 friend">vue, the invitee, is playing</li>
              <li class="friend3 friend">css, the invitee, is playing</li>
              <li class="friend4 friend">html, the invitee, is playing</li> -->
              </ul>
            </div>
            <div class="buttons">
              <button class="start3" @click="goActualGame">START GAME</button>
              <button class="delete3" @click="goWelcomeBack">
                DELETE GAME
              </button>
            </div>
          </div>
          <div id="chat" class="chat">
            <p class="friend chat">game created</p>
            <p class="friend chat">confirm your presence with a message</p>
            <span class="space"> </span>

            <!-- here is the chat space i made -->
            <div class="chatList">
              <div class="messages-container">
                <!-- check this out -->
                <div v-for="message in messages" :key="message.id" class="messageBox">
                  <b>{{ message.user }}</b> :  {{ message.text }}
                <div v-for="message in messages" :key="message.id">
                  <b>{{ message.user }}</b> : {{ message.text }}
                </div>
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
import deck from '@/pages/deck.js'
import ActualGame from '@/components/pages-comp/ActualGame.vue'

export default {
  name: 'Host',
  components: {
    ActualGame,
  },
  props: {
    socketInfo: {
      type: Object,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    players: {
      type: Array,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      deck,
      text: '',
      messages: [],
      gameTime: false,
      inRoom: true,
      playerList: [],
      playersEx: [],
      myHand: [],
    }
  },
  methods: {
    start() {
      this.socketInfo.on('newMessage', (message, playerList) => {
        this.playerList = playerList
        console.log('theres are playrs' + this.playerList)
        if (this.messages.includes(message)) {
          console.log('message added')
        } else {
          this.messages = this.messages.concat(message)
          console.log(this.messages)
        }
      })

      this.socketInfo.on('startNow', (status) => {
        this.gameTime = status
        this.inRoom = false

        this.playersEx = this.players.slice(1, this.players.length)
        console.log(this.playersEx)
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
      this.socketInfo.emit('myMessage', message, this.code)
    },
    goActualGame() {
      this.gameTime = true
      this.inRoom = false

      this.socketInfo.emit('startGame', this.gameTime)

      this.deal()
    },
    deal() {
      for (let i = 0; i < 7; i++) {
        const ran = Math.floor(Math.random() * 109)
        this.myHand.push(deck[ran])
      }
      console.log(this.myHand)
    },
    goWelcomeBack() {
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
  align-items: center;
  justify-content: center;
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
  justify-content: center;
  margin: 0 auto;
}

.code{
  width:80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  width: 100vw;
  height: 90%;
  margin: 0 auto;
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
  width: 20%;
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
  padding: 2rem;
   border-radius: 30px;
}
.chatList {
  overflow-y: scroll;
  overflow-wrap: break-word;
}
::-webkit-scrollbar {
  width: 1px;
}
.chat {
  border: 5px solid var(--secondary-color);
  width: 40%;
  margin-left: 1rem;
}
.friend{
  padding: .5rem;
   border-radius: 10px;
   border-width: 2px;
}
</style>
