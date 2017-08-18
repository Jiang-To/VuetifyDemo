<template>
  <v-app>
     <v-toolbar dark class="indigo">
      <v-toolbar-title>
        <v-icon class="fa fa-cubes"></v-icon>
        <router-link to="/" tag="span" style="cursor:pointer">EQP Pool</router-link>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <app-menu></app-menu>
      <v-spacer></v-spacer>
      <!-- user components -->
      <app-user></app-user>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>

import AppUser from './components/layout/AppUser'
import AppMenu from './components/layout/AppMenu'

export default {
  data () {
    return {
    }
  },
  components: {
    AppUser,
    AppMenu
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
