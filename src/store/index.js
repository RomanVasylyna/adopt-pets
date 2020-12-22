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
  },
  actions: {
  },
  modules: {
  }
})
