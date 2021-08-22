<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Search</h5>

    <SearchBox />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import  SearchBox  from "../components/SearchBox.vue";

export default defineComponent({
  name:'',
  components:{
    SearchBox
  }
});
</script>

<style lang="scss" scoped>
#search-box {
  display: flex;
  height: 70px;
  align-items: center;
}
</style>
