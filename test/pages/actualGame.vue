<template>
    <div id="container">
      <section class="gamepage">
        <div class="player-container">
          <div v-for="player in playerData" :key=player.id class="players">
            <div class="player-box" :style="{borderColor: player.playerColor}">

              <h1 class="username" :style="{backgroundColor: player.playerColor}">{{player.playerName}}</h1>
              <h2 class="cardLeft">{{player.cardData}} cards in hand</h2>
            </div>
          </div>
        </div>
        <div class="cardStack">
          <div class="cardHand">
            <h2 class="deck-numbers">deck: 93 | used: 18</h2>
            <div class="middleBox">
              <div class="icon"><h3 class="slash">//</h3></div>
              <div class="time-player">
                <div class="timeRow">
                  <h1 class="time sizeLarge" :style="{color: playerColor}">{{playerName}} </h1>
                  <h1 class="time sizeLarge"> has {{playerTime}} seconds left</h1>
                </div>
                <div class="timeRow">
                  <h2 class="time sizeSmall" :style="{color: nextColor}">{{playerNext}}</h2>
                  <h2 class="time sizeSmall"> is up next</h2>
                </div>
              </div>
            </div>
            <div class="cardsBox">
                {{allCards.cardImg}}
            </div>
          </div>
          <div class="gameActions">
            <button class="drawACard">draw a card</button>
            <button class="pass">pass</button>
          </div>
          <div class="table">
            <div class="cardOnTable">
              <h2 class="tableLabel">table</h2>
            </div>
            <End/>
          </div>
        </div>
        
      </section>
      
    </div>

</template>

<script>
// eslint-disable import/no-named-as-default-member 
// eslint-disable prefer-const  
// eslint-disable import/no-named-as-default 
import io from 'socket.io-client'
import queryString from 'query-string'

// import * as randomCodeGenerator from '@/utils/randomCodeGenerator.js'
import useSound from 'use-sound'

import bgMusic from '../assets/sounds/game-bg-music.mp3'
import unoSound from '../assets/sounds/uno-sound.mp3'
import shufflingSound from '../assets/sounds/shuffling-cards-1.mp3'
import skipCardSound from '../assets/sounds/skip-sound.mp3'
import draw2CardSound from '../assets/sounds/draw2-sound.mp3'
import wildCardSound from '../assets/sounds/wild-sound.mp3'
import draw4CardSound from '../assets/sounds/draw4-sound.mp3'
import gameOverSound from '../assets/sounds/game-over-sound.mp3'
import allCards from '@/utils/allCards.js'
import * as shuffleArray from '@/utils/shuffleArray.js'
import End from '@/components/End.vue';

export default {
  name: 'ActualGame',
 components: {
      End
    },
    setup(){
      const [playBBgMusic, { pause }] = useSound(bgMusic, { loop: true })
    const [playUnoSound] = useSound(unoSound)
    const [playShufflingSound] = useSound(shufflingSound)
    const [playSkipCardSound] = useSound(skipCardSound)
    const [playDraw2CardSound] = useSound(draw2CardSound)
    const [playWildCardSound] = useSound(wildCardSound)
    const [playDraw4CardSound] = useSound(draw4CardSound)
    const [playGameOverSound] = useSound(gameOverSound)

},
data(){
  return{
    allCards,
    ENDPOINT: 'http://localhost:3000',
    data: queryString.parse(location.search),
    // room: this.data.roomCode,
    roomFull: false,
    user: [],
    currentUser: '',
    message:'',
    messages: [],
    gameOver: true,
    winner: '',
    turn: '',
    player1Deck: [],
    player2Deck: [],
    player3Deck: [],
    player4Deck: [],
    currentColor: '',
    currentNumber: '',
    playedCardsPile: [],
    drawCardPile: [],
    isChatBoxHidden: true,
    isUnoButtonPressed: false,
    isSoundMuted: false,
    isMusicMuted: true,

  }
},
  mounted:{
      shuffle: ()=>{
        let socket
        // shuffle PACK_OF_CARDS array
        const shuffledCards = shuffleArray(allCards)

        // extract first 7 elements to player1Deck
        const player1Deck = shuffledCards.splice(0, 7)

        // extract first 7 elements to player2Deck
        const player2Deck = shuffledCards.splice(0, 7)

        const player3Deck = shuffledCards.splice(0, 7)

        const player4Deck = shuffledCards.splice(0, 7)

        // extract random card from shuffledCards and check if its not an action card
        let startingCardIndex
        while(true) {
            startingCardIndex = Math.floor(Math.random() * 94)
            if(shuffledCards[startingCardIndex]==='skipR' || shuffledCards[startingCardIndex]==='_R' || shuffledCards[startingCardIndex]==='D2R' ||
            shuffledCards[startingCardIndex]==='skipG' || shuffledCards[startingCardIndex]==='_G' || shuffledCards[startingCardIndex]==='D2G' ||
            shuffledCards[startingCardIndex]==='skipB' || shuffledCards[startingCardIndex]==='_B' || shuffledCards[startingCardIndex]==='D2B' ||
            shuffledCards[startingCardIndex]==='skipY' || shuffledCards[startingCardIndex]==='_Y' || shuffledCards[startingCardIndex]==='D2Y' ||
            shuffledCards[startingCardIndex]==='W' || shuffledCards[startingCardIndex]==='D4W') {
                continue;
            }
            else
                break;
        }

        // extract the card from that startingCardIndex into the playedCardsPile
        const playedCardsPile = shuffledCards.splice(startingCardIndex, 1)

        // store all remaining cards into drawCardPile
        const drawCardPile = shuffledCards

        // send initial state to server
        socket.emit('initGameState', {
            gameOver: false,
            turn: 'Player 1',
            player1Deck: [...player1Deck],
            player2Deck: [...player2Deck],
            player3Deck: [...player3Deck],
            player4Deck: [...player4Deck],
            currentColor: playedCardsPile[0].charAt(1),
            currentNumber: playedCardsPile[0].charAt(0),
            playedCardsPile: [...playedCardsPile],
            drawCardPile: [...drawCardPile]
        })
    },
      },
methods:{
  connection: ()=>{
    let socket
    const connectionOptions =  {
            "forceNew" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        }
        // eslint-disable-next-line prefer-const
        socket = io.connect(this.ENDPOINT, connectionOptions)

        socket.emit('join', {room: this.room}, (error) => {
            if(error)
                this.search = true
        })

        // cleanup on component unmount
        return function cleanup() {
            socket.emit('disconnect')
            // shut down connnection instance
            socket.off()
        }
    },
    communication: () => {
      let socket
        socket.on('initGameState', ({ gameOver, turn, player1Deck, player2Deck, player4Deck, player3Deck, currentColor, currentNumber, playedCardsPile, drawCardPile }) => {
            this.gameOver = gameOver
            this.turn = turn
            this.player1Deck = player1Deck 
            this.player2Deck = player2Deck
            this.player3Deck = player3Deck 
            this.player4Deck = player4Deck
            this.currentColor = currentColor
            this.currentNumber = currentNumber
            this.playedCardsPile = playedCardsPile
            this.drawCardPile = drawCardPile
        })

        socket.on('updateGameState', ({ gameOver, winner, turn, player1Deck, player2Deck, currentColor, currentNumber, playedCardsPile, drawCardPile }) => {
            gameOver && this.gameOver 
            gameOver===true && playGameOverSound()
            winner && setWinner(winner)
            turn && setTurn(turn)
            player1Deck && setPlayer1Deck(player1Deck)
            player2Deck && setPlayer2Deck(player2Deck)
            currentColor && setCurrentColor(currentColor)
            currentNumber && setCurrentNumber(currentNumber)
            playedCardsPile && setPlayedCardsPile(playedCardsPile)
            drawCardPile && setDrawCardPile(drawCardPile)
            setUnoButtonPressed(false)
        })

        socket.on("roomData", ({ users }) => {
            this.users = users
        })

        socket.on('currentUserData', ({ name }) => {
            this.name = name
        })

        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ])

            const chatBody = document.querySelector('.chat-body')
            chatBody.scrollTop = chatBody.scrollHeight
        })
    },
  },
      /* methods: {
      goIndex() {
        this.$router.push('/');
      },
    }, */
    };
  
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
/* VARIABLES */
    *{
     --background-color:#0E1555;
     --secondary-color:#4E1184;
     --third-color:#932B77;
     --fourth-color:#FD367E;
     --fifth-color:#880000;
     --font-color:#ffff;
     --heavy-weight:900;
     --medium-weight:600;
     --thin-weight:400;
    }
/* Common CSS */
  #container{
    background-color:var(--background-color);
    max-width: 100vw;
    height: 100vh;
    font-family: 'Tomorrow', sans-serif;
    margin:0 auto;
    overflow: hidden;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  .mdc-typography {
  margin: 0;
}

/* top part of page */
.player-container{
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5rem;
  text-align: center;
}

  .player-box{
    background-color: var(--background-color);
    width: 25vw;
    height: 27vh;
    border: solid;
    border-radius: 3rem;
    border-width: 0.4rem;
        color: var(--font-color);

  }

  .username{
    width: 10vw;
    padding: 1rem;
    position: relative;
    bottom: 2rem;
    border-radius: 1.5rem;
    font-weight: var(--medium-weight);
    text-transform: uppercase;
    overflow: hidden;
  }

  .cardLeft{
    font-weight: var(--medium-weight); 
    transform: translate(0rem, 2.5rem);
    font-size: 2rem;
  }
  /* Bottom */
  .cardStack{
    display:flex;
    justify-content: center;
    text-align: center;
    width:95vw;
    height:60vh;
    margin:0 auto; 
  }
/* Bottom Top*/
.cardHand{
    display:flex;
    flex-direction:column;
    text-transform: uppercase;
    width:40vw;
    color:var(--font-color);
    margin:0 auto;
  } 
  .middleBox{
    display: flex;
    width:100%;
    height:10rem;
  }
  .timeRow{
    display: flex;
        height: 40%;
    margin-top: -2%;
  }
  .sizeLarge{
    font-size: 2rem;
  }
  .sizeSmall{
    font-size: 1.5rem;
  }
  .icon{
    background-color: #207B00;
    width: 3.5vw;
    height:8vh;;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    border-radius: 50%;
    padding:.5rem;
    
  }
  .slash{
    position:relative;
    bottom:30%;
    /* position: absolute; */
  }
  .cardsBox{
    width:100%;
    height:60%;
  }

  .deck-numbers{
    width:40%;
    left: 0;
    margin: 0;
  } 

/* Bottom Middle*/
  .gameActions{
    display:flex;
    flex-direction:column;
    
    width:27vw;
    /* background-color: red; */
  }
  .drawACard,
  .pass{
    width:75%;
    margin:0 auto;
    font-family: 'Tomorrow', sans-serif;
    font-weight:var(--medium-weight);
    border-radius: 20px;
    margin-top:1rem;
    color:var(--font-color);
    font-size:2rem;
    padding:.5rem;
    text-transform: uppercase;
  }
  .drawACard{
    margin-top:60%;
    background-color: var(--fourth-color);
    border-color: var(--fourth-color);
  }
  .pass{
    background-color: rgba(147, 43, 119, 1);
     border-color: rgba(147, 43, 119, 1);
  }
/* Bottom Right */
.table{
    display:flex;
    flex-direction:column;
    text-transform: uppercase;
    width:33vw;
    /* background-color: yellow; */
  }
  .cardOnTable{
    width:90%;
    height:70%;
    border-radius: 2rem;
    border:solid .4rem;
    border-color:var(--fourth-color);
    color:var(--fourth-color);
    font-family: 'Tomorrow', sans-serif;
  }
  .tableLabel{
    font-weight:600;
    font-size:2rem;
    margin-top:1rem;
    letter-spacing:.1rem;
  }


</style>



