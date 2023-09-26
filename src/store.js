import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default createStore({
    state: {
        deck: []
    },
    mutations: {
        setDeck(state, deck){
            state.deck = deck;
        },
        addToDeck(state, deck){
            state.deck.add(deck);
        }
    },
    actions: {
        updateDeck({ commit }, deck){
            commit('setDeck', deck);
        },
        newDeck({ commit }, deck){
            commit('addToDeck', deck)
        }
    },
    getters: {
        deck: (state) => state.deck,
    },
    plugins: [vuexLocal.plugin]

});