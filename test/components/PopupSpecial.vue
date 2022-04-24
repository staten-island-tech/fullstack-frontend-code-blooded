<template>
    <Popup>
        <template #topRow>
            <div class="card-float">
                <CardTemplate :type="'r'+getNumber()" :click-handler="click" hover="true"></CardTemplate>
            </div>
            <div class="card-float">
                <CardTemplate :type="'y'+getNumber()" :click-handler="click" hover="true"></CardTemplate>
            </div>
            <div class="card-float">
                <CardTemplate :type="'g'+getNumber()" :click-handler="click" hover="true"></CardTemplate>
            </div>
            <div class="card-float">
                <CardTemplate :type="'b'+getNumber()" :click-handler="click" hover="true"></CardTemplate>
            </div>                        
        </template>
    </Popup>
</template>

<script>

    import Popup from "./Popup.vue"
    import CardTemplate from "./CardTemplate.vue"

    export default {
        name: "PopupSpecial",
        components: {Popup, CardTemplate},
        props:['clickHandler', 'card'],
        methods:{
            getNumber(){
                return this.card.type.charAt(1);
            },
            click(cardType){
                this.clickHandler(this.card.id, cardType);
            }
        }
    }
</script>

<style scoped>
    .card-float{
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
    }
</style>