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
import { mapActions } from "vuex";
import api from '../api'
export default {
  name: "SearchBox",
  data() {
    return {
      enteredValue: "",
    };
  },
  props: ['search'],
  async mounted () {
    if(this.search) {
      this.enteredValue = this.search
      await this.getGithubUserByUsername()
    }
  },
  methods: {
    ...mapActions('storeSearch',["setHistory"]),
    async getGithubUserByUsername() {
      const response = await api.getGithubUserByUsername(this.enteredValue)
      console.log(response);
      this.saveSearch(response);
      this.$emit('search', response)
    },
    saveSearch(data) {
      this.setHistory(data)
    },
  },
};
</script>
