<template>
  <v-alert error :value="isOpen">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: ['text'],
  computed: {
    isOpen: function () {
      return this.text !== null && this.text !== undefined && this.text.length
    }
  }
}
</script>

<style>

</style>
