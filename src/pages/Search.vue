<template>
  <q-page class="q-pa-lg">
    <h4 class="q-mt-none">Search</h4>

    <SearchBox :search="username" @search="updateUser" />
    <UserCard :user="userData" v-if="userData" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import SearchBox from "../components/SearchBox.vue";
import UserCard from "../components/UserCard.vue";

export default defineComponent({
  name: "SearchPage",
  components: {
    SearchBox,
    UserCard,
  },
  data: () => ({
    username: "",
    userData: null,
  }),
  created() {
    const { user } = this.$route.query;
    if (user) this.username = user;
  },
  methods: {
    updateUser(user) {
      console.log(user);
      this.userData = user;
    },
  },
});
</script>

<style lang="scss" scoped>
#search-box {
  display: flex;
  height: 70px;
  align-items: center;
}
</style>
