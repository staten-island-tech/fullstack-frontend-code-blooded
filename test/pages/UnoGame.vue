<template>
    <div class="frame" :style="{width:config.boardWidth+'px', height:config.boardHeight+'px'}">
        <Authorize :client="state.client" :socket="socket"></Authorize>

        <Board v-if="state.client.code">            
            <Scores :clients="state.clients" :position="config.scoresPos"></Scores>
            <Card v-for="card in state.game.cards" 
                    :ref="'card'+card.id"
                    :key="card.id"
                    :card="card"
                    :click-handler="cardOnClick"
                    :transition-finish-handler="cardTransitionFinish"
                    :timeline="config.timeline"
                    :active="state.client.turn"></Card>

            <div v-if="config.playersInitialized && !state.game.winner && state.game.ready" >
                <NamePlate v-for="(client, index) in state.clients" :key="'client_'+index" :client="client" :position="namePosition(client.name)"></NamePlate>
            </div>            
        </Board>
        <div v-if="overlayVisible" class="board-overlay">
            <PopupReady v-if="!state.game.winner && !state.game.ready" :button-handler="ready" :show-button="!state.client.ready"></PopupReady>
            <PopupWon v-if="state.game.winner" :button-handler="ready" :winner="state.game.winner" :show-button="!state.client.ready"></PopupWon>
            <PopupSpecial v-if="config.specialCard" :click-handler="playCardSpecial" :card="config.specialCard"></PopupSpecial>
            <PopupTake v-if="!config.specialCard && state.client.takeOrLeave" :card="state.client.takeOrLeave" :take-handler="takeCard" :leave-handler="playCardTOL"></PopupTake>
        </div>        
    </div>
</template>

<script>
    import testDataNew from "@/public/testDataNew.json"
    import Card from "@/components/Card.vue"    
    import PopupReady from "@/components/PopupReady.vue"    
    import PopupWon from "@/components/PopupWon.vue"    
    import PopupSpecial from "@/components/PopupSpecial.vue"    
    import PopupTake from "@/components/PopupTake.vue"   
    import NamePlate from "@/components/NamePlate.vue"    
    import Scores from "@/components/Scores.vue"
    import Authorize from "@/components/Authorize.vue"   
    import ConfigMixin from "@/mixins/Config.js"   
    import ClientMixin from "@/mixins/Client.js"   
    import Board from "@/components/Board.vue"
    const OWNER_DRAW_DECK = "draw"
    const OWNER_DISCARD_DECK = "dsc"    
    export default {
        name: "UnoGame",
        components: {
            Board, 
            Card, 
            Authorize, 
            PopupReady, 
            PopupWon,
            PopupSpecial,
            PopupTake,
            NamePlate,
            Scores
        },  
        mixins: [
            ConfigMixin, 
            ClientMixin
        ],
        props: {
            socket: { type: Object },
        },
        
                  
        data() {
            return {
                state:{
                    clients:[],
                    game:{
                        cards:[],
                        events:[]
                    },
                }
            }
        },
        computed:{
            overlayVisible(){
                return this.state.client.code 
                    && ((!this.state.game.winner && !this.state.game.ready) 
                    || this.state.game.winner
                    || this.config.specialCard
                    || (!this.config.specialCard && this.state.client.takeOrLeave)
                    ); 
            }            
        },
        mounted () {
            this.socket.on('state', this.gameStateResponse);
            // this.gameStateResponse(testDataNew);
        },
        beforeDestroy () {
        },
        methods:{                     
            playCard(card){
                if(card.type === 'kc' || card.type === 'kg'){
                    this.config.specialCard = card;
                }else{
                    this.state.client.turn = false;
                    this.cardSetOwner(card, OWNER_DISCARD_DECK); 
                    this.config.specialCard = false;
                    this.socket.emit('place', {'client': this.state.client, card});
                }
            },
            playCardSpecial(cardId, type){
                const card = this.state.game.cards.find(function(elem){
                    return elem.id == cardId;
                });
                if(typeof card !== 'undefined'){
                    card.type = type;
                    this.playCard(card);
                }
            },
            playCardTOL(cardId){
                const card = this.state.game.cards.find(function(elem){
                    return elem.id === cardId;
                });
                if(typeof card !== 'undefined'){
                    this.playCard(card);
                }                
            },
            takeCard(){
                this.socket.emit('take', {'client': this.state.client});
            },            
            cardSetOwner(card, owner){
                switch(owner){
                    case OWNER_DRAW_DECK:
                        this.transitionToDrawDeck(card);
                    break;
                    case OWNER_DISCARD_DECK:
                        this.transitionToDiscardDeck(card);                    
                    break;
                    default:
                         this.transitionToHand(card, owner);              
                };
            },
            transitionToDrawDeck(card){
                card.owner = OWNER_DRAW_DECK;
                card.transform.x = this.config.drawPos.x + (5 - (Math.random()*10));
                card.transform.y = this.config.drawPos.y + (5 - (Math.random()*10));
                card.transform.angle = (5 - (Math.random()*10));
                card.transform.z = 150 + parseInt(card.moveId);
                card.transform.scale = 1;
                card.transform.d = 0;
            },
            transitionToDiscardDeck(card){
                card.owner = OWNER_DISCARD_DECK;
                card.transform.x = this.config.discardPos.x + (10 - (Math.random()*20));
                card.transform.y = this.config.discardPos.y + (10 - (Math.random()*20));
                card.transform.angle = (10 - (Math.random()*20));
                card.transform.z = 200;
                card.transform.scale = 1;
                card.transform.d = 0.4;
            },
            transitionToHand(card, owner){
                if(typeof this.config.players[owner] !== 'undefined'){
                    
                    const config = this.config.players[owner];
                    card.owner = owner;
                    card.transform.x = config.x + (5 - (Math.random()*10));
                    card.transform.y = config.y + (5 - (Math.random()*10));
                    card.transform.z = 300;
                    card.transform.angle = (10 - (Math.random()*20));
                    card.transform.scale = config.scale;
                    card.transform.d = 0.3;
                }
            },
            cardOnClick(card){
                if(card.owner == OWNER_DRAW_DECK && card.nextMoveValid && this.state.client.turn){
                    this.takeCard();
                    this.cardSetOwner(card, this.self);
                    this.state.client.turn = false;
                }else if(card.owner == this.self && card.nextMoveValid){
                    this.playCard(card);                    
                }
            },
            cardTransitionFinish(card){
                for(let i=0; i<this.state.clients.length; i++){
                    this.updateHand(this.state.clients[i].name);
                }    
            },
            initDeck(data){                 
                this.state.game.cards = data;
                for(let i=0; i<this.state.game.cards.length; i++){                    
                    this.cardSetOwner(this.state.game.cards[i], this.state.game.cards[i].owner);                               
                }                 
            },
            updateHand(player){
                const clientCards = [];
                for(let i=0; i<this.state.game.cards.length; i++){
                    if(this.state.game.cards[i].owner == player){
                        clientCards.push(this.state.game.cards[i]);
                    }
                }
                clientCards.sort(function(a,b){
                    if(a.type < b.type)return -1;
                    if(a.type > b.type)return 1;                    
                    return 0;
                });
                const config = this.config.players[player];
                const scale = (player === this.self)?1.2:this.config.opponentCardScale;
                const pivotSetting = (player === this.self)?400:200;
                const angleRangeDiv = (player === this.self)?7:9;
                const maxAngle = (player === this.self)?50:35;
                const cardsCount = clientCards.length;
                let angleRange = (cardsCount * 30) / angleRangeDiv;
                angleRange = Math.min(angleRange, maxAngle);
                const angleMin = -(angleRange / 2);
                const angleMax = (angleRange / 2);
                const angleStep = (angleMax - angleMin) / (cardsCount - 1);
                let angle = angleMin;
                let posZ = 50;
                for(let i=0; i<clientCards.length; i++){
                    const cosi = (1 - Math.cos(angle * (Math.PI / 180))) * pivotSetting;
                    const sini = (Math.sin(angle * (Math.PI / 180))) * pivotSetting;
                    clientCards[i].transform.angle = angle;
                    if(typeof config !== 'undefined'){
                        clientCards[i].transform.x = config.x + sini;
                        clientCards[i].transform.y = config.y + cosi;
                    }
                    clientCards[i].transform.z = posZ;
                    clientCards[i].transform.scale = scale;
                    clientCards[i].transform.d = 0.05;
                    posZ++;
                    angle += angleStep;
                }
            },
            updateDiscardDeck(){
                const clientCards = [];
                for(let i=0; i<this.state.game.cards.length; i++){
                    if(this.state.game.cards[i].owner == OWNER_DISCARD_DECK){
                        clientCards.push(this.state.game.cards[i]);
                    }
                }
                clientCards.sort(function(a,b){
                    if(parseInt(a.moveId) < parseInt(b.moveId))return -1;
                    if(parseInt(a.moveId) > parseInt(b.moveId))return 1;                    
                    return 0;
                });
                let posZ = 0;
                for(let i=0; i<clientCards.length; i++){
                    clientCards[i].transform.z = posZ;
                    posZ++;
                }
            },            
            processEvents(){
                for(let i=0; i<this.state.game.events.length; i++){
                    const event = this.state.game.events[i];
                    if(typeof this.state.game.cards[event.cardId] !== 'undefined'){
                        this.cardSetOwner(this.state.game.cards[event.cardId], event.newOwner);
                    }
                }
            },
            updateState(cards){
                for(let i=0; i<this.state.game.cards.length; i++){
                    if(typeof cards[i] === 'undefined')continue;
                    this.state.game.cards[i].moveId = cards[i].moveId;    
                    if(cards[i].owner !== this.state.game.cards[i].owner){
                        this.cardSetOwner(this.state.game.cards[i], cards[i].owner);
                    }
                    this.state.game.cards[i].owner = cards[i].owner;
                    this.state.game.cards[i].type = cards[i].type;    
                    this.state.game.cards[i].nextMoveValid = cards[i].nextMoveValid;                    
                }
            },
            gameStateResponse(response){
                // console.log(response);
                this.state.client = response.client;
                this.state.clients = response.clients;
                
                this.state.game.events = response.game.events;
                this.state.game.winner = response.game.winner;
                this.state.game.ready = response.game.ready;
                
                if(!this.config.initialized && response.game.cards.length > 0){
                    this.config.initialized = true;
                    this.initDeck(response.game.cards);
                
                }else if(this.config.initialized && response.game.events.length > 0){
                    if(!this.config.playersInitialized){
                        this.config.playersInitialized = true;
                        this.initClientsConfig(this.state.clients);
                    }              
                    this.processEvents();
                }
                this.updateState(response.game.cards);
                this.updateDiscardDeck();
            },
        }
    }
</script>

<style scoped>
    .frame{
        top:5px;
        position:relative;
        width:800px;
        margin:0 auto;    
    }
    .board-overlay{
        position:absolute;
        width:100%;
        height:100%;
        transform: translateZ(500px);
    }
</style>