<template>
  <div class="guestLogin">
    <!-- options to join/start game on the home screen -->
    <div v-if="!joined" class="login-parent-container">
      <h1 class="logo">code-blooded</h1>
      <div class="login-child-container">
        <!-- input your username here -->
        <input v-model="currentUser" type="text" class="user-name" />
        <!-- click this to start a new game -->
        <button class="startButton" @click="create">start a game</button>
        <!-- click this to join an existing game -->
        <div class="join-existing-parent">
          <div v-if="joinClicked" class="join-existing">
            <h1>textext</h1>
            <input type="text" class="join-code" />
          </div>
          <button class="joinButton" @click="join">Join</button>
        </div>
      </div>
    </div>

    <div v-if="joined" class="joined-screen">
      <!-- things to the left of chat ie code, friends list, start/delete game -->
      <div class="starter-info">
        <h1>Code:</h1>
        <h1>Friends who have joined</h1>
        <div
          v-for="message in messages"
          :key="message.user"
          class="participant-list"
        >
          <ul>
            {{
              message.user
            }}
          </ul>
        </div>
        <div class="time-options"></div>
        <div class="start-delete">
          <button class="start-game">start game</button>
          <button class="delete-game">delete game</button>
        </div>
      </div>

      <!-- chat message display list -->
      <div class="chatbox">
        <div class="list-container">
          <div v-for="message in messages" :key="message.id">
            <b>{{ message.user }}</b> :{{ message.text }}
          </div>
        </div>
        <div class="text-input-container">
          <textarea
            v-model="chatText"
            class="text-message"
            @keyup.enter="sendMessage"
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'GuestLogin',
  data() {
    return {
      joined: false,
      currentUser: '',
      chatText: '',
      joinClicked: false,
      messages: [],
      joinCode: '',
      players: [],
      user: [],
    }
  },
  methods: {
    create() {
      console.log(this.currentUser)
      this.joined = true
      // connecting localhost
      this.socketInstance = io('http://localhost:3000')
      this.socketInstance.on('message:received', (data) => {
        this.messages = this.messages.concat(data)
      })

      const user = {
        user: this.currentUser,
      }
      this.socketInstance.on('user:received', (data) => {
        this.players = this.players.concat(this.currentUser)
      })
      this.socketInstance.emit('user', user)
    },
    join() {
      this.joinClicked = true
      console.log('clicked')
      this.players = this.players.concat(this.currentUser)
    },
    sendMessage() {
      console.log(this.chatText)
      this.addMessage()
      this.chatText = ''
    },
    addMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.chatText,
        user: this.currentUser,
      }
      this.messages = this.messages.concat(message)

      this.socketInstance.emit('message', message)
    },
  },
}
</script>

<style>
.login-parent-container {
  padding: 15px;
}

.join-existing {
  width: 50%;
  height: 50%;
  background-color: red;
}
.join-existing-parent {
  width: 100%;
}
.login-child-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input,
button {
  height: 65px;
  width: 100%;
  border-radius: 25px;
}

.user-name {
  background-color: transparent;
  border-color: var(--fourth-color);
  border-width: 4px;
  color: white;
}
.startButton,
.start-game {
  background-color: var(--fourth-color);
  border: none;
}
.joinButton,
.delete-game {
  background-color: var(--secondary-color);
  border: none;
}

.joined-screen {
  display: flex;
  background-color: thistle;
  justify-content: space-around;
  width: 100vw;
}
</style>
