<template>
  <v-app toolbar>
    <v-toolbar dark class="indigo">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">Equipment Pool</router-link>
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
import AppUser from '@/components/common/AppUser'
import AppMenu from '@/components/common/AppMenu'
import MenuStore from '@/stores/menu.store.js'

export default {
  components: {
    AppUser,
    AppMenu
  },
  data () {
    return {
      menus: MenuStore.state.menus
    }
  }
}
</script>

<style>

</style>
