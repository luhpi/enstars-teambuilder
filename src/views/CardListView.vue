<template>
    <div class="list">
      <div v-for="card in cards" :key="card.id" class="carta">
        <div>
          <img :src="getImg(card.id)" rel="preload" class="icon"/>
        </div>
        <div style="width: 300px;">
          <span style="font-weight: bold;">{{ card.nameen }}</span>
        </div>
        <div style="width: 20px;">
          <img :src="getIdol(card.idol)" class="head"/>
        </div>
        <div style="width: 150px;">
          <span style="margin: auto;">{{ card.idol }}</span>
        </div>
        <div class="stats">
          <span style="background-color: #ff2960;">{{ card.da0 }}</span>
          <span style="background-color: #0cc8ff;">{{ card.vo0 }}</span>
          <span style="background-color: #ffd600;">{{ card.pf0 }}</span>
        </div>
        <div class="stats">
          <span style="background-color: #ff2960;">{{ card.da1 }}</span>
          <span style="background-color: #0cc8ff;">{{ card.vo1 }}</span>
          <span style="background-color: #ffd600;">{{ card.pf1 }}</span>
        </div>
        <div class="stats">
          <span style="background-color: #ff2960;">{{ card.da2 }}</span>
          <span style="background-color: #0cc8ff;">{{ card.vo2 }}</span>
          <span style="background-color: #ffd600;">{{ card.pf2 }}</span>
        </div>
        <div class="stats">
          <span style="background-color: #ff2960;">{{ card.da3 }}</span>
          <span style="background-color: #0cc8ff;">{{ card.vo3 }}</span>
          <span style="background-color: #ffd600;">{{ card.pf3 }}</span>
        </div>
        <div class="stats">
          <span style="background-color: #ff2960;">{{ card.da4 }}</span>
          <span style="background-color: #0cc8ff;">{{ card.vo4 }}</span>
          <span style="background-color: #ffd600;">{{ card.pf4 }}</span>
        </div>
      </div>
    </div>
</template>
<style scoped>
.list{
  padding: 40px 30px;
  display: flex!important;
  flex-direction: column;
  align-items: center;

  overflow: auto;
}
.carta{
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: solid 1px #000000;
  margin-bottom: -1px;
}
.carta div{
  padding: 10px;
}
.icon{
  height: 70px;
}
.head{
  height: 50px;
}
.carta .stats{
  display: grid;
  color: white;
  padding: 0;
  border-right: solid 1px white;
}
.stats span{
  font-weight: bold;
  padding: 4px;
  width: 70px;
  height: 32px;
}
.stats span:hover{
  color: white;
}
</style>
<script>
import cardData from '../assets/cards.json'
import $ from 'jquery'

  
  export default {
    name: 'CardListView',
    data() {
      return {
        cards: cardData,
      }
    },
    mounted () {
      $("#cards").addClass('router-link-exact-active')
    },
    methods: {
      getImg(id){
        return "../assets/img/cards/icons/"+id+".png"
      },
      getIdol(name){
        return "../assets/img/idols/heads/"+name+".png"
      }
    }
    }
</script>