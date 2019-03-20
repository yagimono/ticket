<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="message"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Foo } from '@/api'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      message: 'あああ'
    }
  },
  created () {
    Foo.fetchMsg()
      .then(res => {
        this.message = res
      })
  }
}
</script>
