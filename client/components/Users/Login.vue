<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <v-card>
          <v-card-media class="white--text" height="100px">
            <v-container blue-grey fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-center flexbox>
                  <span class="headline">Login </span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
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
  
                <v-flex xs4 offset-xs4>
                  <v-btn block class="blue-grey white--text" :loading="isLoggingIn" @click.native="login">
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
  </div>
</template>

<script>
import AuthStore from '@/stores/auth.store.js'

export default {
  data () {
    return {
      username: '',
      password: '',
      isPassowrdHidden: true,
      isLoggingIn: false
    }
  },
  methods: {
    login () {
      this.isLoggingIn = true;
      this.$store.dispatch('login', { username: this.username, password: this.password })
        .then(() => {
          // redirect to the previous router or home page
          let redirectPath = this.$router.currentRoute.query.from || '/'
          this.$router.push(redirectPath)
        });
    }
  },
  store: AuthStore
}

</script>

<style>

</style>
