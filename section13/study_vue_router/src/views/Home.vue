<template>
  <div>
      <router-view></router-view>
      <h3>Home</h3>
      <button @click="toUsers">Usersのページへ</button>
  </div>
</template>

<script>
export default {
    methods: {
        toUsers() {
            this.$router.push({
                name: "users-id-profile",
                params: {id:1}
            })
            // this.$router.push("users");
            // this.$router.push({path:"users"});
        }
    }
}
</script>
