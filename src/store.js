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
        }
    },
    actions: {
        updateDeck({ commit }, deck){
            commit('setDeck', deck);
        }
    },
    getters: {
        deck: (state) => state.deck,
    },
    plugins: [vuexLocal.plugin]

});