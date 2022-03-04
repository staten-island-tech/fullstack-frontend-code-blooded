<template>
    <div id="container">
      <section class="gamepage">
        <div class="player-container">
          <div v-for="player in playerData" :key=player.id class="players">
            <div class="player-box" :style="{borderColor: player.playerColor}">

              <h1 class="username" :style="{backgroundColor: player.playerColor}">{{player.playerName}}</h1>
              <h2 class="cardLeft">{{player.cardData}}</h2>
            </div>
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
        cardData:"x numbers in hand",
        id:1,
        playerColor:"#71D097",
      },
      {
        playerName: "placeholder",
        cardData:"x numbers in hand",
        id:2,
        playerColor: "#49C8FF"
      },
      {
        playerName: "placeholder",
        cardData:"x numbers in hand",
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

  }

  .username{
    width: 10vw;
    padding: 1rem;
    position: relative;
    bottom: 2rem;
    border-radius: 1.5rem;
    color: var(--font-color);
    font-weight: var(--medium-weight);
    text-transform: uppercase;
    overflow: hidden;
  }











</style>



