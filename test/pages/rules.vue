<template>
  <div>
      <div class="container">
        <h1 class="h1-container">How to Play</h1>
        <section class="rules-container"> Welcome один brought by Coded-Blooded! 
           This web app allows you to play UNO, the popular real-time card game designed by Merle Robbins in 1971
           <a href="https://en.wikipedia.org/wiki/Uno_(card_game)#:~:text=History%20The%20game%20was%20originally%20developed%20in%201971,local%20businesses%20began%20to%20sell%20it%20as%20well.">(Wikipedia)</a>. 
           The game is a race to be the first person to play the very last card in your hand. In this online variant, this is as simple selecting and clicking confirm for the card you want to place down. 

If you haven't played before, or need a refresher on what each card does, don't worry! We'll explain the rules below.

<br>
There is a total of 108 cards in a deck of UNO cards:
<br>
 <ul>
   <li>4 "wild cards"</li>
   <li>4 "wild draw four cards </li>
   <li>25 plain number cards for each color (red, yellow, green, blue)
     <ul>
       For each color of the plain number cards, there consists of
     </ul>
   </li>
 </ul>
 four each of "Wild" and "Wild Draw Four", and 25 each of four colors (red, yellow, green, blue).
Each color consists of one zero, two each of 1 through 9, and two each of "Skip", "Draw Two", and "Reverse". 
These last three types are known as "action cards".</section>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
:root{
  --background-color:#0E1555;
  --secondary-color:#4E1184;
  --third-color:#932B77;
  --fourth-color:#FD367E;
  --font-color:#ffffff;
  --heavy-weight:900;
  --medium-weight:600;
  --thin-weight:400;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-color);
    height: 100vh;
    margin: 0;
    padding: 0;
}
.h1-container{
    background-color: var(--fourth-color);
    color: var(--font-color);
    margin: 5rem 0rem 7rem;
    padding: 1.1rem 5rem .8rem;
    border-radius: 1rem;
}
.rules-container{
    background-image: linear-gradient(var(--third-color),var(--background-color));
    height: 100vh;
    border-radius: 1rem;
    width: 55vw;
}
</style>