<template>
  <v-app toolbar>
    <v-toolbar dark class="indigo">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">Equipment Pool</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- menu  -->
        <v-btn flat v-for="menu in menus" :key="menu.title" :to="menu.path">
          {{ menu.title }}
        </v-btn>
      </v-toolbar-items>
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
import MenuStore from '@/stores/menu.store.js'

export default {
  data(){
    return {
      menus: MenuStore.state.menus
    }
  }
}
</script>

<style>

</style>
