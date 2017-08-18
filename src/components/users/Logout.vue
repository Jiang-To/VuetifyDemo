<template>
  <div>
  </div>
</template>

<script>
import types from '../../store/types'

export default {
  created () {
    this.$store.dispatch(types.auth.logout)
      .then(() => {
        this.$router.push('/')
      })
  }
}
</script>

<style>

</style>
