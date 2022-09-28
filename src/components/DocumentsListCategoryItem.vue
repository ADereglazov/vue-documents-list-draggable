<template>
  <li class="documents-list-category-item">
    <button
      class="documents-list-category-item__button"
      :class="{ 'documents-list-category-item__button--opened': opened }"
      type="button"
      @click="opened = !opened"
    >
      <CollapseIcon />
    </button>

    <h3 class="documents-list-category-item__title">{{ element.title }}</h3>
    <ColorIndicators
      :list="element.indicators"
      class="documents-list-category-item__indicators"
    />
    <p class="documents-list-category-item__comment">
      {{ element.comment }}
    </p>

    <DocumentsListTools />
  </li>
</template>

<script>
import { ref } from "vue";
import DocumentsListTools from "@/components/DocumentsListTools.vue";
import ColorIndicators from "@/components/ColorIndicators.vue";
import CollapseIcon from "@/assets/icons/collapse.svg";

export default {
  name: "DocumentsListCategoryItem",
  components: { DocumentsListTools, CollapseIcon, ColorIndicators },
  props: {
    element: {
      type: Object,
    },
  },
  setup() {
    const opened = ref(false);

    return {
      opened,
    };
  },
};
</script>

<style scoped lang="less">
.documents-list-category-item {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #dfe4ef;
  background-color: #ffffff;

  &__button {
    position: relative;
    width: 22px;
    height: 22px;
    padding: 0;
    margin-right: 15px;
    border: 1px solid #d3d8df;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(180deg);
      display: block;
      transition: transform 200ms ease-in-out;
    }

    &--opened svg {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  &__title {
    margin: 0 15px 0 0;
    font-size: 15px;
    font-weight: 500;
    color: #000000;
  }

  &__indicators {
    margin-right: 15px;
  }

  &__comment {
    margin: 0 auto 0 0;
    font-size: 11px;
    font-weight: 400;
    color: #8e9cbb;
  }
}
</style>
