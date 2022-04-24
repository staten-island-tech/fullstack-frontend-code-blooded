<template>
    <Popup>
        <template #topRow>
            <div class="card-center">
                <CardTemplate :type="card.type"></CardTemplate>
            </div>
        </template>
        <template #bottomRow>
            <div id="col" class="button-float">
                <Button fa-icon="arrow-circle-up" :click-handler="leave">Colocar</Button>
            </div>
            <div id="tom" class="button-float">
                <Button fa-icon="arrow-circle-down" :click-handler="takeHandler">Tomar</Button>
            </div>            
        </template>        
    </Popup>
</template>

<script>

    import Popup from "./Popup.vue"
    import CardTemplate from "./CardTemplate.vue" 
    import Button from "./Button.vue"

    export default {
        name: "PopupTake",
        components: {Popup, CardTemplate, Button},
        props:['takeHandler','leaveHandler','card'],
        methods:{
            leave(){
                this.leaveHandler(this.card.id);
            }
        }
    }
</script>

<style scoped>
    .card-center{
        display: inline-block;
    }
    .button-float{
        display: inline-block; 
        margin-left: 15px;       
        margin-right: 15px;               
        margin-top: 20px;
    }
    #col{
        background: #2461b5;
    }
    #tom{
        background: #b52424;
    }
</style>