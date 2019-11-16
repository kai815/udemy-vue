<template>
  <div>
    <p>いいね({{ halfNumber }}){{testProps}}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber:{
      type: Number,
      // required: true,
      default: 10
    },
    testProps: {
      type: String
    }
  },
  // data: function() {
  //   return {
  //     number: 5
  //   }
  // }
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
      increment() {
          this.$emit("my-click", this.totalNumber +1);
      }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
