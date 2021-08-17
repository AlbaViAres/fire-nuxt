<template>
  <div>
    <h1>{{$route.params.id}}</h1>
    <Form boton="Editar juego" @submit="editarJuego" :game="game" @eliminar="eliminar($route.params.id)" />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import axios from 'axios';

export default {
  components: {
    Form
  },
  asyncData(context) {
    return axios.get('https://fire-nuxt-8c25b-default-rtdb.firebaseio.com/juegos/' + context.params.id + '.json')
    .then(res => {
      return {
        game: res.data
      }
    })
  },
  methods: {
    editarJuego(form) {
      axios.put('https://fire-nuxt-8c25b-default-rtdb.firebaseio.com/juegos/' + this.$route.params.id + '.json', form)
      .then(res => console.log(res))
      .catch(e => console.log(e))
      this.$router.push('/')
    },
    eliminar(index, form) {
      axios.delete('https://fire-nuxt-8c25b-default-rtdb.firebaseio.com/juegos/' + index + '.json', form)
      .then(res => console.log(res))
      .catch(e => console.log(e))
      this.$router.push('/')
    }
  }
}
</script>