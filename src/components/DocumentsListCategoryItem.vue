<template>
  <li class="documents-list-category-item">
    <div class="documents-list-category-item__wrapper">
      <button
        class="documents-list-category-item__button"
        :class="{ 'documents-list-category-item__button--opened': opened }"
        type="button"
        :disabled="!element.documents.length"
        aria-label="Развернуть/свернуть содержимое"
        @click="onClick"
      >
        <CollapseIcon />
      </button>

      <h3
        class="documents-list-category-item__title"
        v-html="titleText(element.title)"
      ></h3>
      <ColorIndicators
        :list="element.indicators"
        class="documents-list-category-item__indicators"
      />
      <p class="documents-list-category-item__comment">
        {{ element.comment }}
      </p>

      <DocumentsListTools class="documents-list-category-item__tools" />
    </div>
    <DocumentsList
      :list="element.documents"
      :collapse="!opened"
      :search-string="searchString"
      class="documents-list-category-item__documents-list"
      @change-doc-list="onChangeDocumentsList"
      @found="onFound"
    />
  </li>
</template>

<script>
import { ref } from "vue";
import modifyMatchText from "@/utils/modifyMatchText";
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
  emits: ["changeDocList"],
  props: {
    element: {
      type: Object,
    },
    searchString: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const opened = ref(false);

    function onClick() {
      opened.value = !opened.value;
    }

    function onChangeDocumentsList(e) {
      opened.value = Boolean(e.length);
      emit("changeDocList", e);
    }

    function onFound(e) {
      opened.value = e || opened.value;
    }

    function titleText(text) {
      return modifyMatchText(text, props.searchString);
    }

    return {
      opened,
      onFound,
      onClick,
      onChangeDocumentsList,
      titleText,
    };
  },
};
</script>

<style scoped lang="less">
.documents-list-category-item {
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 16px;
    border: 1px solid @light-grey1;
    background-color: @white;

    & > * {
      z-index: 1;
    }
  }

  &__button {
    position: relative;
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    padding: 0;
    margin-right: 15px;
    border: 1px solid @light-grey2;
    border-radius: 50%;
    background: @white;
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
    color: @black;
  }

  &__indicators {
    margin-right: 15px;
  }

  &__comment {
    margin: 0 auto 0 0;
    font-size: 11px;
    font-weight: 400;
    color: @middle-grey;
  }

  &__tools {
    height: 100%;
  }

  & &__documents-list {
    margin-left: 25px;
  }
}
</style>
