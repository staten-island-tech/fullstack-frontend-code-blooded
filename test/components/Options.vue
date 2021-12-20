<template>
    <div class="optionapp">
      <Join v-show="isJoinVisible"/>
    <div class="options" >
      <h1 class="logo">code-blooded</h1>
      <input type="text" placeholder="enter a name" name="username" required>
      <button class="start">start a game</button>
      <button class="join" @click="showJoin" >join a game</button>
    </div>
    </div>
</template>
<script>
import Join from '@/components/Join.vue'
  export default {
    name: 'Options',
    components: {
      Join,
    },
    data() {
      return {
        isJoinVisible:false,
        isNotJoinVisible:true,
      };
    },
    methods: {
      close() {
        this.$emit('close');
      },
      showJoin(){
        this.isJoinVisible = true;
        this.isNotJoinVisible = false;
      },
      closeJoin(){
        this.isJoinVisible = false;
        this.isNotJoinVisible = true;
      }
    },
  };
</script>