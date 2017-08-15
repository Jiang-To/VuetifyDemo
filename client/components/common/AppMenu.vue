<template>
  <v-toolbar-items class="hidden-sm-and-down ml-5" v-if="isAuthenticated">
    <v-btn flat v-for="menu in menus" :key="menu.title" :to="menu.path">
      {{ menu.title }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
import AuthStore from '@/stores/auth.store.js'

export default {
  data (){
    return {
      menus:[
        {title: 'fake1',path:'/fake1'},
        {title: 'fake2',path:'/fake2'},
        {title: 'fake3',path:'/fake3'},
      ]
    }
  },
  computed:{
    isAuthenticated () {
      return AuthStore.getters.isAuthenticated
    }
  }
}
</script>

<style>

</style>
