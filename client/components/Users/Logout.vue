<template>
  <div>
    this is the logout page
  </div>
</template>

<script>
import AuthStore from  '@/stores/auth.store.js'

export default {
  store: AuthStore,
  mounted () {
    this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/')
      })
  }
}
</script>

<style>
  
</style>
