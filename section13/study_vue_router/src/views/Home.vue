<template>
  <div>
      <router-view></router-view>
      <h3>Home</h3>
      <button @click="toUsers">Usersのページへ</button>
      <p>{{ doubleCount }}</p>
      <p>{{ tripleCount }}</p>
      <!-- <input type="text" :value="message" @input="updateMessage"> -->
      <input type="text" v-model="message">
      <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters("count", ["doubleCount", "tripleCount"]),
        // doubleCount() {
        //     return this.$store.getters["count/doubleCount"];
        // },
        // tripleCount() {
        //     return this.$store.getters["count/tripleCount"];
        // },
        // message() {
        //     return this.$store.getters.message;
        // }
        message: {
            get() {
                return this.$store.getters.message;
            },
            set(value) {
                this.$store.dispatch("updateMessage",value)
            }
        }
    },
    // computed: {
    //     doubleCount() {
    //         return this.$store.getters.doubleCount;
    //     },
    //     tripleCount() {
    //         return this.$store.getters.tripleCount;
    //     }
    // },
    methods: {
        toUsers() {
            this.$router.push({
                name: "users-id-profile",
                params: {id:1}
            })
            // this.$router.push("users");
            // this.$router.push({path:"users"});
        },
        // updateMessage(e) {
        //     this.$store.dispatch("updateMessage", e.target.value)
        // }
    }
}
</script>
