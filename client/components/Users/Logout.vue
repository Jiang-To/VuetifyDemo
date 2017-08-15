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
    let _this = this;
    _this.$store.dispatch('logout')
      .then(() => {
        _this.$router.push('/')
      })
  }
}
</script>

<style>
  
</style>
