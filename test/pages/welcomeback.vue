<template>
  <div id="app">
    <div class="btn">
      <button class="help"><a href="rules">?</a></button>
      <button type="button" class="sign-out">sign out</button>
    </div>
    <div id="box">
      <div class="options1" >
      <h2 class="logo">welcome back!</h2>
      <button class="join1" @click="goFriends">find friends</button>
      <button class="start1" @click="goGame"><a href="game">start a game</a></button>
       <div class="join-contain">
        <input type="text" placeholder="enter code" name="join-code" required>
        <button class="join1 invitee" @click="goInivitee">join</button>
      </div>
    </div>
    </div>
    <span class="apcsp">apcsp project</span>
  </div>
</template>
<script>
export default{
  methods: {
      goInivitee() {
        this.$router.push('/invitee');
      },
      goGame(){
        this.$router.push('/game');
      },
      goFriends(){
        this.$router.push('/friends');
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
    margin:0 auto;
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
  /* FLEX BOX FOR BUTTONS */
  .options1,
  .join-contain{
    display:flex;
    justify-content: center;
    margin:auto;
    align-items: center;
  }
  .options1{
    width:35vw;
    height:70vh;
    flex-direction: column;
    border:5px solid var(--fourth-color);
    border-radius: 26px;
    position:absolute;

  }
  .options1::after{
    content: "";
    clear: both;
    display: table;
  }
  .start1,
  .join1,
  input{
    border-radius: 26px;
    font-size:3rem;
    margin-top:1rem;
  }
  input{
    border-color: var(--fourth-color);
    border-width: .3rem;
    color:var(--font-color);
    font-size:2.5rem;
    width:62%;
    background-color:var(--background-color);
  }
  ::placeholder {
  padding:0.5rem;
  color:var(--font-color);
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--thin-weight);
}
  .start1{
    width:62%;
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
    width:62%;
  }
  .invitee{
    width:40%;
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

</style>