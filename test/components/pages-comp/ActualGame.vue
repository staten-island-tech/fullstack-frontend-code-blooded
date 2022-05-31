<template>
  <div id="container">
    <section class="gamepage">
      <!-- huge section of selina's code i tried to replicate to the 80% of my ability -->
      <div class="player-container">
        <div v-for="player in playersEx" :key="player" class="players">
          <div class="player-box">
            <h1 class="username">
              {{ player }}
            </h1>
            <h2 class="cardLeft">7 cards in hand</h2>
            <h2 class="cardLeft">{{ remainDeck.length }}</h2>

            <h1></h1>
          </div>
        </div>
      </div>
      <!-- lisa's poorly replicated bottom row -->
      <div class="cardStack">
        <div class="cardHand">
          <h2 class="deck-numbers">
            deck: {{ remainDeck.length }} | used: {{ 108 - remainDeck.length }}
          </h2>
          <div class="middleBox">
            <div class="icon"><h3 class="slash">//</h3></div>
            <div class="time-player">
              <div class="timeRow">
                <h1 class="time sizeLarge">player's name</h1>
                <h1 class="time sizeLarge">has --- seconds left</h1>
              </div>
              <div class="timeRow">
                <h2 class="time sizeSmall">so and so</h2>
                <h2 class="time sizeSmall">is up next</h2>
              </div>
            </div>
          </div>
          <div class="cardsBox">
            <div v-for="(card, index) in hand" :key="card.cardName">
              <img :src="card.cardImg" @click="action(index)" />
            </div>
          </div>
        </div>
        <div class="gameActions">
          <button class="drawACard" @click="doSmth">draw a card</button>
          <button class="pass">pass</button>
        </div>
        <div class="table" @click="showTable">
          <div class="cardOnTable">
            <h2 class="tableLabel">table</h2>
            <div v-show="noTable"><h1>click to show table</h1></div>
            <div v-show="tableShow">
              <img :src="firstCard.cardImg" />
            </div>
          </div>
          <End />
        </div>
      </div>

      <!-- where the other players are displayed -->
      <!--  <div class="player-container">
        <div v-for="player in playerData" :key="player.id" class="players">
          <div class="player-box" :style="{ borderColor: player.playerColor }">
            <h1
              class="username"
              :style="{ backgroundColor: player.playerColor }"
            >
              {{ player.playerName }}
            </h1>
            <h2 class="cardLeft">{{ player.cardData }} cards in hand</h2>
          </div>
        </div>
      </div>
 -->
      <!-- bottom row -->
      <!--  
      <div class="cardStack">
        <div class="cardHand">
          <h2 class="deck-numbers">deck: 93 | used: 18</h2>
          <div class="middleBox">
            <div class="icon"><h3 class="slash">//</h3></div>
            <div class="time-player">
              <div class="timeRow">
                <h1 class="time sizeLarge" :style="{ color: playerColor }">
                  {{ playerName }}
                </h1>
                <h1 class="time sizeLarge">
                  has {{ playerTime }} seconds left
                </h1>
              </div>
              <div class="timeRow">
                <h2 class="time sizeSmall" :style="{ color: nextColor }">
                  {{ playerNext }}
                </h2>
                <h2 class="time sizeSmall">is up next</h2>
              </div>
            </div>
          </div>
          <div class="cardsBox">
          </div>
        </div>
        <div class="gameActions">
          <button class="drawACard" @click="doSmth">draw a card</button>
          <button class="pass">pass</button>
        </div>
        <div class="table">
          <div class="cardOnTable">
            <h2 class="tableLabel">table</h2>
          </div>
          <End />
        </div>
      </div> -->
    </section>
  </div>
</template>

<script>
// import deck from '@/pages/deck.js'
// import End from '@/components/reg-comp/End.vue'
/* eslint-disable vue/no-unused-components */
export default {
  name: 'ActualGame',
  components: {
    // End,
  },
  props: {
    socketInfo: {
      type: Object,
      required: true,
    },
    firstCard: {
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
    playersEx: {
      type: Array,
      required: true,
    },
    myHand: {
      type: Array,
      required: true,
    },
    deck: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      remainDeck: this.deck,
      hand: this.myHand,
      order: this.players,
      table: this.firstCard,

      noTable: true,
      tableShow: false,
      // deck,
      // playerName: 'Vue',
      // playerColor: '#71D097',
      // playerTime: 22,
      // playerNext: 'HTML',
      // nextColor: '#49C8FF',
      // playerData: [
      //   {
      //     playerName: 'placeholder',
      //     cardData: 0,
      //     id: 1,
      //     playerColor: '#71D097',
      //   },
      //   {
      //     playerName: 'placeholder',
      //     cardData: 0,
      //     id: 2,
      //     playerColor: '#49C8FF',
      //   },
      //   {
      //     playerName: 'placeholder',
      //     cardData: 0,
      //     id: 3,
      //     playerColor: '#EE914D',
      //   },
      // ],
    }
  },
  methods: {
    showTable() {
      this.noTable = false
      this.tableShow = true

      this.socketInfo.on('updateNow', (table, order, deck) => {
        this.table = table
        this.order = order
        this.remainDeck = deck
      })
    },
    goIndex() {
      this.$router.push('/')
    },
    doSmth() {
      console.log(this.playersEx)
      console.log(this.deck[0])
      console.log(this.order)
    },
    action(index) {
      const cardIndex = index
      if (this.players[0] === this.username) {
        console.log(index)
        console.log(this.myHand[index])
        this.socketInfo.emit('testing', 'hi')
        console.log(this.players)
        console.log('my username' + this.username)

        this.myTurn(cardIndex)
      } else {
        alert('it is ' + this.players[0] + "'s turn")
      }
    },
    myTurn(cardIndex) {
      const colors = ['blue', 'green', 'yellow', 'red']
      if (colors.includes(this.myHand[cardIndex].cardColor)) {
        console.log('this card is a color')
        if (this.myHand[cardIndex].cardColor === this.firstCard.cardColor) {
          console.log('its a match')
          if (cardIndex === 1) {
            this.table = this.myHand[cardIndex]
            this.hand.slice(1, this.hand.length)
            this.pass()
          } else {
            this.hand.splice(cardIndex, 1)
            this.pass()
          }
          console.log(this.hand)
        }
      } else {
        console.log('not a color')
      }
    },
    pass() {
      const reorder = this.order.splice(0, 1)
      this.order.push(reorder)
      console.log('this is the new order' + this.order)

      this.socketInfo.emit(
        'gameUpdate',
        this.table,
        this.order,
        this.remainDeck
      )
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
/* VARIABLES */
* {
  --background-color: #0e1555;
  --secondary-color: #4e1184;
  --third-color: #932b77;
  --fourth-color: #fd367e;
  --fifth-color: #880000;
  --font-color: #ffff;
  --heavy-weight: 900;
  --medium-weight: 600;
  --thin-weight: 400;
}
/* Common CSS */
#container {
  background-color: var(--background-color);
  max-width: 100vw;
  height: 100vh;
  font-family: 'Tomorrow', sans-serif;
  margin: 0 auto;
  overflow: hidden;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
}
.mdc-typography {
  margin: 0;
}

/* top part of page */
.player-container {
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5rem;
  text-align: center;
}

.player-box {
  background-color: var(--background-color);
  width: 25vw;
  height: 27vh;
  border: solid;
  border-radius: 3rem;
  border-width: 0.4rem;
  color: var(--font-color);
}

.username {
  width: 10vw;
  padding: 1rem;
  position: relative;
  bottom: 2rem;
  border-radius: 1.5rem;
  font-weight: var(--medium-weight);
  text-transform: uppercase;
  overflow: hidden;
}

.cardLeft {
  font-weight: var(--medium-weight);
  transform: translate(0rem, 2.5rem);
  font-size: 2rem;
}
/* Bottom */
.cardStack {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 95vw;
  height: 60vh;
  margin: 0 auto;
}
/* Bottom Top*/
.cardHand {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  width: 40vw;
  color: var(--font-color);
  margin: 0 auto;
}
.middleBox {
  display: flex;
  width: 100%;
  height: 10rem;
}
.timeRow {
  display: flex;
  height: 40%;
  margin-top: -2%;
}
.sizeLarge {
  font-size: 2rem;
}
.sizeSmall {
  font-size: 1.5rem;
}
.icon {
  background-color: #207b00;
  width: 3.5vw;
  height: 8vh;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  border-radius: 50%;
  padding: 0.5rem;
}
.slash {
  position: relative;
  bottom: 30%;
  /* position: absolute; */
}
.cardsBox {
  z-index: 1;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: stretch;
  overflow: auto;
  white-space: nowrap;
  transform: translateY(-100px);
}

.deck-numbers {
  width: 40%;
  left: 0;
  margin: 0;
}

/* Bottom Middle*/
.gameActions {
  display: flex;
  flex-direction: column;

  width: 27vw;
  /* background-color: red; */
}
.drawACard,
.pass {
  width: 75%;
  margin: 0 auto;
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--medium-weight);
  border-radius: 20px;
  margin-top: 1rem;
  color: var(--font-color);
  font-size: 2rem;
  padding: 0.5rem;
  text-transform: uppercase;
}
.drawACard {
  margin-top: 60%;
  background-color: var(--fourth-color);
  border-color: var(--fourth-color);
}
.pass {
  background-color: rgba(147, 43, 119, 1);
  border-color: rgba(147, 43, 119, 1);
}
/* Bottom Right */
.table {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  width: 33vw;
  /* background-color: yellow; */
}
.cardOnTable {
  width: 90%;
  height: 70%;
  border-radius: 2rem;
  border: solid 0.4rem;
  border-color: var(--fourth-color);
  color: var(--fourth-color);
  font-family: 'Tomorrow', sans-serif;
}
.tableLabel {
  font-weight: 600;
  font-size: 2rem;
  margin-top: 1rem;
  letter-spacing: 0.1rem;
}
</style>
