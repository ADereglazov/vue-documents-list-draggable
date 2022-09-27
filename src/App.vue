<template>
  <MainTools class="app-main-tools" />
  <section>
    <h2 class="visually-hidden">Операции со списком документов</h2>
    <SearchInput class="app-search-input" />
    <DocumentsListCategory />
    <DocumentsList />
  </section>
</template>

<script setup>
import MainTools from "@/components/MainTools.vue";
import SearchInput from "@/components/SearchInput.vue";
import DocumentsListCategory from "@/components/DocumentsListCategory.vue";
import DocumentsList from "@/components/DocumentsList.vue";
</script>

<style scoped>
.app-main-tools {
  margin-bottom: 30px;
}

.app-search-input {
  margin-bottom: 35px;
}
</style>
