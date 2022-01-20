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
        <div>
          <p>Example Wild Card:</p>
          <img src="" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vel cum architecto rem, deserunt animi dolorem accusamus aspernatur illo placeat enim nam id at, exercitationem nesciunt, fugiat omnis iste corporis.</p>
        </div>

        <!-- Reverse – If going clockwise, switch to counterclockwise or vice versa. It can only be played on a card that matches by color, or on another Reverse card. If turned up at the beginning of play, the dealer goes first, and the player to the dealer’s right is next (normally it would be the player to the dealer’s left).
Skip – When a player places this card, the next player has to skip their turn. It can only be played on a card that matches by color, or on another Skip card. If turned up at the beginning of play, the first player (to the dealer’s left) loses his/her turn. The next player to that player’s right starts the game instead.

Draw Two – When a person places this card, the next player will have to pick up two cards and forfeit his/her turn. It can only be played on a card that matches by color, or on another Draw Two. If turned up at the beginning of play, the first player draws two cards and gets skipped.
Wild – This card represents all four colors, and can be placed on any card. The player has to state which color it will represent for the next player. It can be played regardless of whether another card is available. If turned up at the beginning of play, the first player chooses what color to continue play.
Wild Draw Four – This acts just like the wild card except that the next player also has to draw four cards as well as forfeit his/her turn. With this card, you must have no other alternative cards to play that matches the color of the card previously played. If you play this card illegally, you may be challenged by the other player to show your hand to him/her. If guilty, you need to draw 4 cards. If not, the challenger needs to draw 6 cards instead. If turned up at the beginning of play, return this card to the Draw pile, shuffle, and turn up a new one.

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
  height: 100vh;
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
</style>
