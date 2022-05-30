<template>
  <div class="joinWrap">
    <Host
      v-show="hostComp"
      :socket-info="socketInfo"
      :username="username"
      :code="newCode"
      :players="players"
    ></Host>
    <Invitee
      v-show="inviteeComp"
      :socket-info="socketInfo"
      :username="username"
      :code="urCode"
      :players="players"
    ></Invitee>

    <div v-show="joinWrap" class="optionapp">
      <div class="options">
        <h1 class="logo">code-blooded</h1>
        <input
          v-model="username"
          type="text"
          placeholder="enter a name"
          name="username"
          required
        />
        <button class="start" @click="goHost">start a game</button>
        <div class="join-contain">
          <input
            id="join-code"
            v-model="urCode"
            type="text"
            placeholder="enter code"
            name="join-code"
            required
          />
          <button class="join invitee" @click="goInvitee">join</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import deck from '../../pages/deck.js'
import Host from '@/components/pages-comp/Host.vue'
import Invitee from '@/components/pages-comp/Invitee.vue'

export default {
  name: 'Options',
  components: {
    Host,
    Invitee,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      deck,
      joinWrap: true,
      hostComp: false,
      inviteeComp: false,

      imHost: false,

      username: '',
      newCode: '',

      urCode: '',

      players: [],
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    goHost() {
      if (this.username.length < 1) {
        alert('please enter a username')
      } else {
        // hide landing page, show host waiting room
        this.hostComp = true
        this.joinWrap = false

        this.imHost = true

        // connect
        this.socketInstance = io('http://localhost:3001')
        this.socketInfo = this.socketInstance

        this.makeCode(5)
      }
    },
    goInvitee() {
      if (this.username.length < 1) {
        alert('please enter a username')
      } else {
        this.joinRoom()
      }
    },
    makeCode(length) {
      let code = ''
      const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      this.newCode = code

      this.socketInfo.emit(
        'placeHost',
        this.username,
        this.newCode,
        this.imHost
      )

      this.socketInfo.on('currentRoom', (arg) => {
        this.players = arg
      })
    },
    joinRoom() {
      if (this.urCode.length < 1) {
        alert('please enter room code')
      } else {
        this.socketInstance = io('http://localhost:3001')
        this.socketInfo = this.socketInstance

        this.verifyRoom()
      }
    },
    verifyRoom() {
      this.socketInfo.emit('checkRoom', this.urCode)
      this.socketInfo.on('checked', (verified, full) => {
        if (verified === true && full === false) {
          this.inviteeComp = true
          this.joinWrap = false

          this.socketInfo.emit(
            'placeGuest',
            this.username,
            this.urCode,
            this.imHost
          )

          this.socketInfo.on('currentRoom', (arg) => {
            this.players = arg
          })
        }

        if (verified === false) {
          alert('please enter a valid code')
        }
        if (full === true) {
          alert('this room is currently full')
        }
      })
    },
  },
}
</script>
<style scoped>
/* .optionapp {
  z-index: 20;
} */
#join-code {
  font-size: 2.5rem;
  padding: 0.2rem;
}
</style>
