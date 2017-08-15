<template>
  <div>
    This is the home page {{ text}}
  </div>
</template>

<script>
import * as types from '../stores/mutation-types.js'

export default {
  data () {
    return {
      text: types.auth_login
    }
  }
}
</script>

<style>

</style>
