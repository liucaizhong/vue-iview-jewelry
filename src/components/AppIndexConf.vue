<template>
  <div id="app-conf">
    <Form
      ref="form"
      :model="form"
      :label-width="150"
    >
      <section>
        <header>首页配置</header>
        <div class="section-body">
          <FormItem label="轮播图配置" class="main-images">
            <!-- <image-uploader
              :image-list="form.spImages"
              multiple
              :image-max-num="swiperImageNum"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
              need-link
            /> -->
            <image-uploader
              v-for="i in swiperImageNum"
              :key="i - 1"
              :image-list="form[`spImages${i-1}`]"
              :image-max-num="1"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
              need-link
            />
          </FormItem>
          <FormItem label="广告栏配置" class="main-images">
            <image-uploader
              v-for="i in adImageNum"
              :key="i - 1"
              :image-list="form[`advImages${i-1}`]"
              :image-max-num="1"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
              need-link
            />
          </FormItem>
          <FormItem>
            <Button
              type="success"
              @click="save"
            >保存</Button>
            <Button
              type="ghost"
              style="margin-left: 8px"
              @click="cancel"
            >重置</Button>
          </FormItem>
        </div>
      </section>
    </Form>
  </div>
</template>

<script>
import { APPSWIPERIMAGENUM, MAINIMAGEMAXSIZE, APPADIMAGENUM } from '@/constant'
import ImageUploader from './ImageUploader'

export default {
  components: {
    'image-uploader': ImageUploader,
  },
  data () {
    return {
      swiperImageNum: APPSWIPERIMAGENUM,
      imageMaxSize: MAINIMAGEMAXSIZE,
      adImageNum: APPADIMAGENUM,
      form: {
        spImages0: [],
        spImages1: [],
        spImages2: [],
        spImages3: [],
        spImages4: [],
        advImages0: [],
        advImages1: [],
        advImages2: [],
      },
      formBak: {},
    }
  },
  created () {
    const url = '/admin/appindexconf/'
    this.$fetch(url)
      .then(resp => {
        console.log(resp)
        const results = resp.data.results
        if (results && results.length) {
          const temp = results[0]
          for (let i = 0; i < this.swiperImageNum; ++i) {
            temp[`spImages${i}`] =
              temp[`spImages${i}`]
                && [{
                  ...temp[`spImages${i}`],
                }]
                || []
          }
          for (let i = 0; i < this.adImageNum; ++i) {
            temp[`advImages${i}`] =
              temp[`advImages${i}`]
                && [{
                  ...temp[`advImages${i}`],
                }]
                || []
          }
          this.form = {
            ...temp,
          }
          this.formBak = {
            ...temp,
          }
        } else {
          this.$Message.error({
            content: '未找到公众号首页配置信息',
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.$Message.error({
          content: '未找到公众号首页配置信息',
        })
      })
  },
  methods: {
    formPostdata () {
      // console.log(this.form)
      const data = new FormData()
      Object.keys(this.form).forEach(key => {
        if (key !== 'attributes') {
          const value = this.form[key]
          if (key.includes('Image')) {
            if (value && value[0] && value[0].file) {
              data.append(key, value[0].file, value[0].name)
              value[0].link && data.append(key + '_link', value[0].link || '')
            }
            if (value && !value.length) {
              data.append(key, '')
              data.append(key + '_link', '')
            }
          } else {
            value && data.append(key, value)
          }
        }
      })
      return data
    },
    save () {
      const url = '/admin/appindexconf/'
      this.$fetch(url, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: this.formPostdata(),
        method: 'post',
      })
        .then(resp => {
          console.log(resp)
          const temp = resp.data
          for (let i = 0; i < this.swiperImageNum; ++i) {
            temp[`spImages${i}`] =
              temp[`spImages${i}`]
                && [{
                  ...temp[`spImages${i}`],
                }]
                || []
          }
          for (let i = 0; i < this.adImageNum; ++i) {
            temp[`advImages${i}`] =
              temp[`advImages${i}`]
                && [{
                  ...temp[`advImages${i}`],
                }]
                || []
          }
          this.form = {
            ...temp,
          }
          this.formBak = {
            ...temp,
          }
          this.$Message.success({
            content: '保存成功',
          })
        })
        .catch(err => {
          console.log(err)
          this.$Message.error({
            content: '保存失败',
          })
        })
    },
    cancel () {
      this.form = {
        ...this.formBak,
      }
      this.$Message.success({
        content: '重置成功',
      })
    },
  },
}
</script>

<style lang="less">
#app-conf {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  overflow: auto;

  * {
    font-size: 14px;
  }

  .main-images {
    .ivu-form-item-content {
      display: flex;
      flex-wrap: wrap;

      .image-uploader {
        margin-right: 10px;
      }
    }
  }
}
</style>
