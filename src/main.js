import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import './assets/sass/style.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

const store = new Vuex.Store({
    state: {
      decks: [
        {
          id: null,
          cards: null
        },
      ]
    },

    getters:{
      getDeckById: (state) => (id) =>{
          return state.decks.find(deck => deck.id === id)
      },
      allDecks: state => state.decks
    },

    mutations: {  
      UPDATE_DECK(state, newDeck){
        const {id , cards} = newDeck;
        let oldDeck = state.decks.find((d) => d.id === id)
        oldDeck.cards = cards
      },

      ADD_DECK(state, cards){
        state.decks.push({cards})
      },

      DELETE_DECK(state, id){
        state.decks.splice(id, 1)
      }

    },

    actions: {
      updateDeck({ commit }, deck){
        commit('UPDATE_DECK', deck);
      },

      addDeck({ commit }, cards){
        commit('ADD_DECK', cards);
      },

      deleteDeck({ commit }, id){
        commit('DELETE_DECK', id);
      }
    }
  })

var app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
