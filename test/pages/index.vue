<template>
  <div id="app">
    <div class="btn">
      <button class="help">?</button>
      <button type="button" class="sign-in" @click="showModal">sign in</button>
    </div>
    <Options v-show="isModalNotVisible"/>
    <Modal v-show="isModalVisible" @close="closeModal"/>
    <span class="apcsp">apcsp project</span>
  </div>
</template>

<script>
  import Modal from '@/components/Modal.vue';
  import Options from '@/components/Options.vue'

  export default {
    name: 'App',
    components: {
      Modal,
      Options,
    },
    data() {
      return {
        isModalVisible: false,
        isModalNotVisible:true,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
        this.isModalNotVisible = false;
      },
      closeModal() {
        this.isModalVisible = false;
        this.isModalNotVisible = true;
      }
    }
  };
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;600;900&display=swap');
:root{
  --background-color:#0E1555;
  --secondary-color:#4E1184;
  --third-color:#932B77;
  --fourth-color:#FD367E;
  --font-color:#ffff;
  --heavy-weight:900;
  --medium-weight:600;
  --thin-weight:400;
}
  #app{
    background-color: var(--background-color);
    max-width: 100%;
    height: 100vh;
    font-family: 'Tomorrow', sans-serif;
    margin:0 auto;
  }
  button{
    font-family: 'Tomorrow', sans-serif;
    font-weight:var(--medium-weight);
  }

  .help{
    background-color: gray;
    font-weight: var(--heavy-weight);
    width:3rem;
    height:3rem;
    font-size: 2rem;
    position:absolute;
  }
  .options{
    display:flex;
    flex-direction: column;
    width:90vw;
    height:90vh;
    justify-content: center;
    margin:0 auto;
    align-items: center;
  }
  .start,
  .join,
  input{
    border-radius: 26px;
    width:32%;
    font-size:3rem;
    margin-top:1rem;

  }
  input{
    border-color: var(--fourth-color);
    border-width: .3rem;
    color:var(--font-color);
    font-size:3.5rem;
    background-color:var(--background-color);
  }
  ::placeholder {
  padding:0.5rem;
  color:var(--font-color);
  font-family: 'Tomorrow', sans-serif;
  font-weight: var(--thin-weight);
}
  .start{
    background-color: var(--fourth-color);
    color:var(--secondary-color);
    font-size:3rem;
    border-color: var(--fourth-color);
    padding:.5rem;
  }
  .join{
    background-color: var(--secondary-color);
    color:var(--fourth-color);
    font-size:3rem;
    border-color: var(--secondary-color);
      padding:.5rem;
  }
  .sign-in{
    background-color: var(--font-color);
    color:var(--background-color);
    border-radius: 25px;
    height:3rem;
    width:9rem;
    position:absolute;
    right:2rem;
    top:2rem;
    font-family: 'Tomorrow', sans-serif;
    font-weight: var(--heavy-weight);
     font-size:1.5rem;
  }
  .logo{
    color:var(--font-color);
    font-size: 6rem;
  margin-bottom:1rem;
  }
  .apcsp{
    background-color: var(--third-color);
    bottom:0;
    position:absolute;
    padding:1rem;
     border-radius: 5px 30px 5px 5px;
  }
</style>