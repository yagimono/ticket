<template>
  <button
    :class="classes"
    :disabled="disabled"
    type="button"
    @click="handleClick"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "TixButton",

  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // `type`に応じてクラスを動的に生成する
    classes() {
      const cls = this.type === "text" ? "-" + this.type : ""
      return [`tix-button${cls}`]
    }
  },

  methods: {
    handleClick(ev) {
      this.$emit("click", ev)
    }
  }
};
</script>

<style scoped>
.tix-button {
  padding: 0.6em 1.3em;
}
.tix-button-text {
  border: none;
  padding-right: 0;
  padding-left: 0;
}
</style>

