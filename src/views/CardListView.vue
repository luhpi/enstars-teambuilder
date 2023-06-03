<template>
    <div class="list">
    </div>
</template>
<script>
import cardData from '../assets/cards.json'
// import $ from 'jquery'

  
  export default {
    name: 'CardListView',
    data() {
      return {
        cards: cardData,
      }
    },
    mounted () {
    }
    }
</script>