<template>
    <div class="main">
        <button>?</button>
        <div class="container">
            <ul class="list">
                <li class="special">Friends</li>
                <li class="norm">JS</li>
                <li class="norm">CSS</li>
                <li class="norm">HTML</li>
                <li class="norm">Vue</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .main{
        height: 100vh;
        background-color: rgb(63, 0, 63);
    }
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }
    li{
        margin: 1rem;
        font-size: 1rem;
    }
    .special{
        font-size: 2rem;
        margin-bottom: 2rem;
    }
</style>