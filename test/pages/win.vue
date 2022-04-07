<template>
  <div id="app">
    <div class="btn">
      <button class="help"><a href="rules">?</a></button>
      <Sign/>
    </div>
    <ul class="confettiBox">
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
      <li class="confetti"></li>
    </ul>
    <div id="box">
      <div class="winScreen" >
      <div class="winBox">
          <h2 class="logo">congratulations</h2>
          <h2 class="logo winTime">win time: </h2>
      </div>
      <div class="buttons-box">
        <button class="start1" @click="goGame">rematch</button>
        <button class="join1" @click="goGame">start new game</button>
        <Win/>
      </div>
    </div>
    </div>
    <span class="apcsp">apcsp project</span>
  </div>
</template>
<script>
import Sign from '@/components/Sign.vue';
import Win from '@/components/Win.vue';
export default{
  components:{
    Sign,
    Win
  },
  methods: {
      goHome() {
        this.$router.push('/');
      },
      goGame(){
        this.$router.push('/game');
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
  --font-color:#ffff;
  --win-color:#49C8FF;
  --heavy-weight:900;
  --medium-weight:600;
  --thin-weight:400;
}
/* Common CSS */
  #app{
    background-color: var(--background-color);
    max-width: 100vw;
    height: 100vh;
    font-family: 'Tomorrow', sans-serif;
    margin: 0 auto;
  }
.mdc-typography {
  margin: 0;
}
  #box{
    display:flex;
    align-items: center;
    justify-content: center;
    position:relative;
    width:100%;
    height:100%;
  }
  button{
    font-family: 'Tomorrow', sans-serif;
    font-weight:var(--medium-weight);
  }
  a{
    text-decoration: none;
  }
  /* ? Button */
  .help{
    background-color: gray;
    font-weight: var(--heavy-weight);
    width:3rem;
    height:3rem;
    font-size: 2rem;
    position:absolute;
  }
    .buttons-box{
    display:flex;
    justify-content: center;
    margin:auto;
    align-items: center;
    flex-direction: column;
  }
    .winBox{
    width:70vw;
    height:40vh;
    border:5px solid var(--win-color);
    border-radius: 26px;
    box-sizing: border-box;
    margin:0 auto;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .start1,
  .join1{
    border-radius: 40px;
    font-size:2rem;
    margin-top:1rem;
    text-transform: uppercase;
  }
  .start1{
    width:70%;
    background-color: var(--fourth-color);
    color:var(--background-color);
    font-size:3rem;
    border-color: var(--fourth-color);
    padding:.5rem;
  }
  .join1{
    background-color: var(--secondary-color);
    color:var(--fourth-color);
    font-size:3rem;
    border-color: var(--secondary-color);
    padding:.5rem;
    width:70%;
  }
  /* SIGN IN BUTTON */
  .sign-out{
    background-color: var(--font-color);
    color:var(--background-color);
    border-radius: 25px;
    height:3rem;
    width:9rem;
    position:absolute;
    right:2rem;
    top:2rem;
    font-family: 'Tomorrow', sans-serif;
    font-weight: var(--heavy-weight);
     font-size:1.5rem;
  }
  /* CODE BLOODED HEADER */
  .logo{
    color:var(--font-color);
    font-size: 4.5rem;
    margin-bottom:1rem;
  }
  /* BOTTOM LOGO THINGY */
  .apcsp{
    background-color: var(--third-color);
    bottom:0;
    position:absolute;
    padding:1rem;
     border-radius: 5px 30px 5px 5px;
  }
  /* Join Components */
  .join-contain{
    margin:0 auto;
    justify-content: center;
    align-items: center;
    width:62%;
  }
/* confetti */
.confetti {
          width: 13px;
          height: 20px;
          background-color: #f2d74e;
          position: absolute;
          left: 50%;
          animation: confetti 4s ease-in-out -2s infinite;
          transform-origin: left top;
        }
        .confettiBox{
          list-style: none;
        }
        .confetti:nth-child(1) {
          background-color: #f2d74e; left: 10%; animation-delay: 0;
        }
        .confetti:nth-child(2) {
          background-color: #95c3de; left: 15%; animation-delay: -5s;
        }
        .confetti:nth-child(3) {
          background-color: #ff9a91; left: 20%; animation-delay: -3s;
        }
        .confetti:nth-child(4) {
          background-color: #f2d74e; left: 25%; animation-delay: -2.5s;
        }
        .confetti:nth-child(5) {
          background-color: #95c3de; left: 30%; animation-delay: -4s;
        }
        .confetti:nth-child(6) {
          background-color: #ff9a91; left: 45%; animation-delay: -6s;
        }
        .confetti:nth-child(7) {
          background-color: #f2d74e; left: 50%; animation-delay: -1.7s;
        }
        .confetti:nth-child(8) {
          background-color: #95c3de; left: 55%; animation-delay: -1.5s;
        }
        .confetti:nth-child(9) {
          background-color: #ff9a91; left: 60%; animation-delay: -7s;
        }
        .confetti:nth-child(10) {
          background-color: #f2d74e; left: 65%; animation-delay: -2.5s;
        }
        .confetti:nth-child(11) {
          background-color: #95c3de; left: 70%; animation-delay: -8s;
        }
        .confetti:nth-child(12) {
          background-color: #ff9a91; left: 75%; animation-delay: -3.5s;
        }
        .confetti:nth-child(13) {
          background-color: #f2d74e; left: 80%; animation-delay: -4.5s;
        }
        .confetti:nth-child(14) {
          background-color: #95c3de; left: 85%; animation-delay: -1s;
        }
        .confetti:nth-child(15) {
          background-color: #ff9a91; left: 90%; animation-delay: -4s;
        }
        .confetti:nth-child(16) {
          background-color: #f2d74e; left: 98%; animation-delay: -3.5s;
        }

        @keyframes confetti {
          0% { transform: rotateZ(15deg) rotateY(0deg) translate(0,0); }
          25% { transform: rotateZ(5deg) rotateY(360deg) translate(-5vw,20vh); }
          50% { transform: rotateZ(15deg) rotateY(720deg) translate(5vw,60vh); }
          75% { transform: rotateZ(5deg) rotateY(1080deg) translate(-7vw,80vh); }
          100% { transform: rotateZ(15deg) rotateY(1440deg) translate(7vw,97vh); }
        }
</style>