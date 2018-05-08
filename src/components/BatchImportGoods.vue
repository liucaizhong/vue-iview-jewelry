<template>
  <div id="batch-import-goods">
    <Form
      :model="formGoods"
      :label-width="150"
    >
      <section>
        <header>商品信息导入</header>
        <div class="section-body">
          <FormItem label="商品信息" prop="info">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Upload
                ref="uploadCSV"
                type="drag"
                multiple
                :accept="'.csv'"
                :format="['csv']"
                :action="infoAction"
                :show-upload-list="false"
                :max-size="csvFileMaxSize"
                :on-format-error="handleCSVFormatError"
                :on-exceeded-size="handleCSVMaxSize"
                :on-success="handleCSVSuccess"
                :on-error="handleCSVError"
                :on-progress="handleCSVProgress"
              >
                <div style="padding: 20px 0">
                  <Icon type="ios-cloud-upload" size="52" style="color: #3399ff" />
                  <p>点击或拖曳文件到这里上传</p>
                </div>
              </Upload>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section v-if="importImg">
        <header>商品图片导入</header>
        <div class="section-body">
          <FormItem label="商品图片" prop="imgs">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Upload
                ref="uploadZIP"
                type="drag"
                :action="imgsAction"
                :show-upload-list="false"
                :accept="'.zip'"
                :format="['zip']"
                :max-size="zipFileMaxSize"
                :on-format-error="handleZIPFormatError"
                :on-exceeded-size="handleZIPMaxSize"
                :on-success="handleZIPSuccess"
                :on-error="handleZIPError"
                :on-progress="handleZIPProgress"
              >
                <div style="padding: 20px 0">
                  <Icon type="ios-cloud-upload" size="52" style="color: #3399ff" />
                  <p>点击或拖曳文件到这里上传</p>
                </div>
              </Upload>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
    </Form>
    <file-upload-indicator :files="files" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { CSVFILEMAXSIZE, ZIPFILEMAXSIZE } from '@/constant'
import FileUploadIndicator from './FileUploadIndicator'

export default {
  components: {
    'file-upload-indicator': FileUploadIndicator,
  },
  data () {
    return {
      csvFileMaxSize: CSVFILEMAXSIZE,
      zipFileMaxSize: ZIPFILEMAXSIZE,
      formGoods: {
        info: [],
        imgs: [],
      },
      infoAction: '/infoAction',
      imgsAction: '/imgsAction',
      importImg: false,
    }
  },
  computed: {
    ...mapState({
      files: 'uploadingFiles',
    }),
  },
  methods: {
    handleCSVFormatError (file) {
      this.$Notice.warning({
        title: '文件格式错误',
        desc: `${file.name} 格式错误, 请选择.csv文件.`,
      })
    },
    handleCSVMaxSize (file) {
      const unit = this.csvFileMaxSize < 1024 ? 'KB' : 'M'
      this.$Notice.warning({
        title: '文件过大',
        desc: `${file.name} 大小不能超过${this.csvFileMaxSize / 1024 || this.csvFileMaxSize}${unit}`,
      })
    },
    handleCSVSuccess (res, file) {
      console.log(file)
      this.$store.commit('updateUploadingStatus', {
        name: file.name,
        status: 'success',
      })
      this.$Message.success('商品信息批量导入成功')
    },
    handleCSVProgress (event, file) {
      console.log(file)
      this.$store.commit('pushNewUploadingFile', file.name)
    },
    handleCSVError (err, file, filelist) {
      // console.log(err)
      this.$store.commit('updateUploadingStatus', {
        name: filelist.name,
        status: 'wrong',
      })
      this.$Message.error('商品信息批量导入失败')
    },
    handleZIPFormatError (file) {
      this.$Notice.warning({
        title: '文件格式错误',
        desc: `${file.name} 格式错误, 请选择.zip文件.`,
      })
    },
    handleZIPMaxSize (file) {
      const unit = this.csvFileMaxSize < 1024 ? 'KB' : 'M'
      this.$Notice.warning({
        title: '文件过大',
        desc: `${file.name} 大小不能超过${this.zipFileMaxSize / 1024 || this.zipFileMaxSize}${unit}`,
      })
    },
    handleZIPSuccess (res, file) {
      console.log(res)
    },
    handleZIPProgress (event, file) {
      console.log(file)
    },
    handleZIPError (err, file, filelist) {
      console.log(err)
    },
  },
}
</script>

<style lang="less">
#batch-import-goods {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  overflow: auto;

  section {
    width: 100%;
    border: 1px solid #e8e8e8;
    background: #fff;
    margin-bottom: 20px;

    header {
      border-bottom: 1px solid #e8e8e8;
      background: #f5f5f5;
      padding: 10px 15px;
      font-weight: bold;

      .edit-btn {
        margin-left: 10px;
      }
    }

    .section-body {
      padding: 15px;

      .ivu-form-item {

        .ivu-form-item-label {
          font-weight: bold;
        }

        .ivu-form-item-error-tip {
          font-size: 12px;
        }
      }

      .ivu-row {
        padding: 0 15px;

        p {
          padding: 1px 0;
          // display: inline-block;

          & + i {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
