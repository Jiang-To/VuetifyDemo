<template>
  <div>
    <form id="loginForm" @submit.prevent="onLogin">
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <v-card>
            <v-card-media class="white--text" height="100px">
              <v-container blue-grey fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-center flexbox>
                    <span class="headline">Login</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <app-alert style="margin-top:0px" :text="authError"></app-alert>
            <v-card-title>
              <v-container>
                <v-layout column>
                  <!-- username -->
                  <v-flex xs10 offset-xs1>
                    <v-text-field label="Username" id="username" prepend-icon="fa fa-user fa-2x" v-model="username"></v-text-field>
                  </v-flex>
                  <!-- password -->
                  <v-flex xs10 offset-xs1>
                    <v-text-field label="Password" id="password" prepend-icon="fa fa-lock fa-2x" v-model="password" :append-icon="isPassowrdHidden ? 'visibility_off' : 'visibility'" :append-icon-cb="() => (isPassowrdHidden = !isPassowrdHidden)" :type="isPassowrdHidden ? 'password' : 'text'" counter></v-text-field>
                  </v-flex>
  
                  <!-- username -->
                  <!-- <v-flex xs10 offset-xs1>
                      <v-text-field label="Username" id="username" prepend-icon="fa fa-user fa-2x" v-model="username" v-validate="'required'"></v-text-field>
                    </v-flex> -->
  
                  <v-flex xs4 offset-xs4>
                    <v-btn block class="blue-grey white--text" :loading="isLoggingIn" type="submit">
                      Login
                      <span slot="loader">Logging In...</span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </form>
  </div>
</template>

<script>
import types from '../../store/types'
import AppAlert from '../shared/AppAlert'

export default {
  components: {
    AppAlert
  },
  data () {
    return {
      username: '',
      password: '',
      isPassowrdHidden: true,
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  computed: {
    isLoggingIn () {
      return this.$store.getters.isAuthenticating
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    authError () {
      return this.$store.getters.authError
    }
  },
  watch: {
    isAuthenticated (isAuthenticated) {
      if (isAuthenticated) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onLogin () {
      let credential = { username: this.username, password: this.password }
      this.$store.dispatch(types.auth.login, credential).catch(() => { })
    }
  }
}

</script>
e
<style>

</style>
