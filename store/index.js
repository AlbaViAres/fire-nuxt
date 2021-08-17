import axios from 'axios';

export const state = () => ({
  games: []
})

export const mutations = {
  llenar(state, value) {
    state.games = value
  }
}

export const actions = {
  async get({commit}) {
    await axios.get('https://fire-nuxt-8c25b-default-rtdb.firebaseio.com/juegos.json')
    .then(res => {
      commit('llenar', res.data)
    })
  }
}