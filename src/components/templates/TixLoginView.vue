<template>
  <div class="login-view">
    <h1>Kanban App</h1>
    <TixLoginForm :onlogin="handleLogin"/>
  </div>
</template>

<script>
import TixLoginForm from '@/components/molecules/TixLoginForm.vue'

export default {
  name: 'TixLoginView',

  components: {
    TixLoginForm
  },

  methods: {
    handleLogin (authInfo) {
      return this.$store
        .dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) {
      return Promise.reject(err)
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
