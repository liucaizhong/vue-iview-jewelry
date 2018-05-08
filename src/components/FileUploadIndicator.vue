<template>
  <Collapse class="file-upload-indicator" v-model="opening">
    <Panel name="0">
      &nbsp;&nbsp;&nbsp;&nbsp;上传文件
      <p slot="content">
        <ul class="file-list">
          <li v-for="(item, i) in files" :key="i">
            <file-progress :name="item.name" :status="item.status" />
          </li>
        </ul>
      </p>
    </Panel>
  </Collapse>
</template>

<script>
import FileProgress from './FileProgress'

export default {
  components: {
    'file-progress': FileProgress,
  },
  props: {
    files: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data () {
    return {
      opening: '0',
    }
  }
}
</script>

<style lang="less">
.file-upload-indicator {
  width: 400px;
  max-height: 200px;
  position: fixed;
  right: 1px;
  bottom: 1px;

  .ivu-collapse-header {
    font-weight: bold;
  }

  .file-list {
    list-style: none;
  }
}
</style>
