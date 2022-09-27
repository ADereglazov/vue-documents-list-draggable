<template>
  <ul class="documents-list">
    <li v-for="item in list" :key="item.title" class="documents-list__item">
      <h4 class="documents-list__item-title">{{ item.title }}</h4>
      <ColorIndicators
        :list="item.indicators"
        class="documents-list__item-indicators"
      />
      <p v-if="item.required" class="documents-list__item-required">
        Обязательный
      </p>
      <p class="documents-list__item-comment">{{ item.comment }}</p>
      <DocumentsListTools />
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
import ColorIndicators from "@/components/ColorIndicators.vue";
import DocumentsListTools from "@/components/DocumentsListTools.vue";

export default {
  name: "DocumentsList",
  components: { ColorIndicators, DocumentsListTools },
  setup() {
    const list = ref([
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

    return {
      list,
    };
  },
};
</script>

<style scoped lang="less">
.documents-list {
  padding: 0;
  margin: 0;
  list-style: none;

  &__item {
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 16px;
    border: 1px solid #dfe4ef;
    background-color: #ffffff;
  }

  &__item-title {
    margin: 0 15px 0 0;
    font-size: 13px;
    font-weight: 400;
    color: #000000;
  }

  &__item-indicators {
    margin-right: 15px;
  }

  &__item-required {
    margin-right: 15px;
    font-size: 11px;
    font-weight: 400;
    color: #ff238d;
  }

  &__item-comment {
    margin: 0 auto 0 0;
    font-size: 11px;
    font-weight: 400;
    color: #8e9cbb;
  }
}
</style>
