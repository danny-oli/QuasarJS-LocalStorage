<template>
  <q-page class="q-pa-lg">
    <h4 class="q-mt-none">Search</h4>

    <SearchBox :search="username" @search="updateUser" />
    <UserCard :user="userData" v-if="userData" />
    <SearchPageBanner v-if="!userData"/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import SearchBox from "../components/SearchBox.vue";
import UserCard from "../components/UserCard.vue";
import SearchPageBanner from "../components/SearchPageBanner.vue";

export default defineComponent({
  name: "SearchPage",
  components: {
    SearchBox,
    UserCard,
    SearchPageBanner,
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

