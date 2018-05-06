<template>
  <div class="image-uploader">
    <div class="upload-list" v-for="item in uploadList" :key="item.url">
      <template v-if="item.status === 'finished'">
        <img :src="item.url">
        <div class="upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item.name)" />
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)" />
        </div>
      </template>
      <template v-else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info />
      </template>
    </div>
    <Upload
      v-if="uploadList.length < imageMaxNum"
      class="upload"
      ref="upload"
      :show-upload-list="showUploadList"
      :default-file-list="defaultList"
      :on-success="handleSuccess"
      :format="['jpg','jpeg','png']"
      :accept="'image/*'"
      :max-size="imageMaxSize"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      :multiple="multiple"
      type="drag"
      :action="action"
    >
      <div class="upload-icon">
        <Icon type="camera" />
      </div>
    </Upload>
    <Modal :width="700" title="查看原图" v-model="visible">
      <img class="raw-image" v-if="visible" :src="rawImgUrl">
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    imageMaxNum: {
      type: Number,
      default: 6,
    },
    imageMaxSize: {
      type: Number,
      default: 2048,
      validator: function (value) {
        return !(value % 1024)
      },
    },
    showUploadList: {
      type: Boolean,
      default: false,
    },
    imageList: {
      type: Array,
      default: function () {
        return []
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    // type: {
    //   type: String,
    //   default: 'select',
    //   validator (value) {
    //     return ['select', 'drag'].indexOf(value) !== -1
    //   },
    // },
    action: {
      type: String,
      required: true,
    },
    uploadImage: {
      type: Function,
      default: function () {},
    },
    removeImage: {
      type: Function,
      default: function () {},
    },
  },
  data () {
    return {
      imgName: '',
      visible: false,
      defaultList: this.imageList.map(cur => ({ ...cur })),
      uploadList: [],
      rawImgUrl: '',
    }
  },
  mounted () {
    console.log(this.imageList)
    this.uploadList = this.$refs.upload.fileList
  },
  beforeDestroy () {
    this.uploadList.filter(cur => cur.local).forEach(cur => {
      window.URL.revokeObjectURL(cur.url)
    })
  },
  methods: {
    handleSuccess (res, file) {
      this.uploadImage()
    },
    handleRemove (file) {
      const fileList = this.uploadList
      const idx = fileList.indexOf(file)
      this.uploadList.splice(idx, 1)
      this.imageList.splice(idx, 1)
      this.removeImage()
    },
    handleView (name) {
      this.rawImgUrl = this.uploadList.find(cur => cur.name === name).url
      this.visible = true
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '图片格式错误',
        desc: `${file.name} 格式错误, 请选择.jpg, .jpeg, .png文件.`,
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '图片过大',
        desc: `${file.name} 大小不能超过${this.imageMaxSize / 1024}M`,
      })
    },
    handleBeforeUpload (file) {
      const exceedImageMaxNum = this.uploadList.length < this.imageMaxNum
      if (!exceedImageMaxNum) {
        this.$Notice.warning({
          title: `最多上传${this.imageMaxNum}张图片`,
        })
        return exceedImageMaxNum
      }

      if (this.action === 'javascript(void)') {
        if (Math.ceil(file.size / 1024) > this.imageMaxSize) {
          this.handleMaxSize(file)
          return false
        }

        const that = this
        const newImg = new Image()
        newImg.src = window.URL.createObjectURL(file)
        newImg.onload = function () {
          that.uploadList.push({
            name: file.name,
            percentage: 100,
            status: 'finished',
            url: this.src,
            local: true,
          })
          that.imageList.push({
            name: file.name,
            file,
          })
        }

        return false
      }

      return true
    },
  },
}
</script>

<style lang="less">
@img-width: 200px;
@img-height: 200px;

.image-uploader {
  .upload-list{
    display: inline-block;
    width: @img-width;
    height: @img-height;
    text-align: center;
    line-height: @img-height;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    .upload-list-cover{
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.6);

      i {
        color: #fff;
        font-size: @img-height / 2 !important;
        cursor: pointer;
        margin: 0 2px;
        line-height: @img-height;
      }
    }

    &:hover .upload-list-cover {
      display: block;
    }
  }

  .upload {
    display: inline-block;
    width: @img-width;

    .upload-icon {
      width: @img-width;
      height: @img-height;

      i {
        font-size: @img-height / 2 !important;
        line-height: @img-height;
      }
    }
  }
}

.ivu-modal-body {
  max-height: 800px;
  overflow: auto;

  .raw-image {
    width: 100%;
  }
}
</style>
