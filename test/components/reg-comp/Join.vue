<template>
  <div class="joinWrap">
    <Host v-show="hostComp"></Host>
    <Invitee v-show="inviteeComp"></Invitee>

    <div class="optionapp" v-show="joinWrap">
      <div class="options">
        <h1 class="logo">code-blooded</h1>
        <input
          type="text"
          v-model="username"
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
import Host from '@/components/pages-comp/Host.vue'
import Invitee from '@/components/pages-comp/Invitee.vue'

export default {
  name: 'Options',
  components: {
    Host,
    Invitee,
  },
  data() {
    return {
      joinWrap: true,
      hostComp: false,
      inviteeComp: false,

      username: '',
      newCode: '',

      urCode: '',
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
        // this.gameComp = true
        this.hostComp = true
        this.joinWrap = false

        this.socketInstance = io('http://localhost:3001')
        this.socketInfo = this.socketInstance

        this.socketInfo.emit('addUser', this.username)

        this.socketInfo.on('urSocket', (arg) => {
          console.log(arg)
        })

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
      this.socketInfo.on('checked', (arg) => {
        if (arg === true) {
          this.inviteeComp = true
          this.joinWrap = false
        } else {
          alert('please enter valid code')
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
