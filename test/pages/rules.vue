<template>
  <div>
      <div class="container">
        <h1 class="h1-container">How to Play</h1>
        <section class="rules-container"> Welcome один brought by Coded-Blooded! 
           This web app allows you to play UNO, the popular real-time card game designed by Merle Robbins in 1971
           <a href="https://en.wikipedia.org/wiki/Uno_(card_game)#:~:text=History%20The%20game%20was%20originally%20developed%20in%201971,local%20businesses%20began%20to%20sell%20it%20as%20well.">(Wikipedia)</a>. 
           The game is a race to be the first person to play the very last card in your hand. and the computer will handle all the details of dealing cards and keeping score.

If you haven't played before, don't worry! We'll explain the rules below.</section>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0E1555;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.h1-container{
    background-color: #FD367E;
    color: white;
    margin: 5rem 0rem 7rem;
    padding: 1.1rem 5rem .8rem;
    border-radius: 1rem;
}

.rules-container{
    background-image: linear-gradient(#932B77,#0E1555);
    height: 100vh;
    border-radius: 1rem;
    width: 55vw;
}
</style>