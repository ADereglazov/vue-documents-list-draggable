<template>
  <div class="documents-list-category">
    <Draggable
      v-model="listModel"
      v-bind="dragOptions"
      item-key="title"
      handle=".handle"
      tag="ul"
      class="documents-list-category__list"
      @dragstart="dragStartHandler"
      @end="dragEndHandler"
      @drag="dragHandler"
    >
      <template #item="{ element, index }">
        <DocumentsListCategoryItem
          :element="element"
          :search-string="searchString"
          @change-doc-list="onChangeDocumentsList($event, index)"
        />
      </template>
    </Draggable>
    <ul
      class="documents-list-category__drag-preview"
      :style="dragStyle"
      ref="preview"
    ></ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import Draggable from "vuedraggable";
import DocumentsListCategoryItem from "@/components/DocumentsListCategoryItem.vue";

export default {
  name: "DocumentsListCategory",
  components: { Draggable, DocumentsListCategoryItem },
  emits: ["changeDocListCategory"],
  props: {
    list: {
      type: Array,
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
      set: (val) => emit("changeDocListCategory", val),
    });

    function onChangeDocumentsList(e, index) {
      listModel.value[index].documents = [...e];
    }

    function dragStartHandler(e) {
      dragPreview.value = e.target.cloneNode(true);
      preview.value.appendChild(dragPreview.value);
      e.dataTransfer.setDragImage(new Image(), 0, 0);
    }

    function dragEndHandler() {
      if (dragPreview.value) {
        dragPreview.value.remove();
      }
      dragPreview.value = null;
    }

    function dragHandler(e) {
      x.value = e.pageX;
      y.value = e.pageY;
    }

    return {
      listModel,
      dragOptions,
      dragStyle,
      preview,
      onChangeDocumentsList,
      dragStartHandler,
      dragEndHandler,
      dragHandler,
    };
  },
};
</script>

<style scoped lang="less">
.documents-list-category {
  &__list {
    .list-reset();
  }

  &__drag-preview {
    position: absolute;
    z-index: 1;
    transform: translateX(-100%) translateY(-50%);
    width: calc(100% - 60px);
    padding: 0;
    margin: 0;
    list-style: none;

    > li {
      box-shadow: 0 3px 16px rgba(0, 102, 255, 0.7);
    }
  }
}
</style>
