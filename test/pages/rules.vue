<template>
  <div>
    <div class="container">
      <h1 class="h1-container">How to Play</h1>
      <button class="back" @click="historyButton"> 🢠  Back</button>
      <section class="rules-container">
        Welcome to один brought to you by Coded-Blooded! This web app allows you to
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


        <div class="card-container">
          <div v-for="card in cards" :key="card.id" class="card-examples">
            <div class="card-name">{{card.cardName}}</div>
            <img :src="card.cardImage" alt="no">
            <p class="card-description">{{card.cardDescription}}</p>
          </div>
        </div>


        

      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rules',

data(){
  return{

    cards:[
      {
        cardName: "Wild Card",
        cardImage: require('@/assets/imgs/WildCard.png'),
        cardDescription:`When you play this card, you may change the color being played to any color (including the current color) to continue to play. 
            You may play the Wild Card even if you have another playable card in hand. 
            If this card is turned up at the beginning of play, the person to the left of the dealer chooses the color to behin play and plays the first card.`,
        id:1
      },
      {
        cardName: "Wild Draw 4 Card",
        cardImage: require('@/assets/imgs/plus4WildCard.png'),
        cardDescription:`This card allows you to call the next color played and requires the next player to pick 4 cards from the DRAW pile and forfeit his/her turn.
            Note: Should the person next to play have Draw 2 Cards or Wild Draw 4 cards on hand, they may choose 
            to play them in response and pass the incremented penalty to the next player.`,
        id:2
      },
      {
        cardName: "Draw 2 Card",
        cardImage: require('@/assets/imgs/B+2.png'),
        cardDescription:`When you play this card, the next person to play must draw 2 cards and forfeit his/her turn.
            You may only play this card on a matching color or on another Draw 2 Card.
            Note: Should the person next to play have Draw 2 Cards or Wild Draw 4 cards on hand, they may choose 
            to play them in response and pass the incremented penalty to the next player.`,
        id:3
      },
      {
        cardName: "Reverse Card",
        cardImage: require('@/assets/imgs/B-Reverse.png'),
        cardDescription:`This card reverses the direction of play. Play to the ledt now passes to the right and vice versa.
            If this card is turned up at the beginning of play, the player to the right now plays first and the play then goes
            to the right instead of the right. This card may only be played on a matching color or on another Reverse Card.`,
        id:4
      },
      {
        cardName: "Skip Card",
        cardImage: require('@/assets/imgs/B-Skip.png'),
        cardDescription:`The next person in line to play after this card is played loses his/her turn and is "skipped."
            If this card turned up at the beginning of play, the first player is skipped.
            This card may only be played on a matching color or on another Skip Card.`,
        id:5
      },
      {
        cardName: "Plain Number Card",
        cardImage: require('@/assets/imgs/B-0.png'),
        cardDescription:`No special actions are associated with these cards when played. 
            This type of card may be played on a matching color or number.`,
        id:6
      },

      
    ]

  }
},
methods:{
  historyButton(){
    history.go(-1);
  }
}
}
</script>

<style scoped>
*{
  --background-color: #0e1555;
  --secondary-color: #4e1184;
  --third-color: #d07eb8;
  --fourth-color: #fd367e;
  --fifth-color: rgb(41, 38, 38);;
  --card-title: #fff;
  --card-background:rgb(117, 117, 189);
  --font-color: #fff;
  --heavy-weight: 900;
  --medium-weight: 600;
  --thin-weight: 400;
}
.mdc-typography {
  margin: 0;
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
.back{
  background-color: var(--secondary-color);
  color: var(--font-color);
  margin: 0 0 2rem;
  padding: 1.1rem 2rem 0.8rem;
  border-radius: 2rem;
  font-weight: 900;
  font-size: 1rem;
}
.h1-container {
  background-color: var(--fourth-color);
  color: var(--font-color);
  margin: 5rem 0rem 3rem;
  padding: 1.1rem 5rem 0.8rem;
  border-radius: 1rem;
  color: white;
}
.rules-container {
  background-image: linear-gradient(
    var(--third-color),
    var(--background-color)
  );
  height: auto;
  border-radius: 1rem;
  width: 50vw;
  color: var(--font-color);
  padding: 3rem;
  
}
.card-examples{
  background-color: var(--card-background);
  margin-top: 5rem;
  padding: 2rem;
  width: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-name{
  background-color: var(--fifth-color);
  margin: 1rem;
  margin-bottom: 2rem;
  padding: .5rem;
  color: white;
  font-size: 1.5rem;
  width: 12rem;
  text-align: center;
  border-radius: .5rem;
}

.card-description{
  background-color: var(--fifth-color);
  margin-top: 2rem;
  padding: 1rem 0.5rem;
  color: white;
  text-align: center;
}

.card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
