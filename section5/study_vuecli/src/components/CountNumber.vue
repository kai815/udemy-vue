<template>
<div>
  <p v-border:solid.round.shadow="{width: '5px', color:'red'}">Home</p>
  <h2>{{ title | upperCaseTitle }}</h2>
  <h2>{{ title | lowerCase }}</h2>
  <p>{{number}}</p>
  <button @click="number++">+1</button>
</div>
</template>
<script>
import { tokyoNumber } from "@/tokyoNumber"
export default {
    mixins: [tokyoNumber],
}
</script>
