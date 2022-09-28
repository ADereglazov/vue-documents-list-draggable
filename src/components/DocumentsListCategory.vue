<template>
  <Draggable
    v-model="listModel"
    v-bind="dragOptions"
    item-key="title"
    handle=".handle"
    tag="ul"
    class="documents-list-category"
    @update="onUpdate"
  >
    <template #item="{ element }">
      <DocumentsListCategoryItem :element="element" />
    </template>
  </Draggable>
</template>

<script>
import { ref } from "vue";
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
    const listModel = ref([...props.list]);
    const dragOptions = {
      animation: 200,
      disabled: false,
      ghostClass: "ghost",
    };

    function onUpdate() {
      emit("changeDocListCategory", listModel.value);
    }

    return {
      listModel,
      dragOptions,
      onUpdate,
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
