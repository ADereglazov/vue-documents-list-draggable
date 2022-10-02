<template>
  <Draggable
    v-model="listModel"
    v-bind="dragOptions"
    group="documents"
    item-key="title"
    handle=".handle"
    tag="ul"
    class="documents-list"
    @dragstart="dragStartHandler"
    @end="dragEndHandler"
    @drag="dragHandler"
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
  <ul
    class="documents-list__drag-preview"
    :style="dragStyle"
    ref="preview"
  ></ul>
</template>

<script>
import { ref, computed } from "vue";
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

    const preview = ref(null);
    const dragPreview = ref(null);
    const x = ref(0);
    const y = ref(0);
    const dragStyle = computed(() => {
      return {
        top: `${y.value}px`,
        left: `${x.value}px`,
      };
    });

    const listModel = computed({
      get: () => [...props.list],
      set: (val) => emit("changeDocList", val),
    });

    function dragStartHandler(e) {
      dragPreview.value = e.target.cloneNode(true);
      preview.value.appendChild(dragPreview.value);
      preview.value.style.zIndex = 2;
      e.dataTransfer.setDragImage(new Image(), 0, 0);
    }

    function dragEndHandler() {
      dragPreview.value.remove();
      dragPreview.value = null;
    }

    function dragHandler(e) {
      x.value = e.pageX;
      y.value = e.pageY;
    }

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
      dragStyle,
      preview,
      dragStartHandler,
      dragEndHandler,
      dragHandler,
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

  &__drag-preview {
    position: absolute;
    transform: translateX(-100%) translateY(-50%);
    width: calc(100% - 60px);
    padding: 0;
    margin: 0;
    list-style: none;

    > li {
      border: 1px solid #dfe4ef;
      background-color: #ffffff;
      box-shadow: 0 3px 16px rgba(0, 102, 255, 0.7);
    }
  }
}
</style>
