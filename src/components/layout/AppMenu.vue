<template>
  <v-toolbar-items class="hidden-sm-and-down ml-5" v-if="isAuthenticated">
    <v-btn flat v-for="menu in menus" :key="menu.title" :to="menu.path">
      {{ menu.title }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>

export default {
  data () {
    return {
      menus: [
        { title: 'fake1', path: '/fake1' },
        { title: 'fake2', path: '/fake2' },
        { title: 'fake3', path: '/fake3' }
      ]
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style>

</style>
