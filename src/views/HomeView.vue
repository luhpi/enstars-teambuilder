<template>
  <div class="home">
    <div id="render">
      <img :src='imgURL'/>
    </div>
  </div>
</template>

<style>
  img{
    height: 60vh;
    position: fixed;
    bottom: 0;
    right: -25vh;
    filter: drop-shadow(2vh 1.5vh 0 #4444dd);
  }
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      img: 1,
      imgURL: ''
    }
  },
  components: {
  },
  mounted(){
    this.img = Math.floor(Math.random() * 244) + 1;
    this.imgURL = '../assets/img/cards/renders/'+this.img+'.png'
    console.log(this.imgURL)
  }
}
</script>
