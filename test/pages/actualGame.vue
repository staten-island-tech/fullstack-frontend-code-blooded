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
            
          </div>
          <div class="gameActions">
            <button class="drawACard">draw a card</button>
            <button class="pass">pass</button>
          </div>
          <div class="table">

          </div>
        </div>
      </section>
        <!-- <div class="player2"></div>
        <div class="player3"></div> -->
      <a href="win">demo</a>
    </div>


              <!-- <div v-for="card in cards" :key="card.id" class="card-examples">
            <div class="card-name">{{card.cardName}}</div>
            <img :src="card.cardImage" alt="no">
            <p class="card-description">{{card.cardDescription}}</p>
          </div> -->
</template>

<script>
export default {
  name: 'actualGame',

data(){
  return{
    playerData:[
      {
        playerName: "placeholder",
        cardData:0,
        id:1,
        playerColor:"#71D097",
      },
      {
        playerName: "placeholder",
        cardData:0,
        id:2,
        playerColor: "#49C8FF"
      },
      {
        playerName: "placeholder",
        cardData:0,
        id:3,
        playerColor: "#EE914D"
      },      
    ]


  }
},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
/* VARIABLES */
    *{
     --background-color:#0E1555;
     --secondary-color:#4E1184;
     --third-color:#932B77;
     --fourth-color:#FD367E;
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
  /* Bottom */
  .cardStack{
    display:flex;
    justify-content: center;
    text-align: center;
    width:100vw;
    height:60vh;
  }
/* Bottom*/
.cardHand{
    display:flex;
    flex-direction:column;
    text-transform: uppercase;
    width:33.33vw;
  }
/* Bottom Middle */
  .gameActions{
    display:flex;
    flex-direction:column;
    text-transform: uppercase;
    width:33.33vw;
  }
  .drawACard,
  .pass{
    width:70%;
    margin:0 auto;
    font-family: 'Tomorrow', sans-serif;
    font-weight:var(--medium-weight);
    border-radius: 35px;
    margin-top:1rem;
    background-color: var(--fourth-color);
    color:var(--font-color);
    font-size:3rem;
    border-color: var(--fourth-color);
    padding:.5rem;
  }
/* Bottom Right */
.table{
    display:flex;
    flex-direction:column;
    text-transform: uppercase;
    width:33.33vw;
  }









</style>



