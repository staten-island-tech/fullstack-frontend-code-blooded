<template>
    <div class="code-page"> 
        <button class="help"><a href="rules">?</a></button>
        <div class="options">
            <div class="code">
                <div class="sample"> 
                    <h1 class="code-header">CODE:</h1>
                    <input id="game-input" name="gameId" type="tel" placeholder="Game PIN" data-functional-selector="game-pin-input" autocomplete="off" dir="auto" value="" aria-expanded="false">
                </div>
                <p class="comment">share this with friends for them to join</p>
                <h2 class="whoJoined">Friends who have joined</h2>
                <div class="friend-list">
                    <ul class="list">
                        <li class="friend1 friend">javascript, the host, is playing</li>
                        <li class="friend2 friend">vue, the invitee, is playing</li>
                        <li class="friend3 friend">css, the invitee, is playing</li>
                        <li class="friend4 friend">html, the invitee, is playing</li>
                    </ul>
                </div>
                <div class="buttons">
                    <button class="start">START GAME</button>
                    <button class="delete">DELETE GAME</button>
                </div>

            </div>
            <div class="chat">

            </div>
        </div>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
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
  .code-page{
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
  .help{
    background-color: gray;
    font-weight: var(--heavy-weight);
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
  .sample{
      display: flex;
      flex-direction: row;
  }
  .button{
      display: flex;
      flex-direction: column;
  }
  .start,
  .delete,
  input{
    border-radius: 26px;
    width:32%;
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
  .delete{
    background-color: var(--secondary-color);
    color:var(--fourth-color);
    font-size:3rem;
    border-color: var(--secondary-color);
      padding:.5rem;
  }
  .code-header{
    color:var(--font-color);
    font-size: 4rem;
  margin-bottom:1rem;
  }
    .whoJoined{
        color:var(--font-color);
    font-size: 2rem;
    }
  .friend-list{
      border-bottom:var(--fourth-color);
  }
  li{
      list-style: none;
  }
</style>