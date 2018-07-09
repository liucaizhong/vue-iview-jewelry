<template>
  <div id="other-conf">
    <Form
      ref="form"
      :model="form"
      :label-width="150"
    >
      <section>
        <header>其他配置</header>
        <div class="section-body">
          <FormItem label="租赁攻略" class="main-images">
            <image-uploader
              :image-list="form.strategyImages"
              :image-max-num="1"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
            />
          </FormItem>
          <FormItem label="常见问题" class="main-images">
            <image-uploader
              :image-list="form.FAQImages"
              :image-max-num="1"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
            />
          </FormItem>
          <FormItem label="关于我们" class="main-images">
            <image-uploader
              :image-list="form.aboutUsImages"
              :image-max-num="1"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
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
import { MAINIMAGEMAXSIZE } from '@/constant'
import ImageUploader from './ImageUploader'

export default {
  components: {
    'image-uploader': ImageUploader,
  },
  data () {
    return {
      imageMaxSize: MAINIMAGEMAXSIZE,
      form: {
        strategyImages: [],
        FAQImages: [],
        aboutUsImages: [],
      },
      formBak: {},
    }
  },
  created () {
    const url = '/admin/appotherconf/'
    this.$fetch(url)
      .then(resp => {
        console.log(resp)
        const results = resp.data.results
        if (results && results.length) {
          const temp = results[0]
          this.form = {
            ...temp,
          }
          this.formBak = {
            ...temp,
          }
        } else {
          this.$Message.error({
            content: '未找到公众号其他页配置信息',
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.$Message.error({
          content: '未找到公众号其他页配置信息',
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
            }
            if (value && !value.length) {
              data.append(key, '')
            }
          } else {
            value && data.append(key, value)
          }
        }
      })
      return data
    },
    save () {
      this.$refs.form.validate(valid => {
        if (valid) {
          const url = '/admin/appotherconf/'
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
        } else {
          this.$Message.error({
            content: '保存失败',
          })
        }
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
#other-conf {
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
