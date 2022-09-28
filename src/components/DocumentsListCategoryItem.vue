<template>
  <li class="documents-list-category-item">
    <div class="documents-list-category-item__wrapper">
      <button
        class="documents-list-category-item__button"
        :class="{ 'documents-list-category-item__button--opened': opened }"
        type="button"
        :disabled="!element.documents.length"
        @click="onClick"
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
    </div>
    <DocumentsList
      v-show="opened"
      :list="element.documents"
      class="documents-list-category-item__documents-list"
    />
  </li>
</template>

<script>
import { ref } from "vue";
import DocumentsListTools from "@/components/DocumentsListTools.vue";
import ColorIndicators from "@/components/ColorIndicators.vue";
import CollapseIcon from "@/assets/icons/collapse.svg";
import DocumentsList from "@/components/DocumentsList.vue";

export default {
  name: "DocumentsListCategoryItem",
  components: {
    DocumentsListTools,
    CollapseIcon,
    ColorIndicators,
    DocumentsList,
  },
  props: {
    element: {
      type: Object,
    },
  },
  setup() {
    const opened = ref(false);

    function onClick() {
      opened.value = !opened.value;
    }

    return {
      opened,
      onClick,
    };
  },
};
</script>

<style scoped lang="less">
.documents-list-category-item {
  &__wrapper {
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 16px;
    margin-top: -1px;
    border: 1px solid #dfe4ef;
    background-color: #ffffff;
  }

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

    &:disabled {
      opacity: 0.5;
      cursor: default;
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

  &__documents-list {
    padding-left: 25px;
  }
}
</style>
