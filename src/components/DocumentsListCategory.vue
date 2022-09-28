<template>
  <Draggable
    v-model="listModel"
    v-bind="dragOptions"
    item-key="title"
    handle=".handle"
    tag="ul"
    class="documents-list-category"
  >
    <template #item="{ element, index }">
      <DocumentsListCategoryItem
        :element="element"
        @change-doc-list="onChangeDocumentsList($event, index)"
      />
    </template>
  </Draggable>
</template>

<script>
import { computed } from "vue";
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
  },
  setup(props, { emit }) {
    const dragOptions = {
      animation: 200,
      disabled: false,
      ghostClass: "ghost",
    };

    const listModel = computed({
      get: () => [...props.list],
      set: (val) => emit("changeDocListCategory", val),
    });

    function onChangeDocumentsList(e, index) {
      listModel.value[index].documents = [...e];
    }

    return {
      listModel,
      dragOptions,
      onChangeDocumentsList,
    };
  },
};
</script>

<style scoped lang="less">
.documents-list-category {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
