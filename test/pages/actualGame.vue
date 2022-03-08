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
            <h2 class="deck-numbers"></h2>
            <div class="//icon"></div>
            <h1 class="time"></h1>
            <h2 class="next-player"></h2>
            <div class="cards"></div>
            
          </div>
          <div class="gameActions">
            <button class="drawACard">draw a card</button>
            <button class="pass">pass</button>
          </div>
          <div class="table">
            <div class="cardOnTable">
              <h2 class="tableLabel">table</h2>
            </div>
            <button class="exitGame" @click="goIndex">END GAME</button>
          </div>
        </div>
        
      </section>
      
    </div>

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
  methods: {
      goIndex() {
        this.$router.push('/');
      },
    }
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
    width:100vw;
    height:60vh;
  }
/* Bottom*/
.cardHand{
    display:flex;
    flex-direction:column;
    text-transform: uppercase;
    width:40vw;
  }
/* Bottom Middle */
  .gameActions{
    display:flex;
    flex-direction:column;
    
    width:27vw;
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
.exitGame{
  background-color: var(--fifth-color);
  color: var(--font-color);
  border-color: var(--fifth-color);
  font-family: 'Tomorrow', sans-serif;
    font-weight:var(--medium-weight);
    border-radius: 15px;
  font-size:1.7rem;
    padding:.5rem;
    text-transform: uppercase;
    bottom:0;
    right:0;
    position:absolute;
}








</style>



