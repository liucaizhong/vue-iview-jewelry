<template>
  <Tooltip :content="content" :placement="placement">
    <Icon :type="type" :size="size" />
    <div slot="content">
      <slot name="content" />
    </div>
  </Tooltip>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'help-circled',
    },
    size: Number,
    placement: {
      type: String,
      default: 'top',
    }
  },
}
</script>

<style lang="less">

</style>
