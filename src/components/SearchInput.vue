<template>
  <label class="search-input">
    <input
      ref="inputField"
      v-model="searchString"
      class="search-input__input"
      type="text"
      placeholder="Поиск"
    />
    <button
      v-show="searchString"
      class="search-input__button"
      type="button"
      @click="onClickClear"
    >
      <ClearIcon />
    </button>
  </label>
</template>

<script>
import { ref } from "vue";
import ClearIcon from "@/assets/icons/clear.svg";

export default {
  name: "SearchInput",
  components: { ClearIcon },
  setup() {
    const inputField = ref(null);
    const searchString = ref("");

    function onClickClear() {
      searchString.value = "";
      inputField.value.focus();
    }

    return {
      inputField,
      searchString,
      onClickClear,
    };
  },
};
</script>

<style scoped lang="less">
.search-input {
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    width: 14px;
    height: 14px;
    background: url("@/assets/icons/search.svg") no-repeat center center;
    background-size: contain;
  }

  &__input {
    width: 564px;
    height: 30px;
    padding-right: 15px;
    padding-left: 25px;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #bfc9e0;
    border-left: none;
    font-family: inherit;
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    color: #000000;
    outline: none;

    &:focus {
      border-bottom-color: #0066ff;
    }

    &::placeholder {
      font-size: 15px;
      line-height: normal;
      color: #8e9cbb;
    }
  }

  &__button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;

    &:active {
      opacity: 0.5;
    }

    svg {
      display: block;
    }
  }
}
</style>
