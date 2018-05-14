<template>
  <div id="goods-detail">
    <Form
      ref="goodsForm"
      :model="formGoods"
      :label-width="150"
      :rules="ruleValidate"
    >
      <section>
        <header>基本信息</header>
        <div class="section-body">
          <FormItem v-if="!mode" label="商品ID" prop="productid">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.productid }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="商品型号" prop="model">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p v-if="!mode">{{ formGoods.model }}</p>
              <Input
                v-else
                v-model="formGoods.model"
                placeholder="输入商品型号"
              >
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="商品类别" prop="category">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.category">
                <Option
                  v-for="item in categoryOfGood"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="商品名称" prop="title">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.title"
                placeholder="输入商品名称"
              >
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="是否发布" prop="releaseStatus">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.releaseStatus">
                <Option
                  v-for="item in releaseStatus"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>
          品质信息
        </header>
        <div class="section-body">
          <FormItem label="品牌" prop="brand">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <AutoComplete
                v-model="formGoods.brand"
                :data="brandOptions"
                :filter-method="filterMethod"
                placeholder="输入品牌名称"
              />
              </Col>
            </Row>
          </FormItem>
          <FormItem label="系列" prop="series">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <AutoComplete
                v-model="formGoods.series"
                :data="seriesOptions"
                :filter-method="filterMethod"
                placeholder="输入系列名称"
              />
              </Col>
            </Row>
          </FormItem>
          <FormItem label="证书" prop="certificate">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.certificate">
                <Option
                  v-for="item in certificates"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="镶嵌材质" prop="goldType">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.goldType">
                <Option
                  v-for="item in goldTypes"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="材质纯度" prop="goldPurity">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.goldPurity">
                <Option
                  v-for="item in goldPurity"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="尺寸" prop="size">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.size"
                placeholder="输入钻石重量"
              >
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="钻石重量" prop="diamondWeight">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.diamondWeight"
                placeholder="输入钻石重量"
              >
              <span slot="append">克</span>
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="含金量" prop="goldContent">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.goldContent"
                placeholder="输入含金量"
              >
              <span slot="append">克</span>
              </Input>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>
          销售信息
        </header>
        <div class="section-body">
          <FormItem label="销售价" prop="sellingPrice">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.sellingPrice"
                placeholder="输入销售价"
              >
              <span slot="append">元</span>
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="押金" prop="deposit">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.deposit"
                placeholder="输入押金"
              >
              <span slot="append">元</span>
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="租金" prop="rent">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.rent"
                placeholder="输入租金"
              >
              <span slot="append">元</span>
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="起租周期" prop="rentcycle">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.rentcycle"
                placeholder="输入起租周期"
              >
              <span slot="append">天</span>
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="续租周期" prop="reletcycle">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.reletcycle"
                placeholder="输入续租周期"
              >
              <span slot="append">天</span>
              </Input>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>
          描述信息
        </header>
        <div class="section-body">
          <!-- <FormItem label="商品图片" prop="MainImage">
            <image-uploader
              :image-list="formGoods.MainImage"
              multiple
              :image-max-num="MainImageNum"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
            />
          </FormItem> -->
          <FormItem label="商品图片" class="main-images">
            <image-uploader
              v-for="i in MainImageNum"
              :key="i - 1"
              :image-list="formGoods[`MainImage${i - 1}`]"
              :image-max-num="1"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
            />
          </FormItem>
          <FormItem label="商品详情图片" prop="detailImages">
            <image-uploader
              :image-list="formGoods.detailImages"
              :image-max-num="1"
              :image-max-size="imageMaxSize"
              action="javascript(void)"
            />
          </FormItem>
          <FormItem label="商品描述" prop="desc">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.desc"
                type="textarea"
                :autosize="{ minRows: 3 }"
                :maxlength="500"
                placeholder="输入商品描述信息(不超过500字符)"
              >
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="备注" prop="remark">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.remark"
                type="textarea"
                :autosize="{ minRows: 3 }"
                :maxlength="500"
                placeholder="输入商品备注信息(不超过500字符)"
              >
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem v-if="mode">
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
      <section v-if="!mode">
        <header>
          其他信息
        </header>
        <div class="section-body">
          <FormItem label="创建时间" prop="createdDate">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.createdDate }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="创建人" prop="createdBy">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.createdBy }}</p>
              </Col>
            </Row>
          </FormItem>
          <!-- <FormItem label="最后修改时间" prop="lastModified">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.lastModified }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="最后修改人" prop="lastModifiedBy">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.lastModifiedBy }}</p>
              </Col>
            </Row>
          </FormItem> -->
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
import { CATEGORYOFGOOD, GOLDTYPE, GOLDPURITY, MAINIMAGENUM, MAINIMAGEMAXSIZE,
  BRANDOPTIONS, SERIESOPTIONS, RELEASESTATUS, CERTIFICATES } from '@/constant'
import ImageUploader from './ImageUploader'

export default {
  components: {
    'image-uploader': ImageUploader,
  },
  props: {
    modeType: {
      type: Number,
      default: 0,
    }
  },
  data () {
    return {
      mode: this.modeType, // 0:update, 1:add
      categoryOfGood: CATEGORYOFGOOD,
      goldTypes: GOLDTYPE,
      goldPurity: GOLDPURITY,
      brandOptions: BRANDOPTIONS,
      seriesOptions: SERIESOPTIONS,
      releaseStatus: RELEASESTATUS,
      certificates: CERTIFICATES,
      MainImageNum: MAINIMAGENUM,
      imageMaxSize: MAINIMAGEMAXSIZE,
      formGoodsBak: {},
      formGoods: {
        productid: '',
        category: '',
        model: '',
        title: '',
        goldType: '',
        goldPurity: '',
        releaseStatus: '',
        brand: '',
        series: '',
        certificate: '',
        size: '',
        goldContent: '',
        diamondWeight: '',
        sellingPrice: '',
        deposit: '',
        rent: '',
        rentcycle: 0,
        reletcycle: 0,
        desc: '',
        remark: '',
        createdDate: '',
        createdBy: '',
        // lastModified: '',
        // lastModifiedBy: '',
        // MainImage: [
        //   {
        //     name: 'a42bdcc1178e62b4694c830f028db5c0',
        //     url: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
        //   },
        //   {
        //     name: 'bc7521e033abdd1e92222d733590f104',
        //     url: 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar',
        //   },
        // ],
        // MainImage0: [{
        //   name: 'a42bdcc1178e62b4694c830f028db5c0',
        //   file: null,
        //   url: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
        //   avatar: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
        // }],
        // MainImage1: [{
        //   name: 'bc7521e033abdd1e92222d733590f104',
        //   file: null,
        //   url: 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar',
        //   avatar: 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar',
        // }],
        MainImage0: [],
        MainImage1: [],
        MainImage2: [],
        MainImage3: [],
        MainImage4: [],
        MainImage5: [],
        detailImages: [],
      },
      ruleValidate: {
        category: [{
          required: true,
          message: '商品类别不能为空',
          trigger: 'blur',
        }],
        model: [{
          required: true,
          message: '商品型号不能为空',
          trigger: 'blur',
        }],
        title: [{
          required: true,
          message: '商品名称不能为空',
          trigger: 'blur',
        }],
        releaseStatus: [{
          required: true,
          message: '发布状态不能为空',
          trigger: 'blur',
        }],
        brand: [{
          required: true,
          message: '品牌不能为空',
          trigger: 'blur',
        }],
        series: [{
          required: true,
          message: '系列不能为空',
          trigger: 'blur',
        }],
        goldType: [{
          required: true,
          message: '镶嵌材质不能为空',
          trigger: 'blur',
        }],
        goldPurity: [{
          required: true,
          message: '材质纯度不能为空',
          trigger: 'blur',
        }],
        certificate: [{
          required: true,
          message: '证书不能为空',
          trigger: 'blur',
        }],
        size: [{
          required: true,
          message: '尺寸不能为空',
          trigger: 'blur',
        }],
        goldContent: [{
          required: true,
          message: '含金量不能为空',
          trigger: 'blur',
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            const num = parseFloat(value, 10)
            if (isNaN(num)) {
              cb(new Error('输入必须为数值'))
            }
            if (num <= 0) {
              cb(new Error('含金量不能小于0'))
            }
            cb()
          },
        }],
        diamondWeight: [{
          required: true,
          message: '钻石重量不能为空',
          trigger: 'blur',
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            if (isNaN(+value)) {
              cb(new Error('输入必须为数值'))
            }
            const num = parseFloat(value, 10)
            if (num <= 0) {
              cb(new Error('钻石重量不能小于0'))
            }
            cb()
          },
        }],
        sellingPrice: [{
          required: true,
          message: '销售价不能为空',
          trigger: 'blur',
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            if (isNaN(+value)) {
              cb(new Error('输入必须为数值'))
            }
            const num = parseFloat(value, 10)
            if (num <= 0) {
              cb(new Error('销售价不能小于0'))
            }
            cb()
          },
        }],
        deposit: [{
          required: true,
          message: '押金不能为空',
          trigger: 'blur',
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            if (isNaN(+value)) {
              cb(new Error('输入必须为数值'))
            }
            const num = parseFloat(value, 10)

            if (num <= 0) {
              cb(new Error('押金不能小于0'))
            }
            cb()
          },
        }],
        rent: [{
          required: true,
          message: '租金不能为空',
          trigger: 'blur',
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            if (isNaN(+value)) {
              cb(new Error('输入必须为数值'))
            }
            const num = parseFloat(value, 10)
            if (num <= 0) {
              cb(new Error('租金不能小于0'))
            }
            cb()
          },
        }],
        rentcycle: [{
          required: true,
          message: '起租周期不能为空',
          trigger: 'blur',
          type: 'number',
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            const numFloat = parseFloat(value, 10)
            const numInt = parseInt(value, 10)
            if (isNaN(+value) || numFloat !== numInt) {
              cb(new Error('输入必须为整数'))
            }
            if (numInt < 1) {
              cb(new Error('起租周期至少1天'))
            }
            cb()
          },
        }],
        reletcycle: [{
          required: true,
          message: '起租周期不能为空',
          trigger: 'blur',
          type: 'number',
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            const numFloat = parseFloat(value, 10)
            const numInt = parseInt(value, 10)
            if (isNaN(+value) || numFloat !== numInt) {
              cb(new Error('输入必须为整数'))
            }
            if (numInt < 1) {
              cb(new Error('起租周期至少1天'))
            }
            cb()
          },
        }],
        desc: [{
          trigger: 'change',
          type: 'string',
          max: 500,
          message: '商品描述至多500字符',
        }],
        remark: [{
          trigger: 'change',
          type: 'string',
          max: 500,
          message: '备注至多500字符',
        }],
      },
    }
  },
  created () {
    if (!this.modeType) {
      const url = '/product/'
      this.formGoods.productid = this.$route.params.id
      this.$fetch(url, {
        params: {
          productid: this.formGoods.productid,
        }
      })
        .then(resp => {
          console.log(resp)
          const results = resp.data.results
          if (results && results.length) {
            const temp = results[0]
            for (let i = 0; i < this.MainImageNum; ++i) {
              temp[`MainImage${i}`] =
                temp[`MainImage${i}`]
                  && [{
                    ...temp[`MainImage${i}`],
                  }]
                  || []
            }
            temp.detailImages = temp.detailImages
              && [{
                ...temp.detailImages,
              }]
              || []
            this.formGoods = {
              ...temp,
            }
            this.formGoodsBak = {
              ...temp,
            }
          } else {
            this.$Message.error({
              content: '未找到该商品的详细信息',
            })
          }
        })
        .catch(err => {
          console.log(err)
          this.$Message.error({
            content: err,
          })
        })
    }
  },
  methods: {
    formPostdata () {
      // console.log(this.formGoods)
      const data = new FormData()
      Object.keys(this.formGoods).forEach(key => {
        const value = this.formGoods[key]
        if (key.includes('Image')) {
          if (value && value[0] && value[0].file) {
            data.append(key, value[0].file, value[0].name)
          }
          if (value && !value.length) {
            data.append(key, '')
          }
        } else {
          data.append(key, value)
        }
      })

      return data
    },
    save () {
      this.$refs.goodsForm.validate(valid => {
        if (valid) {
          const url = '/productupdate/'
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
              for (let i = 0; i < this.MainImageNum; ++i) {
                temp[`MainImage${i}`] =
                  temp[`MainImage${i}`]
                    && [{
                      ...temp[`MainImage${i}`],
                    }]
                    || []
              }
              temp.detailImages = temp.detailImages
                && [{
                  ...temp.detailImages,
                }]
                || []
              this.formGoods = {
                ...temp,
              }
              this.formGoodsBak = {
                ...temp,
              }
              this.$Message.success({
                content: '保存成功',
              })
            })
            .catch(err => {
              console.log(err)
              this.$Message.error({
                content: err,
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
      this.formGoods = {
        ...this.formGoodsBak,
      }
      this.$Message.success({
        content: '重置成功',
      })
    },
    filterMethod (value, option) {
      return option.includes(value)
    },
  }
}
</script>

<style lang="less">
#goods-detail {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  overflow: auto;

  * {
    font-size: 14px;
  }

  .edit-btn {
    cursor: pointer;
  }

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

        &.main-images .ivu-form-item-content {
          display: flex;
          flex-wrap: wrap;

          .image-uploader {
            .upload {
              margin-right: 4px;
            }
          }
        }

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
          display: inline-block;

          & + i {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
