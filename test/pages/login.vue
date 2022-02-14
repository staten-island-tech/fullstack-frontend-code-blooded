<template>
<div class="container">
<div class="login">
<div class="buttons">
<button>Login</button>
<button>Sign up</button>
</div>
<h1>Welcome!</h1>
<p>Keep track of your progress and connect with friends.</p>
<form>
    <input type="text" name="username" placeholder="username/email">
    <br>
    <input type="text" name="password" placeholder="password">
</form>
<button class="play">Let's Play!</button>
<br>
<a href="https://www.google.com/webhp?authuser=1">forgot password?</a>
</div>
</div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
}
.buttons{
    display: flex;
    flex-direction: row;
}

h1{
    margin-bottom: 0;
}

.play{
    margin-top: .5rem;
}

.login{
    background-color: #0E1555;
    color: #fff;
    width: 50vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: .5rem solid #FD367E;
    border-radius: 2rem;
}
button{
   background-color: #FD367E;
   color: white;
   border-radius: .5rem;
   border: .1rem solid #FD367E;
}

a{
    color: white;
}
</style>