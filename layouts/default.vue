<template>
  <v-app light>
    <v-app-bar fixed app>
      <v-app-bar-title v-text="title"></v-app-bar-title>
      <v-btn small icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn small icon to="/agregar/">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      title: 'FIRE NUXT'
    }
  }
}
</script>
