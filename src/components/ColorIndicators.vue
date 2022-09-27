<template>
  <ul v-if="list.length" class="color-indicators">
    <li
      v-for="(item, index) in list"
      :key="item + index"
      :style="{ backgroundColor: item }"
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
  padding: 0;
  margin: 0;
  list-style: none;

  &__item {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  &__item + &__item {
    margin-left: 6px;
  }
}
</style>
