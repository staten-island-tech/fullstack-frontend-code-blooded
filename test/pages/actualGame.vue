<template>
  <div id="container">
    <section class="gamepage">
      <div class="player-container">
        <div v-for="player in playerData" :key="player.id" class="players">
          <div class="player-box" :style="{ borderColor: player.playerColor }">
            <h1
              class="username"
              :style="{ backgroundColor: player.playerColor }"
            >
              {{ player.playerName }}
            </h1>
            <!-- <ul>
  <li v-for="index in 7" :key="index">
    {{ deck.deck[index].cardName }}
  </li>
</ul> -->
            <h2 class="cardLeft">{{ player.cardData }} cards in hand</h2>
            
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
                </h2>5
                <h2 class="time sizeSmall">is up next</h2>
              </div>
            </div>
          </div>
        </div>
      
        <div v-if="deck.deck.length" class="gameActions">
          <button class="drawACard" @click="drawCard">
              draw a card
            </button>
            <button class="pass">pass</button>
          <div v-if="drawnCard" >
            <div class="cardsBox">
              <img :src="drawnCard.cardImg">
            </div>
        </div>
        <div v-else>
          <h1>No More Cards</h1>
          <button>Reshuffle</button>
        </div>
        </div>
        <div class="table">
          <div class="cardOnTable">
            <h2 class="tableLabel">table</h2>
            <div v-for="tia in 7" :key="tia">
              <div>{{deck.deck[tia].cardName}}</div>
            </div>
          </div>
          <End />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import deck from '@/deck/deck.js'
import End from '@/components/End.vue'
import VueCookies from 'vue-cookies'
const socket = io({autoConnect: false});
socket.on('connect', requestRoom);
socket.on('responseRoom', function (name) {
  if (name != 'error') {
    room = name;
    console.log('<< Room Response: ' + name);
  } else {
    socket.disconnect();
    alert('Rooms are full! Try again later');
  }
});
socket.on('countDown', function(countDown) {
  console.log('Im confused');
});
socket.on('turnPlayer', function(data) {
  if (data == socket.id) {
    turn = true;
    console.log('<< Your turn');
  } else {
    turn = false;
    console.log('<< Not your turn');
  }
})

socket.on('haveCard', function(nums) {
  hand = nums;
  for (let i = 0; i < hand.length; i++) {
    console.log('<< Have card: ' + hand[i]);
  }
});
  socket.on('disconnecting', function() {
    room = Object.keys(io.sockets.adapter.sids[socket.id])[1];
    if (room !== undefined) {
      clearInterval(data[room]['timeout']['id']);
      io.to(room).emit('playerDisconnect', room);
      console.log('>> ' + room + ': Player ' + socket.playerName + ' ('+
                  socket.id + ') leaves the room');
    }
  });

  socket.on('disconnect', function() {
    console.log('>> Player ' + socket.playerName + ' ('+
                socket.id + ') disconnected');
  });
  socket.on('playerDisconnect', function() {
  console.log('<< Player disconnected in ' + room);
});
socket.on('drawCard', function(res) {
	let numPlayer = data[res[1]]['turn'];
	let idPlayer = data[res[1]]['players'][numPlayer]['id'];
	let namePlayer = data[res[1]]['players']['name'];
	let handPlayer = data[res[1]]['players'][numPlayer]['hand'];
	let deck = data[res[1]]['deck'];
	if (idPlayer == socket.id) {
		let card = parseInt(deck.shift());
		handPlayer.push(card);
      io.to(idPlayer).emit('haveCard', handPlayer);
      //deck.push(card);
      // TODO: Check playable card
      //Next turn
      numPlayer = Math.abs(numPlayer + (-1) ** data[res[1]]['reverse']) % data[res[1]]['people'];
      data[res[1]]['turn'] = numPlayer;
      io.to(res[1]).emit('turnPlayer', data[res[1]]['players'][numPlayer]['id']);
    }
  });
  socket.on('playCard', function(res) {
    let numPlayer = data[res[1]]['turn'];
    let idPlayer = data[res[1]]['players'][numPlayer]['id'];
    let namePlayer = data[res[1]]['players']['name'];
    let handPlayer = data[res[1]]['players'][numPlayer]['hand'];
    let deck = data[res[1]]['deck'];
    if (idPlayer == socket.id) {
      let playedColor = cardColor(res[0]);
      let playedNumber = res[0] % 14;
      let boardColor = cardColor(data[res[1]]['cardOnBoard']);
      let boardNumber = data[res[1]]['cardOnBoard'] % 14;
      if (playedColor == 'black' || playedColor == boardColor || playedNumber == boardNumber) {
        // Play card
        io.to(res[1]).emit('sendCard', res[0]);
        data[res[1]]['cardOnBoard'] = res[0];
        // Remove card
        let cardPos = handPlayer.indexOf(res[0]);
        if (cardPos > -1) {
          handPlayer.splice(cardPos, 1);
        }
        io.to(idPlayer).emit('haveCard', handPlayer);
        // Next turn
        let skip = 0;
        if (cardType(res[0]) == 'Skip') {
          skip += 1;
        } else if (cardType(res[0]) == 'Reverse') {
          data[res[1]]['reverse'] = (data[res[1]]['reverse'] + 1) % 2;
        } else if (cardType(res[0]) == 'Draw2') {
          skip += 1;
          //draw2
        } else if (cardType(res[0]) == 'Draw4') {
          skip += 1;
          //draw4
        }
        numPlayer = Math.abs(numPlayer + (-1) ** data[res[1]]['reverse'] * (1 + skip)) % data[res[1]]['people'];
        data[res[1]]['turn'] = numPlayer;
        io.to(res[1]).emit('turnPlayer', data[res[1]]['players'][numPlayer]['id']);
      }
    }
    socket.on('haveCard', function(nums) {
  hand = nums;
  
  for (let i = 0; i < hand.length; i++) {
  
    console.log('<< Have card: ' + hand[i]);
  }
});
socket.on('sendCard', function(num) {
  console.log('Im done with life');
})
export default {
  name: 'ActualGame',
  components: {
    End,
  },
  data() {
    return {
      deck,
      drawnCard: undefined,
      room,
      hand = [],
      turn,
      playerName,
    }
  },
  mounted:{
    init(){
      playerName = getCookie('playerName');
  if (playerName == null) {
    playerName = prompt('Enter your name: ', 'Guest');
    if (playerName == null || playerName == "") {
      playerName = 'Guest';
    }
    setCookie('playerName', playerName, 24 * 3600);
  }
​
  socket.connect();
},
requestRoom() {
  socket.emit('requestRoom', playerName);
  room = 0;
  hand = [];
  turn = false;
  console.log('>> Room Request');
},
    },
startGame(name) {
  console.log('>> ' + name + ': Requesting game...');
  let people;
  try {
    people = io.sockets.adapter.rooms[name].length;
  } catch (e) {
    console.log('>> ' + name + ': No people here...');
    return;
  }
  if (people >= 2) {
    console.log('>> ' + name + ': Starting');
    let sockets_ids = Object.keys(io.sockets.adapter.rooms[name].sockets);
    for (let i = 0; i < people; i++) {
      data[name]['players'][i]['id'] = sockets_ids[i];
      let playerName = io.sockets.sockets[sockets_ids[i]].playerName;
      data[name]['players'][i]['name'] = playerName;
      console.log('>> ' + name + ': ' + playerName +
                ' (' + sockets_ids[i] + ') is Player ' + i);
    }
​
    data[name]['people'] = people;
        let newDeck = [...deck];
    shuffle(newDeck);
    data[name]['deck'] = newDeck;
    console.log('>> ' + name + ': Shuffling deck');
}
},
  created:{
setCookie(name, value, seconds){
 /*  this.$cookie.set("keyName", keyValue, "expiring time") */
  let date = new Date();
  date.setTime(date.getTime() + (seconds * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  },
  getCookie(name) {
  name += "=";
  let cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
},
onConnection(socket) {
​
  /**
   * Whenever a room is requested, looks for a slot for the player,
   * up to 10 players in a room, maxRooms and started games are respected.
   * @method
   * @param {String} playerName Player name
   * @return responseRoom with the name of the room, otherwise error.
   */
  socket.on('requestRoom', function(playerName) {
    socket.playerName = playerName;
    for (let i = 1; i <= numRooms; i++) {
      let name = 'Room_' + i;
      let people;
      try {
        people = io.sockets.adapter.rooms[name].length;
      } catch (e) {
        people = 0;
      }
      if (people < maxPeople && data[name]['timeout']['s'] > 0) {
        socket.join(name);
        console.log('>> User ' + socket.playerName +
        ' connected on ' + name + ' (' + (people + 1) + '/' + maxPeople + ')');
        io.to(socket.id).emit('responseRoom', name);
        if (people + 1 >= 2) {
          clearInterval(data[name]['timeout']['id']);
          data[name]['timeout']['s'] = 4;
          data[name]['timeout']['id'] = setInterval(function() {
            startingCountdown(name);
          }, 1000);
        }
        return;
      }
    }
    io.to(socket.id).emit('responseRoom', 'error');
    console.log('>> Rooms exceeded');
  });
  },
  startingCountdown(name) {
  let countDown = data[name]['timeout']['s']--;
  io.to(name).emit('countDown', countDown);
  console.log('>> ' + name + ': Starting in ' + countDown);
  if (countDown <= 0) {
    clearInterval(data[name]['timeout']['id']);
    startGame(name);
  }
},
cardScore(num) {
  let points;
  switch (num % 14) {
    case 10: //Skip
    case 11: //Reverse
    case 12: //Draw 2
      points = 20;
      break;
    case 13: //Wild or Wild Draw 4
      points = 50;
      break;
    default:
      points = num % 14;
      break;
  }
  return points;
},
dealerTurn(name){
  let scores = new Array(people);
do {
	console.log('>> ' + name + ': Deciding dealer');
  	for (let i = 0, card = 0, score = 0; i < people; i++) {
  	card = parseInt(newDeck.shift());
  		newDeck.push(card);
      score = cardScore(card);
      console.log('>> ' + name + ': Player ' + i + ' draws ' + cardType(card) + ' ' + cardColor(card) + ' and gets ' + score + ' points');
       scores[i] = score;
   }
} while (new Set(scores).size !== scores.length);
​
let dealer = scores.indexOf(Math.max(...scores));
console.log('>> ' + name + ': The dealer is Player ' + dealer);
for (let i = 0, card = 0; i < people * 7; i++) {
	let player = (i + dealer + 1) % people;
	card = parseInt(newDeck.shift());
	data[name]['players'][player]['hand'].push(card);
	console.log('>> ' + name + ': Player ' + player + ' draws ' + cardType(card) + ' ' + cardColor(card));
}
let cardOnBoard;
do {
	cardOnBoard = parseInt(newDeck.shift());
	console.log('>> ' + name + ': Card on board ' + 					cardType(cardOnBoard) + ' ' + cardColor(cardOnBoard));
	if (cardColor(cardOnBoard) == 'black') {
		newDeck.push(cardOnBoard);
		console.log('>> ' + name + ': Replacing for another 				card');
	} else {
		break;
	}
} while (true);
data[name]['cardOnBoard'] = cardOnBoard;
data[name]['turn'] = (dealer + 1) % people;
data[name]['reverse'] = 0;
if (cardType(cardOnBoard) == 'Draw2') {
	card = parseInt(newDeck.shift());
	data[name]['players'][(data[name]['turn'])]['hand'].push(card);
	console.log('>> ' + name + ': Player ' + (dealer + 1 % people) + ' draws ' + cardType(card) + ' ' + cardColor(card));
	card = parseInt(newDeck.shift());
	data[name]['players'][(data[name]['turn'])]['hand'].push(card);
	console.log('>> ' + name + ': Player ' + (dealer + 1 % people) + ' draws ' + cardType(card) + ' ' + cardColor(card));
	data[name]['turn'] = (dealer + 2) % people;
} else if (cardType(cardOnBoard) == 'Reverse') {
	data[name]['turn'] = Math.abs(dealer - 1) % people;
	data[name]['reverse'] = 1;
} else if (cardType(cardOnBoard) == 'Skip') {
  data[name]['turn'] = (dealer + 2) % people;
}
for (let i = 0; i < people; i++) {
	io.to(data[name]['players'][i]['id']).emit('haveCard', data[name]['players'][i]['hand']);
}
io.to(name).emit('turnPlayer', data[name]['players'][(data[name]['turn'])]['id']);
io.to(name).emit('sendCard', data[name]['cardOnBoard']);
}
  },
  methods: {
    goIndex() {
      this.$router.push('/')
    },
    /* deal() {
      this.deck = deck;
      const randomDeal = Math.floor(Math.random() * deck.length);
      /*       console.log(this.deck);
      console.log(this.playerHand); 
      console.log(randomDeal);
    }, */
    drawCard() {
      if (this.deck.deck.length > 0) {
        const randIndex = Math.floor(Math.random() * this.deck.deck.length)
        this.drawnCard = this.deck.deck.splice(randIndex, 1)[0]

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
.shuffle,
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
.shuffle {
  background-color: rgba(147, 43, 119, 1);
  border-color: rgba(147, 43, 119, 1);
}
.drawACard {
  margin-top: 10%;
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
