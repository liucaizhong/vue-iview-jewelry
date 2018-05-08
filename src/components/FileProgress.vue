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
      percent: 5,
      timer: null,
      step: 10,
    }
  },
  watch: {
    status: function (val, oldVal) {
      if (val === 'success') {
        this.percent = 100
      }
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
  },
  created () {
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.percent !== 99 && this.percent + this.step >= 100) {
          this.step = 1
          this.percent += this.step
        } else if (this.percent + this.step === 100) {
          clearInterval(this.timer)
        } else {
          // console.log(this.percent)
          this.percent += this.step
        }
      }, 1000)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
}
</script>

<style lang="less">

</style>
