<template>
    <div class="scores" :style="{left:position.x+'px', top:position.y+'px'}">
        <div v-for="(client,index) in clients" :key="index" class="column">
            <div class="cell">{{client.name}}</div>
            <div v-for="(score,ind2) in client.score" :key="ind2" class="cell"><i class='far' :class="scoreClass(score, index)"></i>{{scoreVal(score)}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Popup",
        props:['clients', 'position'],
        methods:{
            scoreClass(score, index){
                let smileys = [
                    "fa-check",
                    "fa-check",
                    "fa-check",
                    "fa-check",
                    "fa-check",
                    "fa-check",
                    "fa-check"
                ];
                if(score === '-'){
                    return smileys[index];
                }
                return null;
            },
            scoreVal(score){
                if(score === '-')return '';
                return score;
            }
        }
    }
</script>

<style scoped>
    .scores{
        position: absolute;
        width:250px;
        height:150px;
        right:20px;
        top:220px;
        transform: rotateZ(3deg);
    }
    .column{
        position:relative;
        width:55px;
        height:100%;
        float:left;
        border-left:solid 1px white;
    }
    .cell{
        position:relative;
        width:100%;
        height:25px;
        color: white;
        text-align: center;
        line-height: 25px;
        font-size: 16px;
        text-shadow: 0px 1px 2px black;
    }
    .cell:nth-child(1){
        border-bottom:solid 1px white;
    }
    .column:first-child{
        border-left:none;
    }    
</style>