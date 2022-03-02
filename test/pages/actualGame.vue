<template>
    <div id="container">
      <div class="player-container">
        <div v-for="player in playerData" :key=player.id class="players">
          <div class="player-box">
            <h1 class="username">{{player.playerName}}hello</h1>
            <h2 class="cardLeft">{{player.cardData}}</h2>
          </div>
        </div>
      </div>
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
        id:1
      },
      {
        playerName: "placeholder",
        cardData:"x numbers in hand",
        id:2
      },
      {
        playerName: "placeholder",
        cardData:"x numbers in hand",
        id:3,
      },      
    ]


  }
},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
/* VARIABLES */
    :root{
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
    background-color:#0E1555;
    max-width: 100vw;
    height: 100vh;
    font-family: 'Tomorrow', sans-serif;
    margin:0 auto;
    overflow: hidden;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

.player-container{
  height: 40vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
}


  .player-box{
    background-color: white;
    width: 25vw;
    height: 25vh;
    display: flex;
    flex-direction: row;
    border: solid;
    justify-content: space-around;

  }









  .mdc-typography {
  margin: 0;
}

</style>



