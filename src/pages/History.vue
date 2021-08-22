<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">History</h5>

    
    <div
      id="card-div"
      v-if="searchHistory"
      class="q-pa-md row items-start q-gutter-md"
    >
      <q-card class="user-card" v-for="user in searchHistory" :key="user._uid">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="../assets/images/profile-picture.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
            <q-item-label>
              {{ user.login }}
              <q-btn
                @click.stop="repeatSearchRequest(user)"
                flat
                round
                color="primary"
                icon="star"
              />
            </q-item-label>
          </q-item-section>
        </q-item>

        <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { date, uid } from "quasar";

export default defineComponent({
  data() {
    return {
      enteredValue: "",
    };
  },

  methods: {
    
    async repeatSearchRequest(user) {
      const res = await fetch(user.url);
      const data = await res.json();
      const timeStamp = Date.now();
      data.date = date.formatDate(timeStamp, "YY-M-DD HH:mm:ss");
      data._uid = uid();
      this.saveSearch(data);
      this.enteredValue = "";
      console.log(data);
    },
    saveSearch(data) {
      this.$store.commit("storeSearchHistory", data);
    },
    
  },
  components: {},
  computed: {
    searchHistory() {
      return this.$store.getters.searchHistory;
    },
  },
});
</script>

<style lang="scss" scoped>
#search-box {
  display: flex;
  height: 70px;
  align-items: center;
  margin-bottom: 100px;
}

#result-profile-picture {
  width: 50px;
  height: 50px;
}
#card-item {
  display: flex;
}
.card-div {
  display: flex;
}
.user-card {
  width: 100%;
  max-width: 250px;
}
</style>
