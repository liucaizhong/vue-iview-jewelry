<template>
  <Tooltip :content="content" placement="top">
    <Icon :type="type" :size="size" />
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
  },
}
</script>

<style lang="less">

</style>
