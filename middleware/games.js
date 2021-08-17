import axios from 'axios';

export default function ({store}) {
  axios.get('https://fire-nuxt-8c25b-default-rtdb.firebaseio.com/juegos.json')
  .then(res => {
    store.commit('llenar', res.data)
  })
}