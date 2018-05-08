<template>
  <div class="file-progress">
    <span>{{ name }}</span>
    <Progress
      :percent="percent"
      :stroke-width="8"
      :status="status"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'normal',
    }
  },
  data () {
    return {
      percent: 0,
      timer: null,
    }
  },
  created () {
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.percent + 10 >= 100) {
          clearInterval(this.timer)
          return false
        }
        this.percent += 10
      }, 1000)
    }
  },
  beforeDestroy () {
    clearInterval(this.precent)
  }
}
</script>

<style lang="less">

</style>
