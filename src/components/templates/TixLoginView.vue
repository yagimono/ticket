<template>
  <div class="login-view">
    <h1>Kanban App</h1>
    <TixLoginForm :onlogin="handleLogin"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TixLoginForm from '@/components/molecules/TixLoginForm.vue'

export default {
  name: 'TixLoginView',

  components: {
    TixLoginForm
  },

  methods: {
    ...mapActions([
      'login'
    ]),
    async handleLogin (authInfo) {
      try {
        await this.login(authInfo)
        this.$router.push({ path: '/' })
      } catch (err) {
        throw err
      }
    }
  }
}
</script>

<style scoped>
.login-view {
  width: 320px;
  margin: auto;
}
</style>
