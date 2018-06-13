<template>
  <div class="enum-selector">
    <span
      class="enum-selector__item"
      v-for="(item, i) in items"
      :key="item.key"
      :class="{ active: selected[i] }"
    >
      <input
        type="checkbox"
        :checked="selected[i]"
        @change="changeSelected($event.target.checked, i)"
      >
      {{ item.value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Array,
      default: function () {
        return []
      },
    },
    items: {
      type: Array,
      default: function () {
        return []
      },
    },
    single: {
      type: Boolean,
      default: true,
    }
  },
  // data () {
  //   return {
  //     selectedItem: [...this.selected],
  //   }
  // },
  methods: {
    changeSelected (b, i) {
      if (this.single) {
        this.selected.fill(false)
      }
      this.selected[i] = b
      this.$forceUpdate()
    },
  },
}
</script>

<style lang="less">
.enum-selector {
  .enum-selector__item {
    position: relative;
    float: left;
    min-width: 52px;
    margin: 0 5px;
    margin-bottom: 5px;
    text-align: center;
    padding: 0 5px;

    &.active {
      background: #19be6b;
      color: #fff;
    }

    > input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

