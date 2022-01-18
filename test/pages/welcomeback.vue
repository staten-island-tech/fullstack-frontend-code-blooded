<template>
  <div id="app">
    <div class="btn">
      <button class="help"><a href="rules">?</a></button>
    </div>
    <div class="options" >
      <h2 class="logo">welcome back!</h2>
      <button class="join" href="friends"><a class="join" href="friends">find friends</a></button>
      <button class="start" href="game"><a href="game">start a game</a></button>
       <div class="join-contain">
        <input type="text" placeholder="enter code" name="join-code" required>
        <button class="join invitee"><a class="join" href="invitee">join</a></button>
      </div>
    </div>
    <span class="apcsp">apcsp project</span>
  </div>
</template>

<style>
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
  #app{
    background-color: var(--background-color);
    max-width: 100%;
    height: 100vh;
    font-family: 'Tomorrow', sans-serif;
    margin:0 auto;
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
  .options,
  .join-contain{
    display:flex;
    justify-content: center;
    margin:0 auto;
    align-items: center;
  }
  .options{
    width:35vw;
    height:70vh;
    flex-direction: column;
    border:5px solid var(--fourth-color);
    border-radius: 26px;
    margin-top:auto;
    margin-bottom:auto;
  }
  .options::after{
    content: "";
    clear: both;
    display: table;
  }
  .start,
  .join,
  input{
    border-radius: 26px;
    width:62%;
    font-size:3rem;
    margin-top:1rem;
  }
  input{
    border-color: var(--fourth-color);
    border-width: .3rem;
    color:var(--font-color);
    font-size:3.5rem;
    background-color:var(--background-color);
  }
  ::placeholder {
  padding:0.5rem;
  color:var(--font-color);
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--thin-weight);
}
  .start{
    background-color: var(--fourth-color);
    color:var(--secondary-color);
    font-size:3rem;
    border-color: var(--fourth-color);
    padding:.5rem;
  }
  .join{
    background-color: var(--secondary-color);
    color:var(--fourth-color);
    font-size:3rem;
    border-color: var(--secondary-color);
    padding:.5rem;
  }
  /* SIGN IN BUTTON */
  .sign-in{
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