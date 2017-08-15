<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat v-if="!isAuthenticated" to="/login">Login</v-btn>
    <!-- <v-btn flat v-if="isAuthenticated" to="/">{{ user.username }} </v-btn> -->
  
    <v-menu id="user-menu" class="indigo" v-if="isAuthenticated">
      <v-btn flat slot="activator" class="indigo">
        <span>{{ user.username }} </span>
        <v-icon dark>arrow_drop_down</v-icon>
      </v-btn>
      <v-list id="user-menu-options">
        <v-list-tile v-for="item in userMenus" :key="item.title" :to="item.path">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</template>

<script>
import AuthStore from '@/stores/auth.store.js'

export default {
  data () {
    return {
      userMenus: [{
        title: 'Profile',
        path: '/profile'
      }, {
        title: 'Logout',
        path: '/logout'
      }]
    }
  },
  store: AuthStore,
  computed: {
    user () {
      return this.$store.getters.user
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style>
#user-menu button {
  height: 64px;
  margin-top: 0px;
}

#user-menu-options {
  margin-top: 64px;
}
</style>
