<template>
  <div  id="container">
    <section class="gamepage">
      <!-- huge section of selina's code i tried to replicate to the 80% of my ability -->
      <div class="player-container">
        <div v-for="player in playersEx" :key="player" class="players">
          <div class="player-box">
            <h1 class="username">
              {{ player }}
            </h1>

            <div v-for="card in player2Deck" :key="card.id" class="p1d">
            <button  @click="onCardPlayedHandler(card)"><img :src="card.cardImg"></button>
          </div>
          </div>
        </div>
      </div>

      <!-- bottome row i think -->
      <div class="cardStack">
        <div class="cardHand">
          <h2 class="deck-numbers">deck: 93 | used: 18</h2>
          <div class="middleBox">
            <div class="icon"><h3 class="slash">//</h3></div>
            <div class="time-player">
              <div class="timeRow">
                <h1 class="time sizeLarge">--</h1>
                <h1 class="time sizeLarge">has -- seconds left</h1>
              </div>
              <div class="timeRow">
                <h2 class="time sizeSmall">--</h2>
                <h2 class="time sizeSmall">is up next</h2>
              </div>
            </div>
          </div>
          <div class="cardsBox"></div>
        </div>
        <div class="gameActions">
          <button class="drawACard" @click="startGame">Shuffle</button>
          <button class="pass" @click="onCardDrawnHandler">Draw Card</button>
          <button class="pass">Uno</button>
        </div>
        <div class="table">
          <div class="cardOnTable">
            <h2 class="tableLabel">table</h2>
            <div v-for="drawn in drawCardPile" :key="drawn.id" class="dcp">
                <img :src="drawn.cardImg">
            </div>
            <div v-for="tia in playedCardsPile" :key="tia.id">
                <img :src="tia.cardImg">
            </div>
          </div>
          <End />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import deck from '@/pages/deck.js';
import End from '@/components/reg-comp/End.vue'
export default {
  name: 'ActualVGame',
  components: {
    End,
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
    playersEx: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      deck,
      gameOver: true,
      winner: '',
      turn: '',
      player1Deck: [],
      player2Deck: [],
      currentColor:'',
      currentNumber: '',
      playedCardsPile: [],
      drawCardPile: [],
      isUnoButtonPressed: false,
    }
  },
  methods: {
    goIndex() {
      this.$router.push('/')
    },
    checkGameOver(arr) {
        return arr.length === 1
    },
    checkWinner(arr, player) {
        return arr.length === 1 ? player : ''
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
    startGame() { 
      const shuffledCards = this.shuffleArray(deck)
      this.player1Deck = shuffledCards.splice(0, 7)
      this.player2Deck = shuffledCards.splice(0, 7)
      let startingCardIndex
        while(true) {
            startingCardIndex = Math.floor(Math.random() * 94)
            if(shuffledCards[startingCardIndex].cardName ==='skipR' || shuffledCards[startingCardIndex].cardName ==='_R' || shuffledCards[startingCardIndex].cardName==='D2R' ||
            shuffledCards[startingCardIndex].cardName ==='skipG' || shuffledCards[startingCardIndex].cardName ==='_G' || shuffledCards[startingCardIndex].cardName ==='D2G' ||
            shuffledCards[startingCardIndex].cardName ==='skipB' || shuffledCards[startingCardIndex].cardName ==='_B' || shuffledCards[startingCardIndex].cardName ==='D2B' ||
            shuffledCards[startingCardIndex].cardName ==='skipY' || shuffledCards[startingCardIndex].cardName ==='_Y' || shuffledCards[startingCardIndex].cardName ==='D2Y' ||
            shuffledCards[startingCardIndex].cardName ==='W' || shuffledCards[startingCardIndex].cardName ==='D4W') {
                continue;
            }
            else
                break;
        }
        this.playedCardsPile = shuffledCards.splice(startingCardIndex, 1)
        this.drawCardPile = shuffledCards
              this.socketInfo.emit('initGameState', {
            gameOver: false,
            turn: 'Player 1',
            player1Deck: [...this.player1Deck],
            player2Deck: [...this.player2Deck],
            currentColor: this.playedCardsPile[0].cardColor,
            currentNumber: this.playedCardsPile[0].cardNumber,
            playedCardsPile: [...this.playedCardsPile],
            drawCardPile: [...this.drawCardPile]
        })
    },
    onCardPlayedHandler(playedCard){
      const cardPlayedBy = this.turn
     switch(playedCard) {
            // if card played was a number card
            case '0R': case '1R': case '2R': case '3R': case '4R': case '5R': case '6R': case '7R': case '8R': case '9R': case '_R': case '0G': case '1G': case '2G': case '3G': case '4G': case '5G': case '6G': case '7G': case '8G': case '9G': case '_G': case '0B': case '1B': case '2B': case '3B': case '4B': case '5B': case '6B': case '7B': case '8B': case '9B': case '_B': case '0Y': case '1Y': case '2Y': case '3Y': case '4Y': case '5Y': case '6Y': case '7Y': case '8Y': case '9Y': case '_Y': {
                // extract number and color of played card
                const numberOfPlayedCard = playedCard.cardNumber
                const colorOfPlayedCard = playedCard.cardColor
                // check for color match
                if(this.currentColor === colorOfPlayedCard) {
                    console.log('colors matched!')
                    // check who played the card and return new state accordingly
                    if(cardPlayedBy === 'Player 1') {
                        //  remove the played card from player1's deck and add it to playedCardsPile (immutably)
                        // then update turn, currentColor and currentNumber
                        const removeIndex = this.player1Deck.indexOf(playedCard)
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player1Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // make a copy of drawCardPile array
                            const copiedDrawCardPileArray = [...this.drawCardPile]
                            // pull out last two elements from it
                            const drawCard1 = copiedDrawCardPileArray.pop()
                            const drawCard2 = copiedDrawCardPileArray.pop()
                            const updatedPlayer1Deck = [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)]
                            updatedPlayer1Deck.push(drawCard1)
                            updatedPlayer1Deck.push(drawCard2)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                turn: 'Player 2',
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...updatedPlayer1Deck],
                                currentColor: colorOfPlayedCard,
                                currentNumber: numberOfPlayedCard,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                turn: 'Player 2',
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: numberOfPlayedCard
                            })
                        }
                    }
                    else {
                        // remove the played card from player2's deck and add it to playedCardsPile (immutably)
                        // then update turn, currentColor and currentNumber
                        const removeIndex = this.player2Deck.indexOf(playedCard)
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player2Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // make a copy of drawCardPile array
                            const copiedDrawCardPileArray = [...this.drawCardPile]
                            // pull out last two elements from it
                            const drawCard1 = copiedDrawCardPileArray.pop()
                            const drawCard2 = copiedDrawCardPileArray.pop()
                            const updatedPlayer2Deck = [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)]
                            updatedPlayer2Deck.push(drawCard1)
                            updatedPlayer2Deck.push(drawCard2)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 2'),
                                turn: 'Player 1',
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...updatedPlayer2Deck],
                                currentColor: colorOfPlayedCard,
                                currentNumber: numberOfPlayedCard,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 2'),
                                turn: 'Player 1',
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: numberOfPlayedCard
                            })
                        }
                    }
                }
                // check for number match
                else if(this.currentNumber === numberOfPlayedCard) {
                    console.log('numbers matched!')
                    // check who played the card and return new state accordingly
                    if(cardPlayedBy === 'Player 1') {
                        // remove the played card from player1's deck and add it to playedCardsPile (immutably)
                        // then update turn, currentColor and currentNumber
                        const removeIndex = this.player1Deck.indexOf(playedCard)
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player1Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // make a copy of drawCardPile array
                            const copiedDrawCardPileArray = [...this.drawCardPile]
                            // pull out last two elements from it
                            const drawCard1 = copiedDrawCardPileArray.pop()
                            const drawCard2 = copiedDrawCardPileArray.pop()
                            const updatedPlayer1Deck = [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)]
                            updatedPlayer1Deck.push(drawCard1)
                            updatedPlayer1Deck.push(drawCard2)
                            // send new state to server
                            this.socket.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                turn: 'Player 2',
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...updatedPlayer1Deck],
                                currentColor: colorOfPlayedCard,
                                currentNumber: numberOfPlayedCard,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                turn: 'Player 2',
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: numberOfPlayedCard
                            })
                        }
                    }
                    else {
                        // remove the played card from player2's deck and add it to playedCardsPile (immutably)
                        // then update turn, currentColor and currentNumber
                        const removeIndex = this.player2Deck.indexOf(playedCard)
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player2Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // make a copy of drawCardPile array
                            const copiedDrawCardPileArray = [...this.drawCardPile]
                            // pull out last two elements from it
                            const drawCard1 = copiedDrawCardPileArray.pop()
                            const drawCard2 = copiedDrawCardPileArray.pop()
                            const updatedPlayer2Deck = [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)]
                            updatedPlayer2Deck.push(drawCard1)
                            updatedPlayer2Deck.push(drawCard2)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 2'),
                                turn: 'Player 1',
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...updatedPlayer2Deck],
                                currentColor: colorOfPlayedCard,
                                currentNumber: numberOfPlayedCard,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 2'),
                                turn: 'Player 1',
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: numberOfPlayedCard
                            })
                        }
                    }
                }
                // if no color or number match, invalid move - do not update state
                else {
                    alert('Invalid Move!')
                }
                break;
            }
            // if card played was a skip card
            case 'skipR': case 'skipG': case 'skipB': case 'skipY': {
                // extract color of played skip card
                const colorOfPlayedCard = playedCard.cardColor
                // check for color match
                if(this.currentColor === colorOfPlayedCard) {
                    console.log('colors matched!')
                    // check who played the card and return new state accordingly
                    if(cardPlayedBy === 'Player 1') {
                        // remove the played card from player1's deck and add it to playedCardsPile (immutably)
                        // then update currentColor and currentNumber
                        const removeIndex = this.player1Deck.indexOf(playedCard)
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player1Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // make a copy of drawCardPile array
                            const copiedDrawCardPileArray = [...this.drawCardPile]
                            // pull out last two elements from it
                            const drawCard1 = copiedDrawCardPileArray.pop()
                            const drawCard2 = copiedDrawCardPileArray.pop()
                            const updatedPlayer1Deck = [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)]
                            updatedPlayer1Deck.push(drawCard1)
                            updatedPlayer1Deck.push(drawCard2)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...updatedPlayer1Deck],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 404,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 404
                            })
                        }
                    }
                    else {
                        // remove the played card from player2's deck and add it to playedCardsPile (immutably)
                        // then update currentColor and currentNumber
                        const removeIndex = this.player2Deck.indexOf(playedCard)
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player2Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // make a copy of drawCardPile array
                            const copiedDrawCardPileArray = [...this.drawCardPile]
                            // pull out last two elements from it
                            const drawCard1 = copiedDrawCardPileArray.pop()
                            const drawCard2 = copiedDrawCardPileArray.pop()
                            const updatedPlayer2Deck = [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)]
                            updatedPlayer2Deck.push(drawCard1)
                            updatedPlayer2Deck.push(drawCard2)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 2'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...updatedPlayer2Deck],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 404,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 2'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 404
                            })
                        }
                    }
                }
                // check for number match - if skip card played on skip card
                else if(this.currentNumber === 404) {
                    console.log('Numbers matched!')
                    // check who played the card and return new state accordingly
                    if(cardPlayedBy === 'Player 1') {
                        // remove the played card from player1's deck and add it to playedCardsPile (immutably)
                        // then update currentColor and currentNumber - turn will remain same
                        const removeIndex = this.player1Deck.indexOf(playedCard)
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player1Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // make a copy of drawCardPile array
                            const copiedDrawCardPileArray = [...this.drawCardPile]
                            // pull out last two elements from it
                            const drawCard1 = copiedDrawCardPileArray.pop()
                            const drawCard2 = copiedDrawCardPileArray.pop()
                            const updatedPlayer1Deck = [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)]
                            updatedPlayer1Deck.push(drawCard1)
                            updatedPlayer1Deck.push(drawCard2)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...updatedPlayer1Deck],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 404,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 404
                            })
                        }
                    }
                    else {
                        // remove the played card from player2's deck and add it to playedCardsPile (immutably)
                        // then update currentColor and currentNumber - turn will remain same
                        const removeIndex = this.player2Deck.indexOf(playedCard)
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player2Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // make a copy of drawCardPile array
                            const copiedDrawCardPileArray = [...this.drawCardPile]
                            // pull out last two elements from it
                            const drawCard1 = copiedDrawCardPileArray.pop()
                            const drawCard2 = copiedDrawCardPileArray.pop()
                            const updatedPlayer2Deck = [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)]
                            updatedPlayer2Deck.push(drawCard1)
                            updatedPlayer2Deck.push(drawCard2)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 2'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...updatedPlayer2Deck],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 404,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 2'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 404
                            })
                        }
                    }
                }
                // if no color or number match, invalid move - do not update state
                else {
                    alert('Invalid Move!')
                }
                break;
            }
            // if card played was a draw 2 card
            case 'D2R': case 'D2G': case 'D2B': case 'D2Y': {
                // extract color of played skip card
                const colorOfPlayedCard = playedCard.cardColor
                // check for color match
                if(this.currentColor === colorOfPlayedCard) {
                    console.log('colors matched!')
                    // check who played the card and return new state accordingly
                    if(cardPlayedBy === 'Player 1') {
                        // remove the played card from player1's deck and add it to playedCardsPile (immutably)
                        // remove 2 new cards from drawCardPile and add them to player2's deck (immutably)
                        // then update currentColor and currentNumber - turn will remain same
                        const removeIndex = this.player1Deck.indexOf(playedCard)
                        // make a copy of drawCardPile array
                        const copiedDrawCardPileArray = [...this.drawCardPile]
                        // pull out last two elements from it
                        const drawCard1 = copiedDrawCardPileArray.pop()
                        const drawCard2 = copiedDrawCardPileArray.pop()
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player1Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // pull out last two elements from drawCardPile
                            const drawCard1X = copiedDrawCardPileArray.pop()
                            const drawCard2X = copiedDrawCardPileArray.pop()
                            const updatedPlayer1Deck = [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)]
                            updatedPlayer1Deck.push(drawCard1X)
                            updatedPlayer1Deck.push(drawCard2X)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...updatedPlayer1Deck],
                                player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard1, drawCard2, ...this.player2Deck.slice(this.player2Deck.length)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 252,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)],
                                player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard1, drawCard2, ...this.player2Deck.slice(this.player2Deck.length)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 252,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                    }
                    else {
                        // remove the played card from player2's deck and add it to playedCardsPile (immutably)
                        // remove 2 new cards from drawCardPile and add them to player1's deck (immutably)
                        // then update currentColor and currentNumber - turn will remain same
                        const removeIndex = this.player2Deck.indexOf(playedCard)
                        // make a copy of drawCardPile array
                        const copiedDrawCardPileArray = [...this.drawCardPile]
                        // pull out last two elements from it
                        const drawCard1 = copiedDrawCardPileArray.pop()
                        const drawCard2 = copiedDrawCardPileArray.pop()
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player2Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // pull out last two elements from drawCardPile
                            const drawCard1X = copiedDrawCardPileArray.pop()
                            const drawCard2X = copiedDrawCardPileArray.pop()
                            const updatedPlayer2Deck = [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)]
                            updatedPlayer2Deck.push(drawCard1X)
                            updatedPlayer2Deck.push(drawCard2X)
                            // send new state to server
                            this.socket.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...updatedPlayer2Deck],
                                player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, ...this.player1Deck.slice(this.player1Deck.length)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 252,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                                player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, ...this.player1Deck.slice(this.player1Deck.length)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 252,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                    }
                }
                // check for number match - if draw 2 card played on draw 2 card
                else if(this.currentNumber === 252) {                        
                    console.log('number matched!')
                    // check who played the card and return new state accordingly
                    if(cardPlayedBy === 'Player 1') {
                        // remove the played card from player1's deck and add it to playedCardsPile (immutably)
                        // remove 2 new cards from drawCardPile and add them to player2's deck (immutably)
                        // then update currentColor and currentNumber - turn will remain same
                        const removeIndex = this.player1Deck.indexOf(playedCard)
                        // make a copy of drawCardPile array
                        const copiedDrawCardPileArray = [...this.drawCardPile]
                        // pull out last two elements from it
                        const drawCard1 = copiedDrawCardPileArray.pop()
                        const drawCard2 = copiedDrawCardPileArray.pop()
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player1Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // pull out last two elements from drawCardPile
                            const drawCard1X = copiedDrawCardPileArray.pop()
                            const drawCard2X = copiedDrawCardPileArray.pop()
                            const updatedPlayer1Deck = [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)]
                            updatedPlayer1Deck.push(drawCard1X)
                            updatedPlayer1Deck.push(drawCard2X)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...updatedPlayer1Deck],
                                player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard1, drawCard2, ...this.player2Deck.slice(this.player2Deck.length)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 252,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player1Deck),
                                winner: this.checkWinner(this.player1Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player1Deck: [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)],
                                player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard1, drawCard2, ...this.player2Deck.slice(this.player2Deck.length)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 252,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                    }
                    else {
                        // remove the played card from player2's deck and add it to playedCardsPile (immutably)
                        // remove 2 new cards from drawCardPile and add them to player1's deck (immutably)
                        // then update currentColor and currentNumber - turn will remain same
                        const removeIndex = this.player2Deck.indexOf(playedCard)
                        // make a copy of drawCardPile array
                        const copiedDrawCardPileArray = [...this.drawCardPile]
                        // pull out last two elements from it
                        const drawCard1 = copiedDrawCardPileArray.pop()
                        const drawCard2 = copiedDrawCardPileArray.pop()
                        // if two cards remaining check if player pressed UNO button
                        // if not pressed add 2 cards as penalty
                        if(this.player2Deck.length===2 && !this.isUnoButtonPressed) {
                            alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                            // pull out last two elements from drawCardPile
                            const drawCard1X = copiedDrawCardPileArray.pop()
                            const drawCard2X = copiedDrawCardPileArray.pop()
                            const updatedPlayer2Deck = [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)]
                            updatedPlayer2Deck.push(drawCard1X)
                            updatedPlayer2Deck.push(drawCard2X)
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...updatedPlayer2Deck],
                                player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, ...this.player1Deck.slice(this.player1Deck.length)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 252,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                        else {
                            // send new state to server
                            this.socketInfo.emit('updateGameState', {
                                gameOver: this.checkGameOver(this.player2Deck),
                                winner: this.checkWinner(this.player2Deck, 'Player 1'),
                                playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                                player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                                player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, ...this.player1Deck.slice(this.player1Deck.length)],
                                currentColor: colorOfPlayedCard,
                                currentNumber: 252,
                                drawCardPile: [...copiedDrawCardPileArray]
                            })
                        }
                    }
                }
                // if no color or number match, invalid move - do not update state
                else {
                    alert('Invalid Move!')
                }
                break;
            }
            // if card played was a wild card
            case 'W': {
                // check who played the card and return new state accordingly
                if(cardPlayedBy === 'Player 1') {
                    // ask for new color
                    const newColor = prompt('Enter first letter of new color (R/G/B/Y)').toUpperCase()
                    // remove the played card from player1's deck and add it to playedCardsPile (immutably)
                    const removeIndex = this.player1Deck.indexOf(playedCard)
                    // then update turn, currentColor and currentNumber
                    // if two cards remaining check if player pressed UNO button
                    // if not pressed add 2 cards as penalty
                    if(this.player1Deck.length===2 && !this.isUnoButtonPressed) {
                        alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                        // make a copy of drawCardPile array
                        const copiedDrawCardPileArray = [...this.drawCardPile]
                        // pull out last two elements from it
                        const drawCard1 = copiedDrawCardPileArray.pop()
                        const drawCard2 = copiedDrawCardPileArray.pop()
                        const updatedPlayer1Deck = [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)]
                        updatedPlayer1Deck.push(drawCard1)
                        updatedPlayer1Deck.push(drawCard2)
                        // send new state to server
                        this.socketInfo.emit('updateGameState', {
                            gameOver: this.checkGameOver(this.player1Deck),
                            winner: this.checkWinner(this.player1Deck, 'Player 1'),
                            turn: 'Player 2',
                            playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                            player1Deck: [...updatedPlayer1Deck],
                            currentColor: newColor,
                            currentNumber: 300,
                            drawCardPile: [...copiedDrawCardPileArray]
                        })
                    }
                    else {
                        // send new state to server
                        this.socketInfo.emit('updateGameState', {
                            gameOver: this.checkGameOver(this.player1Deck),
                            winner: this.checkWinner(this.player1Deck, 'Player 1'),
                            turn: 'Player 2',
                            playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                            player1Deck: [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)],
                            currentColor: newColor,
                            currentNumber: 300
                        })
                    }
                }
                else {
                    // ask for new color
                    const newColor = prompt('Enter first letter of new color (R/G/B/Y)').toUpperCase()
                    // remove the played card from player2's deck and add it to playedCardsPile (immutably)
                    const removeIndex = this.player2Deck.indexOf(playedCard)
                    // then update turn, currentColor and currentNumber
                    // if two cards remaining check if player pressed UNO button
                    // if not pressed add 2 cards as penalty
                    if(this.player2Deck.length===2 && !this.isUnoButtonPressed) {
                        alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                        // make a copy of drawCardPile array
                        const copiedDrawCardPileArray = [...this.drawCardPile]
                        // pull out last two elements from it
                        const drawCard1 = copiedDrawCardPileArray.pop()
                        const drawCard2 = copiedDrawCardPileArray.pop()
                        const updatedPlayer2Deck = [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)]
                        updatedPlayer2Deck.push(drawCard1)
                        updatedPlayer2Deck.push(drawCard2)
                        // send new state to server
                        this.socketInfo.emit('updateGameState', {
                            gameOver: this.checkGameOver(this.player2Deck),
                            winner: this.checkWinner(this.player2Deck, 'Player 2'),
                            turn: 'Player 1',
                            playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                            player2Deck: [...updatedPlayer2Deck],
                            currentColor: newColor,
                            currentNumber: 300,
                            drawCardPile: [...copiedDrawCardPileArray]
                        })
                    }
                    else {
                        // send new state to server
                        this.socketInfo.emit('updateGameState', {
                            gameOver: this.checkGameOver(this.player2Deck),
                            winner: this.checkWinner(this.player2Deck, 'Player 2'),
                            turn: 'Player 1',
                            playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                            player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                            currentColor: newColor,
                            currentNumber: 300
                        })
                    }
                }
                break;
            }
            // if card played was a draw four wild card
            // eslint-disable-next-line no-lone-blocks
            case 'D4W': {
                // check who played the card and return new state accordingly
                if(cardPlayedBy === 'Player 1') {
                    // ask for new color
                    const newColor = prompt('Enter first letter of new color (R/G/B/Y)').toUpperCase()
                    // remove the played card from player1's deck and add it to playedCardsPile (immutably)
                    const removeIndex = this.player1Deck.indexOf(playedCard)
                    // remove 2 new cards from drawCardPile and add them to player2's deck (immutably)
                    // make a copy of drawCardPile array
                    const copiedDrawCardPileArray = [...this.drawCardPile]
                    // pull out last four elements from it
                    const drawCard1 = copiedDrawCardPileArray.pop()
                    const drawCard2 = copiedDrawCardPileArray.pop()
                    const drawCard3 = copiedDrawCardPileArray.pop()
                    const drawCard4 = copiedDrawCardPileArray.pop()
                    // then update currentColor and currentNumber - turn will remain same
                    // if two cards remaining check if player pressed UNO button
                    // if not pressed add 2 cards as penalty
                    if(this.player1Deck.length===2 && !this.isUnoButtonPressed) {
                        alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                        // pull out last two elements from drawCardPile
                        const drawCard1X = copiedDrawCardPileArray.pop()
                        const drawCard2X = copiedDrawCardPileArray.pop()
                        const updatedPlayer1Deck = [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)]
                        updatedPlayer1Deck.push(drawCard1X)
                        updatedPlayer1Deck.push(drawCard2X)
                        // send new state to server
                        this.socketInfo.emit('updateGameState', {
                            gameOver: this.checkGameOver(this.player1Deck),
                            winner: this.checkWinner(this.player1Deck, 'Player 1'),
                            playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                            player1Deck: [...updatedPlayer1Deck],
                            player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard1, drawCard2, drawCard3, drawCard4, ...this.player2Deck.slice(this.player2Deck.length)],
                            currentColor: newColor,
                            currentNumber: 600,
                            drawCardPile: [...copiedDrawCardPileArray]
                        })
                    }
                    else {
                        // send new state to server
                        this.socketInfo.emit('updateGameState', {
                            gameOver: this.checkGameOver(this.player1Deck),
                            winner: this.checkWinner(this.player1Deck, 'Player 1'),
                            playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                            player1Deck: [...this.player1Deck.slice(0, removeIndex), ...this.player1Deck.slice(removeIndex + 1)],
                            player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard1, drawCard2, drawCard3, drawCard4, ...this.player2Deck.slice(this.player2Deck.length)],
                            currentColor: newColor,
                            currentNumber: 600,
                            drawCardPile: [...copiedDrawCardPileArray]
                        })
                    }
                }
                else {
                    // ask for new color
                    const newColor = prompt('Enter first letter of new color (R/G/B/Y)').toUpperCase()
                    // remove the played card from player2's deck and add it to playedCardsPile (immutably)
                    const removeIndex = this.player2Deck.indexOf(playedCard)
                    // remove 2 new cards from drawCardPile and add them to player1's deck (immutably)
                    // make a copy of drawCardPile array
                    const copiedDrawCardPileArray = [...this.drawCardPile]
                    // pull out last four elements from it
                    const drawCard1 = copiedDrawCardPileArray.pop()
                    const drawCard2 = copiedDrawCardPileArray.pop()
                    const drawCard3 = copiedDrawCardPileArray.pop()
                    const drawCard4 = copiedDrawCardPileArray.pop()
                    // then update currentColor and currentNumber - turn will remain same
                    // send new state to server
                    this.socketInfo.emit('updateGameState', {
                        gameOver: this.checkGameOver(this.player2Deck),
                        winner: this.checkWinner(this.player2Deck, 'Player 2'),
                        playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                        player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                        player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, drawCard3, drawCard4, ...this.player1Deck.slice(this.player1Deck.length)],
                        currentColor: newColor,
                        currentNumber: 600,
                        drawCardPile: [...copiedDrawCardPileArray]
                    })
                    // if two cards remaining check if player pressed UNO button
                    // if not pressed add 2 cards as penalty
                    if(this.player2Deck.length===2 && !this.isUnoButtonPressed) {
                        alert('Oops! You forgot to press UNO. You drew 2 cards as penalty.')
                        // pull out last two elements from drawCardPile
                        const drawCard1X = copiedDrawCardPileArray.pop()
                        const drawCard2X = copiedDrawCardPileArray.pop()
                        const updatedPlayer2Deck = [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)]
                        updatedPlayer2Deck.push(drawCard1X)
                        updatedPlayer2Deck.push(drawCard2X)
                        // send new state to server
                        this.socketInfo.emit('updateGameState', {
                            gameOver: this.checkGameOver(this.player2Deck),
                            winner: this.checkWinner(this.player2Deck, 'Player 2'),
                            playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                            player2Deck: [...updatedPlayer2Deck],
                            player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, drawCard3, drawCard4, ...this.player1Deck.slice(this.player1Deck.length)],
                            currentColor: newColor,
                            currentNumber: 600,
                            drawCardPile: [...copiedDrawCardPileArray]
                        })
                    }
                    else {
                        // send new state to server
                        this.socketInfo.emit('updateGameState', {
                            gameOver: this.checkGameOver(this.player2Deck),
                            winner: this.checkWinner(this.player2Deck, 'Player 2'),
                            playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), playedCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                            player2Deck: [...this.player2Deck.slice(0, removeIndex), ...this.player2Deck.slice(removeIndex + 1)],
                            player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, drawCard3, drawCard4, ...this.player1Deck.slice(this.player1Deck.length)],
                            currentColor: newColor,
                            currentNumber: 600,
                            drawCardPile: [...copiedDrawCardPileArray]
                        })
                    }
                }
            }
            break;
        }
    },
    onCardDrawnHandler(){
       const cardDrawnBy = this.turn
       if(cardDrawnBy === 'Player 1') {
            // remove 1 new card from drawCardPile and add it to player1's deck (immutably)
            // make a copy of drawCardPile array
            const copiedDrawCardPileArray = [...this.drawCardPile]
            // pull out last element from it
            const drawCard = copiedDrawCardPileArray.pop()
            // extract number and color of drawn card
            const colorOfDrawnCard = drawCard.cardColor
            const numberOfDrawnCard = drawCard.cardNumber
            if(colorOfDrawnCard === this.currentColor && (drawCard === 'skipR' || drawCard === 'skipG' || drawCard === 'skipB' || drawCard === 'skipY')) {
                alert(`You drew ${drawCard}. It was played for you.`)
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    currentColor: colorOfDrawnCard,
                    currentNumber: 404,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            else if(colorOfDrawnCard === this.currentColor && (drawCard === 'D2R' || drawCard === 'D2G' || drawCard === 'D2B' || drawCard === 'D2Y')) {
                alert(`You drew ${drawCard}. It was played for you.`)
                // remove 2 new cards from drawCardPile and add them to player2's deck (immutably)
                // make a copy of drawCardPile array
                const copiedDrawCardPileArray = [...this.drawCardPile]
                // pull out last two elements from it
                const drawCard1 = copiedDrawCardPileArray.pop()
                const drawCard2 = copiedDrawCardPileArray.pop()
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard1, drawCard2, ...this.player2Deck.slice(this.player2Deck.length)],
                    currentColor: colorOfDrawnCard,
                    currentNumber: 252,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            else if(drawCard === 'W') {
                alert(`You drew ${drawCard}. It was played for you.`)
                // ask for new color
                const newColor = prompt('Enter first letter of new color (R/G/B/Y)').toUpperCase()
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    turn: 'Player 2',
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    currentColor: newColor,
                    currentNumber: 300,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            else if(drawCard === 'D4W') {
                alert(`You drew ${drawCard}. It was played for you.`)
                // ask for new color
                const newColor = prompt('Enter first letter of new color (R/G/B/Y)').toUpperCase()
                // remove 2 new cards from drawCardPile and add them to player2's deck (immutably)
                // make a copy of drawCardPile array
                const copiedDrawCardPileArray = [...this.drawCardPile]
                // pull out last four elements from it
                const drawCard1 = copiedDrawCardPileArray.pop()
                const drawCard2 = copiedDrawCardPileArray.pop()
                const drawCard3 = copiedDrawCardPileArray.pop()
                const drawCard4 = copiedDrawCardPileArray.pop()
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard1, drawCard2, drawCard3, drawCard4, ...this.player2Deck.slice(this.player2Deck.length)],
                    currentColor: newColor,
                    currentNumber: 600,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            // if not action card - check if drawn card is playable
            else if(numberOfDrawnCard === this.currentNumber || colorOfDrawnCard === this.currentColor) {
                alert(`You drew ${drawCard}. It was played for you.`)
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    turn: 'Player 2',
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    currentColor: colorOfDrawnCard,
                    currentNumber: numberOfDrawnCard,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            // else add the drawn card to player1's deck
            else {
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    turn: 'Player 2',
                    player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard, ...this.player1Deck.slice(this.player1Deck.length)],
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
        }
        else {
            // remove 1 new card from drawCardPile and add it to player2's deck (immutably)
            // make a copy of drawCardPile array
            const copiedDrawCardPileArray = [...this.drawCardPile]
            // pull out last element from it
            const drawCard = copiedDrawCardPileArray.pop()
            // extract number and color of drawn card
            const colorOfDrawnCard = drawCard.cardColor
            const numberOfDrawnCard = drawCard.cardNumber
            if(colorOfDrawnCard === this.currentColor && (drawCard === 'skipR' || drawCard === 'skipG' || drawCard === 'skipB' || drawCard === 'skipY')) {
                alert(`You drew ${drawCard}. It was played for you.`)
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    currentColor: colorOfDrawnCard,
                    currentNumber: 404,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            else if(colorOfDrawnCard === this.currentColor && (drawCard === 'D2R' || drawCard === 'D2G' || drawCard === 'D2B' || drawCard === 'D2Y')) {
                alert(`You drew ${drawCard}. It was played for you.`)
                // remove 2 new cards from drawCardPile and add them to player1's deck (immutably)
                // make a copy of drawCardPile array
                const copiedDrawCardPileArray = [...this.drawCardPile]
                // pull out last two elements from it
                const drawCard1 = copiedDrawCardPileArray.pop()
                const drawCard2 = copiedDrawCardPileArray.pop()
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, ...this.player1Deck.slice(this.player1Deck.length)],
                    currentColor: colorOfDrawnCard,
                    currentNumber: 252,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            else if(drawCard === 'W') {
                alert(`You drew ${drawCard}. It was played for you.`)
                // ask for new color
                const newColor = prompt('Enter first letter of new color (R/G/B/Y)').toUpperCase()
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    turn: 'Player 1',
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    currentColor: newColor,
                    currentNumber: 300,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            else if(drawCard === 'D4W') {
                alert(`You drew ${drawCard}. It was played for you.`)
                // ask for new color
                const newColor = prompt('Enter first letter of new color (R/G/B/Y)').toUpperCase()
                // remove 2 new cards from drawCardPile and add them to player1's deck (immutably)
                // make a copy of drawCardPile array
                const copiedDrawCardPileArray = [...this.drawCardPile]
                // pull out last four elements from it
                const drawCard1 = copiedDrawCardPileArray.pop()
                const drawCard2 = copiedDrawCardPileArray.pop()
                const drawCard3 = copiedDrawCardPileArray.pop()
                const drawCard4 = copiedDrawCardPileArray.pop()
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    player1Deck: [...this.player1Deck.slice(0, this.player1Deck.length), drawCard1, drawCard2, drawCard3, drawCard4, ...this.player1Deck.slice(this.player1Deck.length)],
                    currentColor: newColor,
                    currentNumber: 600,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            // if not action card - check if drawn card is playable
            else if(numberOfDrawnCard === this.currentNumber || colorOfDrawnCard === this.currentColor) {
                alert(`You drew ${drawCard}. It was played for you.`)
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    turn: 'Player 1',
                    playedCardsPile: [...this.playedCardsPile.slice(0, this.playedCardsPile.length), drawCard, ...this.playedCardsPile.slice(this.playedCardsPile.length)],
                    currentColor: colorOfDrawnCard,
                    currentNumber: numberOfDrawnCard,
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
            // else add the drawn card to player2's deck
            else {
                // send new state to server
                this.socketInfo.emit('updateGameState', {
                    turn: 'Player 1',
                    player2Deck: [...this.player2Deck.slice(0, this.player2Deck.length), drawCard, ...this.player2Deck.slice(this.player2Deck.length)],
                    drawCardPile: [...copiedDrawCardPileArray]
                })
            }
        }
    }
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
  border-color: red;
  border-radius: 3rem;
  border-width: 0.4rem;
  color: var(--font-color);
}

.username {
  background-color: red;
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
  color: red;
}
.sizeSmall {
  font-size: 1.5rem;
  color: red;
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
  width: 100%;
  height: 60%;
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
