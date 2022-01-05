<template>
  <div>
      <div class="container">
        <h1 class="h1-container">How to Play</h1>
        <section class="rules-container"> Welcome to один brought by Code-Blooded! 
           This web app allows you to play UNO, the popular real-time card game designed by Merle Robbins in 1971
           <a href="https://en.wikipedia.org/wiki/Uno_(card_game)#:~:text=History%20The%20game%20was%20originally%20developed%20in%201971,local%20businesses%20began%20to%20sell%20it%20as%20well.">(Wikipedia)</a>. 
           The game is a race to be the first person to play the very last card in your hand. In this online variant, this is as simple as selecting and clicking confirm for the card you want to place down. 

If you haven't played before, or need a refresher on what each card does, don't worry! We'll explain the rules below.
<br>
<br>
There is a total of 108 cards in a deck of UNO cards:
<br>
 <ul>
   <li>4 "wild cards"</li>
   <li>4 "wild draw four cards" </li>
   <li>25 cards for each color (red, yellow, green, blue)
    <ul>
       For each color of the cards, there consists of:
       <li>1 zero card</li>
       <li>2 of each one through nine number card</li>
       <li>Action Cards:</li>
    <ul>
       <li>2 "skip cards"</li>
       <li>2 "reverse cards"</li>
       <li>2 "draw 2 cards"</li>
       </ul>
     </ul>
   </li>
 </ul>

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