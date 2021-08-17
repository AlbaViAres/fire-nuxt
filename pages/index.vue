<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4 v-for="(item, index) in games" :key="index">
          <v-card>
            <v-layout>
              <v-flex xs5>
                <v-img :src="item.portada" height="125px" contain></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title="">
                  <div>
                    <div class="headline">{{item.nombre}}</div>
                    <div>{{item.genero}}</div>
                    <div>{{item.consola}}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-card-actions class="pa-3">
              <v-dialog width="800" style="margin-right:8px">
                <template v-slot:activator="{on}">
                  <v-btn 
                  v-on="on" 
                  color="primary">
                    Ver mas...
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline grey ligthen-2" primary-title="">
                    Sinopsis
                  </v-card-title>
                  <v-card-text>{{item.sinopsis}}</v-card-text>
                </v-card>
              </v-dialog>
              <v-btn color="warning" @click="editar(index)">Editar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['games']),
  },
  async fetch({store}) {
    await store.dispatch('get');
  },
  middleware: 'games',
  methods: {
    editar(item) {
      this.$router.push('/editar/' + item)
    }
  }
}
</script>