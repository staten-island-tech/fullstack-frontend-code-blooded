<template>
  <section id="lobby" class="container">
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <router-link id="games" class="lobby-back" to="/">Back</router-link>
    <br />
    <div v-if="play" class="player">
      <h3>Playing As: {{ playerStatus.name }}</h3>
      <br />
      <button class="player-button" @click="createRoom">Create Game</button>
      <br />
      <h5>or</h5>
      <form>
        <br />
        <input
          v-model="joinCode"
          type="text"
          aria-label="room-code"
          class="code"
          placeholder="Put in the 4 digit code"
        />
        <input
          class="join"
          type="submit"
          value="Join Game"
          @click.prevent="joinGame"
        />
      </form>
    </div>
  </section>
</template>

<script>
// import mongoose from "mongoose"
import io from 'socket.io-client'
export default {
  name: "Lobby",
  props: {
    game: String,
    gameType: String,
    gameRoom: String,
  },
  data() {
    return {
      
      socket: io("http://localhost:3000"),
      playerStatus: {
        master: "",
        name: this.auth0Client,
      },
      play: true,
      roomCode: "",
      // loginStatus: true,
      joinCode: "",
    };
  },
  
  methods: {
    generateID() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let i = 1; i < 5; i++) {
        const lastLetter = letters[Math.floor(Math.random() * letters.length)];
        this.roomCode += lastLetter;
      }
      console.log(this.roomCode);
    },
    async createRoom() {
      //  const socket = io("http://localhost:3000");
    this.socket.connect()
      if (this.playerStatus.name.length > 0) {
        this.generateID();
        const newGame = Uno
          .collection("games")
          .doc("uno" + this.roomCode);
        this.playerStatus.master = true;
        newGame.set(
          {
            gamePlayers: [],
            lobby: {
              slots: 1,
              lobbyPlayers: [this.playerStatus],
            },
          },
          {
            merge: true,
          }
        );
        const data = {
          code: this.roomCode,
          name: this.playerStatus.name,
          master: this.playerStatus.master,
        };
        this.$router.push({ name: this.gameRoom, params: { data } });
      } else {
        alert("Enter A Name!");
      }
    },
    async joinGame() {
      if (this.joinCode.length === 4) {
        const codeExists = await Uno
          .collection("games")
          .doc(`uno${this.joinCode}`)
          .get()
          .then((snapshot) => {
            return snapshot.exists;
          });
        if (codeExists === true) {
          const lobby = Uno
            .collection("games")
            .doc(`uno${this.joinCode}`);
          const slot = await lobby.get().then((snapshot) => {
            return snapshot.data().lobby.slots;
          });
          if (slot !== 0) {
            let playerData;
            await lobby.get().then((doc) => {
              for (let i = 0; i < doc.data().lobby.lobbyPlayers.length; i++) {
                playerData = doc.data().lobby.lobbyPlayers;
              }
            });
            this.playerStatus.master = false;
            playerData.push({
              master: this.playerStatus.master,
              name: this.playerStatus.name,
            });
            await lobby.set(
              {
                lobby: {
                  lobbyPlayers: playerData,
                  slots: slot - 1,
                },
              },
              {
                merge: true,
              }
            );
            const data = {
              code: this.joinCode,
              name: this.playerStatus.name,
              master: this.playerStatus.master,
            };
            this.$router.push({ name: this.gameRoom, params: { data } });
          } else {
            alert(`Room is full!`);
          }
        } else {
          alert("Code does not exist, please input another one");
        }
      } else {
        alert("The Code is 4 Letters");
      }
    },
  },
};
</script>

<style scoped>
@mixin laptop {
  @media (min-width: 900px) {
    @content;
  }
}
@mixin desktop {
  @media (min-width: 1800px) {
    @content;
  }
}
.container {
  text-align: center;
}
h3 {
  font-size: 4rem;
  color: #ffd600;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  -webkit-text-stroke: 1.3px black;
}
h5 {
  font-size: 4rem;
  color: #ffd600;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  -webkit-text-stroke: 1.3px black;
}
.player-button {
  color: #ffd600;
  background: rgba(35, 17, 35, 0.42);
  border: 1px solid #231123;
  box-shadow: 0px 4px 17px rgba(152, 73, 0, 0.25);
  border-radius: 5px;
  font-size: 3rem;
}
.code {
  margin-right: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: rgba(35, 17, 35, 0.42);
  color: #ffd600;
  font-size: 3rem;
}
.join {
  color: #ffd600;
  background: rgba(35, 17, 35, 0.42);
  border: 1px solid #231123;
  box-shadow: 0px 4px 17px rgba(152, 73, 0, 0.25);
  border-radius: 5px;
  font-size: 3rem;
}
.lobby-back {
  position: absolute;
  left: 48%;
  font-size: 3rem;
  color: #ffd600;
  background: rgba(35, 17, 35, 0.42);
  border: 1px solid #231123;
  box-shadow: 0px 4px 17px rgba(152, 73, 0, 0.25);
  border-radius: 5px;
  text-decoration: none;
  width: 8rem;
  @include laptop {
    top: 62%;
  }
  @include desktop {
    top: 55%;
  }
}
</style>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 15px;
}
th {
  text-align: left;
}
</style>