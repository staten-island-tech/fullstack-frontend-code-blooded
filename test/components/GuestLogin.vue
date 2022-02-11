<template>
  <div class="guestLogin">
    <!-- options to join/start game -->
    <div v-if="!joined" class="login-parent-container">
      <div class="login-child-container">
        <!-- input your username here -->
        <input type="text" class="user-name" v-model="currentUser" />
        <!-- click this to start a new game -->
        <button class="startGame" v-on:click="create">start a game</button>
        <!-- click this to join an existing game -->
        <div class="join-existing-parent">
          <div v-if="joinClicked" class="join-existing">
            <h1>textext</h1>
            <input type="text" class="join-code" v-model="joinCode" />
          </div>
          <button class="join-button" v-on:click="join">Join</button>
        </div>
      </div>
    </div>
    <!-- chat message display list -->
    <div v-if="joined" class="chat">
      <div class="list-container">
        <div v-for="message in messages" :key="message.id">
          <b>{{ message.user }}</b> :{{ message.text }}
        </div>
      </div>
      <div class="text-input-container">
        <textarea
          v-model="text"
          class="text-message"
          v-on:keyup.enter="sendMessage"
        >
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
// import io from 'socket.io-client'

export default {
  name: 'GuestLogin',
  data() {
    return {
      joined: false,
      currentUser: '',
      text: '',
      joinClicked: false,
      messages: [],
      joinCode: '',
    }
  },
  methods: {
    create() {
      console.log(this.currentUser)
      this.joined = true
      // connecting localhost
      //   this.socketInstance = io('http://localhost:3000')
      //   this.socketInstance.on('message:received', (data) => {
      //     this.messages = this.messages.concat(data)
      //   })
    },
    join() {
      this.joinClicked = true
      console.log('clicked')
    },
    sendMessage() {
      console.log(this.text)
      this.addMessage()
      this.text = ''
    },
    addMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        user: this.currentUser,
      }
      this.messages = this.messages.concat(message)

      //   this.socketInstance.emit('message', message)
    },
  },
}
</script>

<style>
.join-existing {
  width: 50%;
  height: 50%;
  background-color: red;
}
.login-child-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: antiquewhite;
}
</style>
