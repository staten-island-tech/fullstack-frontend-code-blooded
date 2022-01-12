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
            <div class="chat hide">
              <p class="friend chat">game created</p>
              <input id="writeMessage" type="text" placeholder="write a message">
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
.hide{
  display:none;
}
  .code-page{
    background-color: var(--background-color);
    max-width: 100%;
    height: 100vh;
    font-family: 'Tomorrow', sans-serif;
    margin:0 auto;
    display:flex;
    flex-direction: row;
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
    flex-direction: row;
  }
  .chat{
    border:5px solid var(--secondary-color);
    padding:2rem;
    border-radius: 30px;
  }
  .comment{
    color:var(--third-color);
    font-family: 'Tomorrow', sans-serif;
    font-weight: var(--heavy-weight);
    font-size:1.5rem;
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
  .buttons{
      display: flex;
      flex-direction: column;
  }
  .start,
  .delete{
    border-radius: 35px;
    width:70%;
    font-size:3rem;
    margin-top:1rem;
  }
  input{
    border-color: var(--fourth-color);
    border-width: .3rem;
    color:var(--font-color);
    font-size:3.5rem;
    border-radius: 26px;
    width:40%;
    font-size:3rem;
    margin-top:1rem;
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
    color:var(--background-color);
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
    letter-spacing: 5px;
  }
  .whoJoined{
    color:var(--font-color);
    font-size: 2rem;
    letter-spacing: 3px;
  }
  .friend-list{
    border-bottom: 1px solid var(--fourth-color);
    font-size: 1.5rem;
    margin-bottom:1rem;
    letter-spacing: 1px;
    color:var(--font-color);
    font-weight: var(--medium-weight);
  }
  /* .friend1{

  }
  .friend2{

  }
  .friend3{

  }
  .friend4{

  } */
  li{
      list-style: none;
  }

  /* CHAT CSS */
  #writeMessage{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid var(--third-color);
  border-radius: 20px;
}
input[type="text"]::placeholder{
  color:var(--third-color)
}

</style>