<template>
  <div>
    <LikeHeader>
    </LikeHeader>
    <LikeNumber v-bind:total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <button v-on:click="currentComponet = 'Home'">Home</button>
    <button v-on:click="currentComponet = 'About'">About</button>
    <keep-alive>
      <component v-bind:is="currentComponet"></component>
    </keep-alive>
  </div>
</template>
<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
export default {
  data(){
      return {
          number:10,
          currentComponet: "Home"
      }
  },
  components: {
      LikeHeader,
      About,
      Home,
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
h1 {
  color: red;
}
</style>