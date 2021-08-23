<template>
  <div id="card-div" class="items-start">
    <q-table
      title="Search History Table"
      :rows="getHistory"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
    >
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <q-btn
            icon-right="refresh"
            no-caps
            flat
            dense
            @click="searchAgain(props.row)"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-Avatar="props">
        <q-td :props="props">
          <q-img
            class="avatar-picture"
            :src="props.row.avatar_url"
            no-caps
            flat
            dense
            @click="searchAgain(props.row)"
          />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HistoryTable",
  data() {
    const pagination = ref({
      sortBy: "Date",
      descending: true,
      page: 1,
      rowsPerPage: 5,
    });
    return {
      enteredValue: "",
      open: false,
      pagination,
      columns: [
        {
          name: "Date",
          align: "center",
          label: "Date",
          field: "date",
        },
        {
          name: "Name",
          align: "center",
          label: "Name",
          field: "name",
        },
        {
          name: "Avatar",
          align: "center",
          label: "Avatar",
          field: "avatar_url",
        },
        {
          name: "Login",
          align: "center",
          label: "Login",
          field: "login",
        },
        {
          name: "action",
          label: "Action",
          field: "action",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("storeSearch", ["getHistory"]),
  },
  components: {},
  methods: {
    searchAgain(row) {
      this.$router.push({ path: "/", query: { user: row.login } });
    },
    expandRow(state) {
      state.open = !state.open;
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
.avatar-picture {
  max-width: 70px !important;
}
.card-div {
  display: flex;
}
.user-card {
  width: 100%;
  max-width: 300px;
}
</style>
