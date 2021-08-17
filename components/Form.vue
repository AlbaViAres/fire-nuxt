<template>
  <div>
    <form @submit.prevent="accion">
      <v-text-field
      v-model="form.nombre"
      label="Nombre del juego"
      required 
      :counter="50">
      </v-text-field>

      <v-text-field
      v-model="form.genero"
      label="Género del juego"
      required 
      :counter="50">
      </v-text-field>

      <v-select 
      v-model="form.consola"
      :items="items"
      label="Consola"
      required>
      </v-select>

      <v-text-field
      v-model="form.portada"
      label="Portada"
      required>
      </v-text-field>

      <v-textarea
      v-model="form.sinopsis"
      label="Sinopsis"
      required>
      </v-textarea>

      <v-btn color="primary" type="submit">{{boton}}</v-btn>
      <v-btn v-show="form.btnEliminar" color="error" @click="$emit('eliminar')">Eliminar Juego</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    boton:'',
    game: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      form: this.game ? {...this.game, btnEliminar:true} : {
        nombre: '',
        genero: '',
        consola: '',
        portada: '',
        sinopsis: ''
      },
      items:['PLAYSTATION 4', 'XBOX ONE', 'SWITCH', 'PC']
    }
  },
  methods: {
    accion() {
      this.$emit('submit', this.form)
    }
  }
}
</script>