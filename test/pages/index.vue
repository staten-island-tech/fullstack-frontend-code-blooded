<template>
  <div id="app">
    <div class="btn">
      <button class="help">?</button>
      <button class="sign-in">sign in</button>
    </div>
    <div class="options">
      <h1 class="logo">code-blooded</h1>
      <input type="text" placeholder="enter a name" name="username" required>
      <button class="start">start a game</button>
      <button class="join">join a game</button>
    </div>
    <span class="apcsp">apcsp project</span>
  </div>
</template>

<script>
export default {}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
  #app{
    background-color: #0E1555;
    max-width: 100%;
    height: 100vh;
    font-family: 'Tomorrow', sans-serif;

  }
  button{
    font-family: 'Tomorrow', sans-serif;
    font-weight:600;
  }

  .help{
    background-color: gray;
    font-weight: 900;
    width:3rem;
    height:3rem;
    font-size: 2rem;
    position:absolute;
  }
  .options{
    display:flex;
    flex-direction: column;
    width:90vw;
    height:90vh;
    justify-content: center;
    margin:0 auto;
    align-items: center;
  }
  .start,
  .join,
  input{
    border-radius: 26px;
    width:32%;
    font-size:3rem;
    margin-top:1rem;

  }
  input{
    border-color: #FD367E;
    border-width: .3rem;
    color:white;
    font-size:3.5rem;
    background-color:#0E1555 ;
  }
  ::placeholder {
  padding:0.5rem;
  color:white;
  font-family: 'Tomorrow', sans-serif;
  font-weight: 200;
}
  .start{
    background-color: #FD367E;
    color:#4E1184;
    font-size:3rem;
    border-color: #FD367E;
    padding:.5rem;
  }
  .join{
    background-color: #4E1184;
    color:#FD367E;
    font-size:3rem;
    border-color: #4E1184;
      padding:.5rem;
  }
  .sign-in{
    background-color: white;
    color:#0E1555;
    border-radius: 25px;
    height:3rem;
    width:9rem;
    position:absolute;
    right:2rem;
    top:2rem;
    font-family: 'Tomorrow', sans-serif;
    font-weight: 900;
     font-size:1.5rem;
  }
  .logo{
    color:white;
    font-size: 6rem;
  margin-bottom:1rem;
  }
  .apcsp{
    background-color: blueviolet;
    bottom:0;
    position:absolute;
    padding:1rem;
     border-radius: 5px 30px 5px 5px;
  }
</style>