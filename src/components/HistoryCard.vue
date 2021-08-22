<template>
    <q-card class="user-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="user.avatar_url" />
          </q-avatar>
        </q-item-section>
        <div class="user-card__name">
          <span>{{user.name}}</span>
        </div>
        <q-btn class="q-ml-md" flat round color="primary" icon="search" />
        <q-btn class="q-ml-md" flat round color="primary" icon="list" />
      </q-item>
    </q-card>
</template>

<script>
export default {
  name: "HistoryCard",

  props: ['user']
};
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__name {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>