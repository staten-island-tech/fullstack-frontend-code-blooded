<template>
  <div class="pinVueJS">
      <span id="game-input">{{pin}}</span>
  </div>
</template>

<script>
export default {
    name:"Pin",
    data(){
    return{
      pin:'',
    }
  },
    computed:{
    pinReturn(){
      return this.pin
    },
  },
  methods:{
      generatePin(length = 4){
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            // Pick characers randomly
        let str = '';
         for (let i = 0; i < length; i++) {
             str += chars.charAt(Math.floor(Math.random() * chars.length));
         }
         this.pin = str;
      }
  },

}
</script>

<style>
 #game-input{
    border-color: var(--fourth-color);
    border-width: .3rem;
    color:var(--font-color);
    font-size:3.5rem;
    border-radius: 26px;
    width:40%;
    background-color:var(--background-color);
    color:var(--font-color);
    font-family: 'Tomorrow', sans-serif;
    font-weight: var(--thin-weight);
  }
</style>