<template>
    <div id="container">
      <div class="player player1">
        <h1 class="username">Username</h1>
        <h2 class="cardLeft">Cards in hand</h2>
      </div>
      <div class="player player2"></div>
      <div class="player player3"></div>
      <a href="win">demo</a>
    </div>
</template>
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

  .player{
    background-color: white;
    width: 27vw;
    height: 7.5vh;
  }









  .mdc-typography {
  margin: 0;
}
</style>