<template>
  <div class="documents-list-tools">
    <button class="documents-list-tools__button" type="button">
      <EditIcon />
    </button>
    <button class="documents-list-tools__button" type="button">
      <DeleteIcon />
    </button>
    <button class="documents-list-tools__button handle" type="button">
      <MoveIcon />
    </button>
  </div>
</template>

<script>
import EditIcon from "@/assets/icons/edit.svg";
import DeleteIcon from "@/assets/icons/delete.svg";
import MoveIcon from "@/assets/icons/move.svg";

export default {
  name: "DocumentsListTools",
  components: { EditIcon, DeleteIcon, MoveIcon },
};
</script>

<style scoped lang="less">
.documents-list-tools {
  display: flex;
  align-items: center;

  &__button {
    padding: 0;
    border: none;
    background: none;

    color: #8e9cbb;
    cursor: pointer;

    &:active {
      opacity: 0.5;
    }
  }

  &__button + &__button {
    margin-left: 22px;
  }
}

.handle:active {
  opacity: 1;
  color: #0066ff;
}
</style>
