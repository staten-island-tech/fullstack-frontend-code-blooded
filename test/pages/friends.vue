<template>
    <div class="main">
        <searchFriends v-if="show"></searchFriends>
        <button>?</button>
        <div class="container">
            <ul class="list">
                <li class="special">Friends</li>
                <li class="norm">JS</li>
                <li class="norm">CSS</li>
                <li class="norm">HTML</li>
                <li class="norm">Vue</li>
            </ul>
            <button v-if="!show" class="btnf" @click="show = true">Edit Friends</button>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
    return {
      show: false
    }
  }
}
</script>
<style scoped>
    .main{
        height: 100vh;
        background-color: #0E1555;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 11rem;
    }
    ul{
        list-style: none;
        color: #fff;
        height: 50vh;
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 500;
        background: linear-gradient(#fff, #000);
        border-radius: 2rem;
    }
    li{
        margin: 1rem;
        font-size: 3rem;
    }
    .special{
        font-size: 4rem;
        margin-bottom: 2rem;
        color: #FD367E;
    }
    .btnf{
        font-size: 2.5rem;
        background-color: #FD367E;
        font-weight: bolder;
        border-radius: 1.5rem;
        margin-top: 2rem;
    }
        
</style>