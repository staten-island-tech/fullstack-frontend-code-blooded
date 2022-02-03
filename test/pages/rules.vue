<template>
  <div>
    <div class="container">
      <h1 class="h1-container">How to Play</h1>
      <section class="rules-container">
        Welcome to один brought by Coded-Blooded! This web app allows you to
        play UNO, the popular real-time card game designed by Merle Robbins in
        1971.
        <a
          href="https://en.wikipedia.org/wiki/Uno_(card_game)#:~:text=History%20The%20game%20was%20originally%20developed%20in%201971,local%20businesses%20began%20to%20sell%20it%20as%20well."
          >(Wikipedia)</a
        >. The game is a race to be the first person to play the very last card
        in your hand. In this online variant, this is as simple selecting and
        clicking confirm for the card you want to place down. If you haven't
        played before, or need a refresher on what each card does, don't worry!
        We'll explain the rules below.
        <br />
        <br />
        There is a total of 108 cards in a deck of UNO cards:
        <br />
        <ul>
          <li>4 "wild cards"</li>
          <li>4 "wild draw four cards"</li>
          <li>25 cards for each color (red, yellow, green, blue)</li>
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
        </ul>
        <div class="card-examples">
          <h3 class="card-name">Example Wild Card:</h3>
          <img src="@/imgs/WildCard.png" alt="hello">
          <p class="card-description">When you play this card, you may change the color being played to any color (including the current color) to continue to play. 
            You may play the Wild Card even if you have another playable card in hand. 
            If this card is turned up at the beginning of play, the person to the left of the dealer chooses the color to behin play and plays the first card.</p>
        </div>

        
stack cards of same number
stack action cards of same color
 -->
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
:root {
  --background-color: #0e1555;
  --secondary-color: #4e1184;
  --third-color: #932b77;
  --fourth-color: #fd367e;
  --font-color: #ffffff;
  --heavy-weight: 900;
  --medium-weight: 600;
  --thin-weight: 400;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  height: auto;
  margin: 0;
  padding: 0;
}
.h1-container {
  background-color: var(--fourth-color);
  color: var(--font-color);
  margin: 5rem 0rem 7rem;
  padding: 1.1rem 5rem 0.8rem;
  border-radius: 1rem;
}
.rules-container {
  background-image: linear-gradient(
    var(--third-color),
    var(--background-color)
  );
  height: 100vh;
  border-radius: 1rem;
  width: 50vw;
  color: var(--font-color);
  padding: 3rem;
}
.card-examples{
  background-color: blue;
  margin-top: 5rem;
  padding: 2rem;
  width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-name{
  background-color: red;
  margin: 1rem;
  margin-bottom: 2rem;
  padding: .5rem;
}
/* .card-description{

} */
</style>
