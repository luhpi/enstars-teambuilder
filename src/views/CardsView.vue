<template>
    <div class="cards">
      <div class="d-flex justify-content-between m-auto">
        <div class="filters">
          <div class="typeFilter" @click="filter('spa')" :class="divClass('spa')">
            <img :src="spaIcon" :class="filterClass('spa')"/>
            <span>SPARK</span>
          </div>
          <div class="typeFilter" @click="filter('bri')" :class="divClass('bri')">
            <img :src="briIcon" :class="filterClass('bri')"/>
            <span>BRILLIANT</span>
          </div>
          <div class="typeFilter" @click="filter('gli')" :class="divClass('gli')">
            <img :src="gliIcon" :class="filterClass('gli')"/>
            <span>GLITTER</span>
          </div>
          <div class="typeFilter" @click="filter('fla')" :class="divClass('fla')">
            <img :src="flaIcon" :class="filterClass('fla')"/>
            <span>FLASH</span>
          </div>
        </div>
        <div class="add-cards btn-group m-auto" style="margin-bottom: 15px!important; margin-right: 30px!important;">
          <label class="btn" @click="addToDeck"> ADD CARDS </label>
          <label class="btn btn-danger" @click="clearCards"> CLEAR </label>
        </div>
      </div>

      <div class="content">
        <div class="card" :style='cardClass(card.attr)' v-for="card in cards" :key="card" :idol="card.idol" :attr="card.attr">
            <input type="checkbox" class="btn-check" autocomplete="off" :id='card.id' :value="card.id" v-model="cardList">
            
            <label class='btn' :for="card.id">
              <img :src="getImg(card.id)" rel="preload"/>
            </label>
            
          </div>
      </div>
      
    </div>
  </template>
  
  <style scoped>
  *{
    transition: 0.2s ease-in-out;
  }
  .content{
    overflow-y: scroll;
    height: 82vh;
    margin: 10px;
    margin-right: 25px;
    padding: 10px;
    border: solid 1px #000000;
    border-radius: 10px;
  }
  .card{
    display: inline-grid;
    justify-content: center;
    padding: 10px;
    height: fit-content;
    width: fit-content;
    border: none;
    transition: 0.2s ease-in-out;
    border-radius: 0%;
  }
  .card:hover{
    /* box-shadow: inset 0px 0px 10px rgb(0, 110, 235, 0.9); */
    padding: 8px;
    background-color: rgb(90, 160, 234, 0.7);
  }
  .btn{
    padding: 0;
  }

  .card img{
    filter: grayscale(70%);
  }

  div:has(> .btn-check:checked){ 
    background-color: rgb(90, 160, 234, 0.5)!important;
    padding: 8px;
  }
  /* div:focus, .btn-check:checked+.btn{
    border: solid 1px rgb(0, 110, 235, 0.5);
  } */
  div:has(> .btn-check:checked) img,
  .card:hover img{
    max-height: 75px;
    filter: grayscale(0%);
  }
  input[type=checkbox] {
    visibility: hidden;
  }

  .btn-check:checked+.btn{
    color: transparent;
  }

  img{
    max-height: 71px;
    margin: auto;
    transition: 0.2s ease-in-out;
  }
  .title{
    font-size: 14px;
    margin-top: 5px;
    font-stretch: condensed;
    font-weight: 600;
  }
  .filters{
    display: flex;
    justify-content: center;
    padding: 15px;
    width: fit-content;
    background: white;
    border: solid 1px #4444dd;
    border-radius: 15px 5px;
    margin: 15px auto;
    margin-left: 10px!important;
    box-shadow: 3px 3px 0px #92929280;
  }
  .typeFilter{
    display: flex;
    cursor: pointer;
    margin: 5px;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 4px;
    border: 2px solid rgb(0, 0, 0, 0.8);
    border-radius: 100px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  }
  .spaDiv{
    border: solid 2px #EA4362;
    color: #EA4362;
    background-color: #EA436240;
  }
  .briDiv{
    border: solid 2px #59c8f8;
    color: #59c8f8;
    background-color: #59c8f840;
  }
  .gliDiv{
    border: solid 2px #95ea50;
    color: #95ea50;
    background-color: #95ea5040;
  }
  .flaDiv{
    border: solid 2px #F9D548;
    color: #F9D548;
    background-color: #f9d54840;
  }
  .typeFilter img{
    cursor: pointer;
    height: 20px;
  }
  .typeFilter span{
    font-stretch: condensed;
    margin: auto;
  }

  .off{
    opacity: 0.8;
    filter: grayscale(100%);
  }

  .add-cards .btn{
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 4px;
    border: 2px solid #4444dd;
    color: #4444dd;
    border-radius: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-left: 15px!important;
    margin-top: auto;
    height: fit-content;
  }
  .add-cards .btn:hover{
    background-color: #4444dd;
    color: white;
  }

  .add-cards .btn-danger{
    border-color: #dc3545;
    color: #dc3545;
    background-color: transparent;
  }
  .add-cards .btn-danger:hover{
    background-color: #dc3545;
  }
  </style>
  
  <script>
  // @ is an alias to /src
  import cardData from '../assets/cards.json'
  import { mapState, mapActions, mapGetters } from "vuex";
  
  export default {
    name: 'CardsView',
    data() {
      return {
        cards: cardData,
        SPAFilter: true,
        BRIFilter: true,
        GLIFilter: true,
        FLAFilter: true,
        spaIcon: "../assets/img/attr/spa.png",
        briIcon: "../assets/img/attr/bri.png",
        gliIcon: "../assets/img/attr/gli.png",
        flaIcon: "../assets/img/attr/fla.png",
        cardList: [],
      }
    },
    computed: {
      ...mapState(["deck"]),
      ...mapGetters(["deck"])
    },
    mounted(){
      
    },
    methods:{
      ...mapActions(["updateDeck"]),
      getImg(id){
        return "../assets/img/cards/icons/"+id+".png"
      },
      filterClass(attr){
        switch(attr){
          case 'spa':
            return this.SPAFilter? 'on' : 'off'
          case 'bri':
            return this.BRIFilter? 'on' : 'off'
          case 'gli':
            return this.GLIFilter? 'on' : 'off'
          case 'fla':
            return this.FLAFilter? 'on' : 'off'
        }
      },
      divClass(attr){
        switch(attr){
          case 'spa':
            return this.SPAFilter? 'spaDiv' : ''
          case 'bri':
            return this.BRIFilter? 'briDiv' : ''
          case 'gli':
            return this.GLIFilter? 'gliDiv' : ''
          case 'fla':
            return this.FLAFilter? 'flaDiv' : ''
        }
      },
      cardClass(attr){
        switch(attr){
          case 'SPA':
            return this.SPAFilter? {display: 'inline-flex'} : {display: 'none'}
          case 'BRI':
            return this.BRIFilter? {display: 'inline-flex'} : {display: 'none'}
          case 'GLI':
            return this.GLIFilter? {display: 'inline-flex'} : {display: 'none'}
          case 'FLA':
            return this.FLAFilter? {display: 'inline-flex'} : {display: 'none'}
        }
      },
      filter(attr){
        switch(attr){
          case 'spa':
            this.SPAFilter = !this.SPAFilter
            break
          case 'bri':
            this.BRIFilter = !this.BRIFilter
            break
          case 'gli':
            this.GLIFilter = !this.GLIFilter
            break
          case 'fla':
            this.FLAFilter = !this.FLAFilter
            break
        }
      },
      clearCards(){
        this.cardList = []
      },
      addToDeck(){
        var stats = this.cardList.map((card)=>{
          var c = {
            id: card,
            copies: 1,
            da: this.cards[card].da0,
            vo: this.cards[card].vo0,
            pf: this.cards[card].pf0
          }
          return c
        })

        this.updateDeck([1, stats])
      }
    }
  }
  </script>
  