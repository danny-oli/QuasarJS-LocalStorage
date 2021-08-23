<template>
  <div class="q-pa-md q-mt-xl row justify-center items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img :src="user.avatar_url" />

      <q-card-section>
        <div class="text-overline text-orange-9">Git User: {{ user.login }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ user.name }}</div>
        <div class="text-caption text-grey">Type: {{ user.type }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          flat
          @click="expanded = !expanded"
          color="primary"
          label="Open to view Json response"
        />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ user.id ? user : user.message }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "UserCard",
  setup() {
    return {
      expanded: ref(false),
      lorem: "JSON Data.",
    };
  },
  props: ["user"],
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
