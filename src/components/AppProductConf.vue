<template>
  <div id="product-conf">
    <Form
      ref="form"
      :model="form"
      :label-width="150"
    >
      <section>
        <header>推荐商品配置</header>
        <div class="section-body">
          <FormItem
            v-for="(item, index) in form.recommendProducts"
            :key="index"
            :label="'商品型号' + (index+1)"
            :prop="`recommendProducts[${index}]`"
            :rules="{
              required: true,
              message: 'recommendProducts' + (index+1) + '不能为空',
              trigger: 'blur'
            }"
          >
            <Row>
              <Col span="18">
              <Input
                type="text"
                v-model="form.recommendProducts[index]"
                placeholder="请填写商品型号"
              ></Input>
              </Col>
              <Col span="4" offset="1">
              <Button
                type="error"
                @click="removeItem('recommendProducts', index)"
              >删除</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row>
              <Col span="12">
              <Button
                v-show="form.recommendProducts.length < appProductNum"
                type="dashed"
                long
                @click="addItem('recommendProducts')"
                icon="plus-round"
              >添加推荐商品</Button>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>新品上市配置</header>
        <div class="section-body">
          <FormItem
            v-for="(item, index) in form.newProducts"
            :key="index"
            :label="'商品型号' + (index+1)"
            :prop="`newProducts[${index}]`"
            :rules="{
              required: true,
              message: 'newProducts' + (index+1) + '不能为空',
              trigger: 'blur'
            }"
          >
            <Row>
              <Col span="18">
              <Input
                type="text"
                v-model="form.newProducts[index]"
                placeholder="请填写商品型号"
              ></Input>
              </Col>
              <Col span="4" offset="1">
              <Button
                type="error"
                @click="removeItem('newProducts', index)"
              >删除</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row>
              <Col span="12">
              <Button
                v-show="form.newProducts.length < appProductNum"
                type="dashed"
                long
                @click="addItem('newProducts')"
                icon="plus-round"
              >添加上市新品</Button>
              </Col>
            </Row>
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
import { APPPRODUCTNUM } from '@/constant'

export default {
  data () {
    return {
      appProductNum: APPPRODUCTNUM,
      form: {
        recommendProducts: [],
        newProducts: [],
      },
      formBak: {},
    }
  },
  created () {
    const url = '/admin/appproductconf/'
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
            content: '未找到公众号推荐/新品配置信息',
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.$Message.error({
          content: '未找到公众号推荐/新品配置信息',
        })
      })
  },
  methods: {
    addItem (key) {
      if (this.form[key].length === this.appProductNum) {
        this.$Message.error({
          content: '最多添加15个商品信息',
        })
      } else {
        this.form[key].push('')
      }
    },
    removeItem (key, idx) {
      if (this.form[key].length === 5) {
        this.$Message.error({
          content: '至少配置5个商品信息',
        })
      } else {
        this.form[key].splice(idx, 1)
      }
    },
    save () {
      const { recommendProducts, newProducts } = this.form
      const url = '/admin/appproductconf/'
      this.$fetch(url, {
        data: {
          recommendProducts,
          newProducts,
        },
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
#product-conf {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  overflow: auto;

  * {
    font-size: 14px;
  }
}
</style>
