<template>
    <div class="optionapp">
<div class="options">
      <h1 class="logo">code-blooded</h1>
      <input type="text" placeholder="enter a name" name="username" required>
      <button class="start" @click="goGame">start a game</button>
      <div class="join-contain">
        <input type='text' v-model="roomCode" placeholder='Game Code' />
        <button class="join invitee" @click="goInvitee">JOIN GAME</button>
        <!-- <input id="join-code" type="text" placeholder="enter code" name="join-code" required>
        <button class="join invitee" @click="goInvitee">join</button> -->
      </div>
    </div>
    </div>
</template>
<script>
import randomCodeGen from '../utils/randomCodeGen'
  export default {
    name: 'Options',
    data(){
      return{
        roomCode:null,
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      goGame(){
        this.$router.push(`/game/play?roomCode=${randomCodeGen(5)}`);
      },
      goInvitee(){
        this.$router.push(`/invitee/play?roomCode=${this.roomCode}`);
      },
    },
  };
</script>
<style scoped>
  .optionapp{
    z-index:20;
  }
  #join-code{
    font-size:2.5rem;
    padding:.2rem;
  }
</style>