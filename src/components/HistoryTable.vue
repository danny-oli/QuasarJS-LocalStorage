<template>
  <div id="card-div" class="q-pa-md row items-start q-gutter-md">
    <q-table
      title="List of user"
      :rows="getHistory"
      :columns="columns"
      row-key="name"
    >
      <!-- <q-td :props="props" auto-width>
        <q-btn
          size="sm"
          color="accent"
          round
          dense
          @click="props.expand = !props.expand"
          :icon="props.expand ? 'remove' : 'add'"
        />
      </q-td> -->
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
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HistoryTable",
  data() {
    return {
      enteredValue: "",
      open: false,
      columns: [
        {
          name: "Date",
          align: "center",
          label: "Date",
          field: "date",
          sortable: true,
        },
        {
          name: "Name",
          align: "center",
          label: "Name",
          field: "name",
          sortable: true,
        },
        {
          name: "Avatar",
          align: "center",
          label: "Avatar",
          field: "avatar_url",
          sortable: true,
        },
        {
          name: "Login",
          align: "center",
          label: "Login",
          field: "login",
          sortable: true,
        },
        { name: "action", label: "Action", field: "action" },
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
.card-div {
  display: flex;
}
.user-card {
  width: 100%;
  max-width: 300px;
}
</style>
