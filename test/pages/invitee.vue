<template>
    <div class="code-page"> 
        <button class="help"><a href="rules">?</a></button>
        <div class="options2">
            <div class="row">
              <div class="code">
                <div class="sample"> 
                    <h1 class="code-header">CODE:</h1>
                    <Pin></Pin>
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
                    <Leave/>
                </div>

            </div>
            <div id="chat" class="chat">
              <p class="friend chat">game created</p>
              <span class="space"> </span>
              <input id="writeMessage" type="text" placeholder="write a message">
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import Pin from '@/components/Pin.vue';
import Leave from '@/components/Leave.vue';
export default{
  components: {
      Pin,
      Leave
    },
  methods: {
      goIndex() {
        this.$router.push('/');
      },
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
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
/* DISPLAY NONE */
.hide{
  display:none;
}
.code{
  width:60%;
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
  .row{
    display:flex;
    flex-direction: row;
    align-items: center;
  }

  .comment{
    color:var(--third-color);
    font-family: 'Tomorrow', sans-serif;
    font-weight: var(--heavy-weight);
    font-size:1.5rem;
  }
  .options2{
    display:flex;
    flex-direction: column;
    width:95vw;
    height:90vh;
    justify-content: center;
    margin:0 auto;
    align-items: center;
  }
  .sample{
      display: flex;
      flex-direction: row;
      align-items: center;
  }
  .buttons{
      display: flex;
      flex-direction: column;
  }
  .start,
  .leave{
    border-radius: 35px;
    width:70%;
    font-size:3rem;
    margin-top:1rem;
  }
  input{
    border-color: var(--fourth-color);
    border-width: .3rem;
    color:var(--font-color);
    font-size:1.5rem;
    border-radius: 26px;
    width:40%;
    font-size:3rem;
    margin-top:1rem;
    background-color:var(--background-color);
  }
  .space { flex-grow: 1; }
  #writeMessage{
    align-self:flex-end;
    margin-top: auto; 
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
  .leave{
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
  #chat{
    height:75vh;
    display:flex;
    flex-direction:column;
    color: var(--font-color);
  }
  .chat{
    border:5px solid var(--secondary-color);
    padding:2rem;
    border-radius: 30px;
    width:50%;
    margin-left:1rem;
  }
</style>