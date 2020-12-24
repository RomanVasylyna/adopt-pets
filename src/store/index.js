import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Importing animals arrays
import cats from '../data/cats'
import dogs from '../data/dogs'

export default new Vuex.Store({
  state: {
  cats,
  dogs
  },
  mutations: {
  appendPet: (state, {species, pet}) => {
  state[species].push(pet);
  }  
  },
  actions: {
  addPet: (context, payload) => {
  context.commit('appendPet', payload);
  }  
  },
  modules: {
  }
})
