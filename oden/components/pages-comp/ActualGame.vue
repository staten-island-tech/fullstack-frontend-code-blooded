<template>
  <div id="container">
    <WinPg v-show="finish" :winner="winner"></WinPg>
    <div v-show="gamePg">
      <section class="gamepage">
        <!-- huge section of selina's code i tried to replicate to the 80% of my ability -->
        <div class="player-container">
          <div v-for="player in playersEx" :key="player.user" class="players">
            <div class="player-box">
              <h1 class="username">{{ player }}</h1>
              <h1 class="username">uno</h1>
              <!-- <h2 class="cardLeft">{{ player.card }}</h2> -->

              <h1></h1>
            </div>
          </div>
        </div>
        <!-- lisa's poorly replicated bottom row -->
        <div class="cardStack">
          <div class="cardHand">
            <!-- <h2 class="deck-numbers">
            deck: DECK LENGTH | used: 108- THE LENGTH
          </h2> -->

            <div class="cardsBox">
              <div v-for="(card, index) in myHand" :key="card.cardName">
                <img :src="myHandImgs[index]" @click="action(index)" />
              </div>
              <h1>{{ alerted }}</h1>
            </div>
          </div>
          <div class="gameActions">
            <button class="drawACard" @click="doSmth">draw a card</button>
            <!-- <button class="pass">pass</button> -->
          </div>
          <div class="table" @click="showTable">
            <div class="cardOnTable">
              <h2 class="tableLabel">table</h2>
              <div v-show="noTable"><h1>click to show table</h1></div>
              <div v-show="tableShow">
                <img :src="topLink" />
              </div>
            </div>
            <End />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import deck from '@/pages/deck.js'
// import End from '@/components/reg-comp/End.vue'
/* eslint-disable vue/no-unused-components */
import WinPg from '@/components/pages-comp/Win.vue'
export default {
  name: 'ActualGame',
  components: {
    // End,
    WinPg,
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
    deck: {
      type: Array,
      required: true,
    },
    playersEx: {
      type: Array,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    firstCard: {
      type: Object,
      required: true,
    },
    tableFirst: {
      type: Object,
      required: true,
    },
    allFirst: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      remaining: [],

      tableShow: false,
      noTable: true,

      finish: false,
      gamePg: true,

      // starting table is an OBJECT of the INITIAL STARTING CARD DATA
      startingTable: {},
      table: [],
      topLink: '',

      // starting table is an OBJECT of the INITIAL CARD IN UR HAND DATA
      startingHand: {},
      // inc all data
      myHand: [],
      // just the images of the cards in ur hand
      myHandImgs: [],

      // player cards data
      startingFirst: [],
      allPlayers: [],
      notYou: [],

      // ??
      allMoves: [],

      alerted: '',
      winner: '',
    }
  },

  methods: {
    showTable() {
      this.noTable = false
      this.tableShow = true

      this.remaining = this.deck

      // I GOT THE IMAGE LINKKKKK
      this.startingTable = this.tableFirst
      this.table.push(this.startingTable)
      this.topLink = this.table[0].cardImg

      // this is for your hand
      this.startingHand = this.firstCard
      this.myHand.push(this.startingHand)
      this.myHand.forEach((element) => {
        this.myHandImgs.push(element.cardImg)
      })

      // all player card data here
      this.startingFirst = this.allFirst
      this.allPlayers.push(this.startingFirst)

      // testing
      console.log(this.allPlayers[0])
      const holder = this.allPlayers[0]
      const temp = []
      holder.forEach((element) => temp.push(element.user))
      console.log(temp)
      const tempIndex = temp.indexOf(this.username)
      console.log('my username' + this.username)
      console.log('index of my place' + tempIndex)
      if (tempIndex === 0) {
        this.notYou = holder
        this.notYou.shift()
      } else {
        if (this.players.length === 2) {
          this.notYou = holder
          this.notYou.pop()
        } else {
          this.notYou = holder.splice(tempIndex, 1)
        }
        console.log('not u' + this.notYou)
      }

      // all moves
      this.socketInfo.on('newMove', (move) => {
        this.allMoves.push(move)
        console.log(this.allMoves)
        if (this.allMoves.length !== 0) {
          this.finish = true
          this.gamePg = false
          this.socketInfo.emit('ending', this.finish, this.gamePg)
        }
      })

      this.socketInfo.once('done', (win, game) => {
        this.finish = win
        this.gamePg = game
        this.winner = this.allMoves[0].user
        // console.log(this.allMoves[0].user)
        // console.log(this.finish)
        // console.log(this.gamePg)
      })
    },

    goIndex() {
      this.$router.push('/')
    },
    doSmth() {
      const ran = Math.floor(Math.random() * this.remaining.length)
      this.myHand.push(this.remaining[ran])
      console.log(this.remaining[ran])
      const img = this.remaining[ran].cardImg

      this.myHandImgs.push(img)
      console.log(this.myHandImgs)
      this.remaining.splice(ran, 1)
      console.log(this.remaining.length)
    },
    action(index) {
      const myMove = {
        id: new Date().getTime(),
        card: this.myHand[index],
        user: this.username,
      }

      const lastTable = this.table.length - 1
      const color = this.table[lastTable].cardColor
      const number = this.table[lastTable].cardNumber
      // console.log('table no' + number)
      console.log(this.myHand[index].cardColor)
      if (
        this.myHand[index].cardColor === color ||
        this.myHand[index].cardNumber === number ||
        this.myHand[index].cardColor === 'wild'
      ) {
        this.socketInfo.emit('played', myMove)
      } else {
        this.alerted = 'invalid card type'
      }
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
  height: 100%;
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
