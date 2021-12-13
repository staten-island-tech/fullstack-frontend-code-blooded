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
  #app{
    background-color: #0E1555;
    width: 100vw;
    height: 100vh;
  }
  .help{
    background-color: gray;
    font-weight: 900;
    width:3rem;
    height:3rem;
    font-size: 2rem;
  }
  .sign-in{
    background-color: white;
    color:#0E1555;
    border-radius: 25px;
    height:3rem;
    
  }
</style>