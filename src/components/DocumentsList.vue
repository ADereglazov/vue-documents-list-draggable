<template>
  <Draggable
    v-model="listModel"
    v-bind="dragOptions"
    group="documents"
    item-key="title"
    handle=".handle"
    tag="ul"
    class="documents-list"
  >
    <template #item="{ element }">
      <li
        :class="{ 'documents-list__item--collapsed': collapse }"
        class="documents-list__item"
      >
        <h4
          class="documents-list__item-title"
          v-html="titleText(element.title)"
        ></h4>
        <ColorIndicators
          :list="element.indicators"
          class="documents-list__item-indicators"
        />
        <p v-if="element.required" class="documents-list__item-required">
          Обязательный
        </p>
        <p class="documents-list__item-comment">{{ element.comment }}</p>
        <DocumentsListTools />
      </li>
    </template>
  </Draggable>
</template>

<script>
import { computed } from "vue";
import modifyMatchText from "@/composables/modifyMatchText";
import Draggable from "vuedraggable";
import ColorIndicators from "@/components/ColorIndicators.vue";
import DocumentsListTools from "@/components/DocumentsListTools.vue";

export default {
  name: "DocumentsList",
  components: { Draggable, ColorIndicators, DocumentsListTools },
  emits: ["changeDocList", "found"],
  props: {
    list: {
      type: Array,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    searchString: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const dragOptions = {
      animation: 200,
      disabled: false,
      ghostClass: "ghost",
    };

    const listModel = computed({
      get: () => [...props.list],
      set: (val) => emit("changeDocList", val),
    });

    function titleText(text) {
      const newText = modifyMatchText(text, props.searchString);
      const match = Boolean(newText !== text && props.searchString);

      if (match) {
        emit("found", true);
      }

      return newText;
    }

    return {
      listModel,
      dragOptions,
      titleText,
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
    opacity: 1;
    transition: margin-top 300ms ease-in-out, opacity 250ms ease 50ms;

    &--collapsed {
      margin-top: -35px;
      opacity: 0;
    }

    &.ghost {
      opacity: 0.2;
    }
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
