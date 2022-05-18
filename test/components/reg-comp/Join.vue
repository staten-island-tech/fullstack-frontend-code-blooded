<template>
    <div class="optionapp">
      <Game v-show="waitingPage"></Game>
      <Invitee v-show="inviteePage"></Invitee>
<div class="options">
      <h1 class="logo">code-blooded</h1>
      <input type="text" placeholder="enter a name" name="username" required>
      <button class="start" @click="waitClick">start a game</button>
      <div class="join-contain">
        <input id="join-code" type="text" placeholder="enter code" name="join-code" required>
        <button class="join invitee" @click="inviteeClick">join</button>
      </div>
    </div>
    </div>
</template>
<script>
import Game from '@/components/pages-comp/Game.vue';
import Invitee from '@/components/pages-comp/Invitee.vue';
  export default {
    name: 'Options',
    components:{
      Game,
      Invitee
    },
    data() {
      return{
        waitingPage: false,
        inviteePage: false,
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      goGame(){
        this.$router.push('/game');
      },
      goInvitee(){
        this.$router.push('/invitee');
      },
      waitClick(){
        this.waitingPage = true;
        this.isJoinNotVisible = false;
      },
      inviteeClick(){
        this.inviteePage = true;
        this.isJoinNotVisible = false;
      }
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