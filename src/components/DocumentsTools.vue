<template>
  <section class="documents-tools">
    <h1 class="documents-tools__title">Документы</h1>
    <div class="documents-tools__wrapper-buttons">
      <button
        type="button"
        class="documents-tools__button documents-tools__button--bookmark"
      >
        <BookmarkIcon />
      </button>
      <button
        type="button"
        class="documents-tools__button documents-tools__button--action"
      >
        <PlusIcon />
        Новый тип
      </button>
      <button
        type="button"
        class="documents-tools__button documents-tools__button--action"
      >
        <PlusIcon />
        Новый документ
      </button>
    </div>
  </section>
</template>

<script>
import BookmarkIcon from "@/assets/icons/bookmark.svg";
import PlusIcon from "@/assets/icons/plus.svg";

export default {
  name: "DocumentsTools",
  components: { BookmarkIcon, PlusIcon },
};
</script>

<style scoped lang="less">
.documents-tools {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    line-height: normal;
  }

  &__wrapper-buttons {
    display: flex;
    align-items: center;
  }

  &__button {
    position: relative;

    min-height: 30px;
    padding: 8px 20px 8px 35px;

    background: white;
    border: 1px solid #d3d8df;
    border-radius: 15px;

    font-size: 12px;
    font-weight: 500;
    line-height: 12px;

    cursor: pointer;

    &:hover {
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    &:active {
      box-shadow: none;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }

    &--bookmark {
      width: 30px;
      height: 30px;
      padding: 0;

      svg {
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &__button + &__button {
    margin-left: 10px;
  }
}
</style>
