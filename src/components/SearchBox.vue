<template>
  <div id="search-box" class="q-gutter-md" style="max-width: 100%">
    <q-input
      @keyup.enter="getGithubUserByUsername"
      label="Github Username"
      style="min-width: 50%"
      v-model="enteredValue"
    />
    <q-btn
      @click.prevent="getGithubUserByUsername"
      align="between"
      class="btn-fixed-width q-mt-auto q-ml-xl"
      color="primary"
      label="Search"
      icon="search"
    />
  </div>
</template>

<script>
import { date, uid } from "quasar";

export default {
  name: "SearchBox",
  data() {
    return {
      enteredValue: "",
    };
  },
  methods: {
    async getGithubUserByUsername() {
      const username = this.enteredValue;
      const uri = "https://api.github.com/users/" + username;
      const res = await fetch(uri);
      const data = await res.json();
      const timeStamp = Date.now();
      data.date = date.formatDate(timeStamp, "YY-M-DD HH:mm:ss");
      data._uid = uid();
      this.saveSearch(data);
      this.enteredValue = "";
      //   console.log(data);
    },
    async repeatSearchRequest(user) {
      const res = await fetch(user.url);
      const data = await res.json();
      const timeStamp = Date.now();
      data.date = date.formatDate(timeStamp, "YY-M-DD HH:mm:ss");
      data._uid = uid();
      this.saveSearch(data);
      this.enteredValue = "";
      //   console.log(data);
    },
    saveSearch(data) {
      this.$store.commit("storeSearchHistory", data);
    },
  },
};
</script>
