import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Importing animals arrays
import cats from '../data/cats'
import dogs from '../data/dogs'

export default new Vuex.Store({
  state: {
  cats,
  dogs,
  pets: [...cats, ...dogs]
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
  },
  getters: {
  animalsCount: (state) => {
  return state.cats.length + state.dogs.length;
  },
  getAllCats: () => {
  return state.pets.filter((pet) => {
  return pet.species === 'cat'
  });
  },
  }
})
