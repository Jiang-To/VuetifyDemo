<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <!-- menu  -->
    <v-btn flat v-if="!isAuthenticated" to="/login">Login</v-btn>
    <v-btn flat v-if="isAuthenticated" to="/">{{ user.username}}</v-btn>
  
  </v-toolbar-items>
</template>

<script>
import AuthStore from '@/stores/auth.store.js'

export default {
  data () {
    return {
      isAuthenticated: AuthStore.getters.isAuthenticated,
    }
  },
  computed: {
    user () {
      return AuthStore.getters.user
    }
  }
}
</script>

<style>

</style>
