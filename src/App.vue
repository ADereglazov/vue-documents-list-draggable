<template>
  <MainTools class="app-main-tools" />
  <section>
    <h2 class="visually-hidden">Операции со списком документов</h2>
    <SearchInput class="app-search-input" />
    <DocumentsListCategory
      :list="documentsListCategory"
      class="app-documents-category"
      @change-doc-list-category="onChangeDocumentsListCategory"
    />
    <DocumentsList
      :list="documentsList"
      @change-doc-list="onChangeDocumentsList"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import MainTools from "@/components/MainTools.vue";
import SearchInput from "@/components/SearchInput.vue";
import DocumentsListCategory from "@/components/DocumentsListCategory.vue";
import DocumentsList from "@/components/DocumentsList.vue";

const documentsListCategory = ref([
  {
    title: "Обязательные для всех",
    comment: "Документы, обязательные для всех сотрудников без исключения",
    indicators: ["#ff238d", "#ffb800", "#ff8d23"],
    documents: [
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
    ],
  },
  {
    title: "Обязательные для трудоустройства",
    comment:
      "Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж",
    indicators: [],
    documents: [
      { title: "Мед. книжка", comment: "", indicators: [], required: false },
    ],
  },
  {
    title: "Специальные",
    comment: "",
    indicators: [],
    documents: [],
  },
]);

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

function onChangeDocumentsListCategory(e) {
  documentsListCategory.value = [...e];
}

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

.app-documents-category {
  margin-bottom: 15px;
}
</style>
