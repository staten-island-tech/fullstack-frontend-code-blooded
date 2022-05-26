<template>
  <div class="code-page">
    <ActualGame
      v-show="gameTime"
      :socket-info="socketInfo"
      :code="code"
      :players="players"
      :player-deck="playerDeck"
      :played-cards-pile="playedCardsPile"
      :draw-card-pile="drawCardPile"
      :username="username"
      :players-ex="playersEx"
    ></ActualGame>
    <!-- the waiting room -->
    <div v-show="inRoom" class="hostRoom">
      <button class="help"><a href="rules">?</a></button>
      <div class="options3">
        <div class="row">
          <div class="code">
            <div class="sample">
              <h1 class="code-header">CODE: {{ code }}</h1>
              <Pin></Pin>
            </div>
            <p class="comment">share this with friends for them to join</p>
            <h2 class="whoJoined">
              {{ players.length }} Friends who have joined
            </h2>
            <div class="friend-list">
              <ul v-for="player in players" :key="player" class="list">
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
                <div v-for="message in messages" :key="message.id">
                  <b>{{ message.user }}</b> :{{ message.text }}
                </div>
              </div>
            </div>

            <input
              id="writeMessage"
              v-model="text"
              type="text"
              placeholder="write a message"
              @click="start"
              @keyup.enter="sendMessage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import deck from '../../pages/deck.js'
import Pin from '@/components/reg-comp/Pin.vue'
import ActualGame from '@/components/pages-comp/ActualGame.vue'

export default {
  name: 'Host',
  components: {
    Pin,
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
      playerDeck: [],
      playedCardsPile: [],
      drawCardPile: [],
      playersEx: [],
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

        const myPlayer = this.players.indexOf(this.username)
        const total = this.playerList
        total.splice(myPlayer, 1)
        this.playersEx = total
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
      shuffleArray(array){
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp;
    }   
    return array
    },
    goActualGame() {
      this.gameTime = true
      this.inRoom = false
      const shuffledCards = this.shuffleArray(deck)
      this.playerDeck = shuffledCards.splice(0, 7)
      this.playedCardsPile = shuffledCards.splice(0, 1)
        this.drawCardPile = shuffledCards
        this.socketInfo.emit('startGame', this.gameTime, this.playerDeck, this.playedCardsPile, this.drawCardPile)
        console.log(this.playerDeck.length)
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
