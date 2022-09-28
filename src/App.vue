<template>
  <MainTools class="app-main-tools" />
  <section>
    <h2 class="visually-hidden">Операции со списком документов</h2>
    <SearchInput class="app-search-input" />
    <DocumentsListCategory />
    <DocumentsList
      :list="documentsList"
      @changeDocList="onChangeDocumentsList"
    />
  </section>
</template>

<script setup>
import MainTools from "@/components/MainTools.vue";
import SearchInput from "@/components/SearchInput.vue";
import DocumentsListCategory from "@/components/DocumentsListCategory.vue";
import DocumentsList from "@/components/DocumentsList.vue";
import { ref } from "vue";

const documentsList = ref([
  {
    title: "Тестовое задание кандидата",
    comment:
      "Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",
    indicators: ["#0066ff", "#8e9cbb"],
    required: false,
  },
  {
    title: "Трудовой договор",
    comment: "",
    indicators: [],
    required: false,
  },
  { title: "Мед. книжка", comment: "", indicators: [], required: false },
]);

function onChangeDocumentsList(e) {
  documentsList.value = [...e];
}
</script>

<style scoped>
.app-main-tools {
  margin-bottom: 30px;
}

.app-search-input {
  margin-bottom: 35px;
}
</style>
