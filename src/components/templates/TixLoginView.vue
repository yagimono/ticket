<template>
  <div>
    <p>ログインページ</p>
    <TixButton :type="'text'" :disabled="ralse" @click="handleClick">ログイン</TixButton>
  </div>
</template>

<script>
// TixButtonをインポート
import TixButton from '@/components/atoms/TixButton'
export default {
  name: 'TixLoginView',
  components: {
    TixButton
  },
  methods: {
    handleClick (ev) {
      alert('test')
    }
  }
}
</script>
