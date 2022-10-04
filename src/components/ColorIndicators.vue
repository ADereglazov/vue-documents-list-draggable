<template>
  <ul v-if="list.length" class="color-indicators">
    <li
      v-for="(item, index) in list"
      :key="item + index"
      :style="{ backgroundColor: item }"
      tabindex="0"
      class="color-indicators__item"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "ColorIndicators",
  props: {
    list: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="less">
.color-indicators {
  display: flex;
  .list-reset();

  &__item {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;

    cursor: pointer;
    outline: none;

    &:hover,
    &:focus {
      border: 1px solid @black;
      box-shadow: 0 4px 4px @black-opacity-025;
    }
  }

  &__item + &__item {
    margin-left: 6px;
  }
}
</style>
