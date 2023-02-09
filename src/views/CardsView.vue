<template>
    <div class="cards">
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
      
      <div class="content">
        <div class="card" :style='cardClass(card.attr)' v-for="card in cards" :key="card" :idol="card.idol" :attr="card.attr">
            <img :src="getImg(card.id)"/>
            <span class="title">{{ card.nameen }}</span>
            <span class="idol">{{ card.idol }}</span>
            <span hidden v-if="card.da0" class="stat">{{ card.da0 }}/{{ card.vo0 }}/{{ card.pf0 }}</span>
        </div>
      </div>
      
    </div>
  </template>
  
  <style scoped>
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
    width: 110px;
    justify-content: center;
    margin-top: 10px
  }
  img{
    max-height: 80px;
    margin: auto;
  }
  .title{
    font-size: 14px;
    margin-top: 5px;
    font-stretch: condensed;
    font-weight: 600;
  }
  .idol, .stat{
    font-size: 12px;
    font-stretch: condensed;
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
    box-shadow: 3px 3px 0px #92929280;
  }
  .typeFilter{
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: solid 1px black;
    border-radius: 25px;
    padding: 5px 15px;
    margin: 5px;
  }
  .spaDiv{
    border: solid 1px #EA4362;
    color: #EA4362;
    background-color: #EA436280;
    font-weight: 600;
  }
  .briDiv{
    border: solid 1px #59c8f8;
    color: #59c8f8;
    background-color: #59c8f880;
    font-weight: 600;
  }
  .gliDiv{
    border: solid 1px #95ea50;
    color: #95ea50;
    background-color: #95ea5080;
    font-weight: 600;
  }
  .flaDiv{
    border: solid 1px #F9D548;
    color: #F9D548;
    background-color: #F9D54880;
    font-weight: 600;
  }
  .typeFilter img{
    cursor: pointer;
    height: 30px;
    margin-right: 5px;
  }
  .typeFilter span{
    font-stretch: condensed;
    margin: auto;
    font-size: 18px;
    filter: brightness(50%);
  }

  .off{
    opacity: 0.8;
    filter: grayscale();
  }
  </style>
  
  <script>
  // @ is an alias to /src
  import cardData from '../assets/cards.json'
  
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
        flaIcon: "../assets/img/attr/fla.png"
      }
    },
    components: {
    },
    methods:{
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
            return this.SPAFilter? {display: 'inline-grid'} : {display: 'none'}
          case 'BRI':
            return this.BRIFilter? {display: 'inline-grid'} : {display: 'none'}
          case 'GLI':
            return this.GLIFilter? {display: 'inline-grid'} : {display: 'none'}
          case 'FLA':
            return this.FLAFilter? {display: 'inline-grid'} : {display: 'none'}
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
      }
    }
  }
  </script>
  