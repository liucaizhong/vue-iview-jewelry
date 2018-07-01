<template>
  <div id="saleservice-detail">
    <Steps class="steps" :current="curStep" size="small" :status="curStepStatus">
      <Step
        v-for="(item, k) in steps"
        :key="k"
        :title="item.title"
        :content="item.content"
      />
    </Steps>
    <Form
      ref="form"
      class="form"
      :model="form"
      :label-width="180"
      :rules="ruleValidate"
    >
      <section>
        <div class="section-body">
          <FormItem label="服务单号" prop="serviceNo">
            <Row>
              <Col :xs="24" :md="18" :lg="16">
              <p>{{ form.serviceNo }}</p>
              <Button
                style="margin-left: 30px;"
                type="primary"
                @click="checkRelatedOrders"
                size="small"
              >查看关联订单</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="服务类型" prop="serviceType">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ serviceType }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="会员ID" prop="memberId">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.memberId }}</p>
              </Col>
            </Row>
          </FormItem>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="姓名" prop="name">
              <p>{{ form.name }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="手机号" prop="phone">
              <p>{{ form.phone }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="收货人姓名" prop="receiverName">
              <p>{{ form.receiverName }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="收货人手机" prop="receiverPhone">
              <p>{{ form.receiverPhone }}</p>
            </FormItem>
            </Col>
          </Row>
          <FormItem label="收货人地址" prop="address">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.address }}</p>
              </Col>
            </Row>
          </FormItem>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="服务单创建时间" prop="createDate">
              <p>{{ form.createDate }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="服务单结束时间" prop="finishDate">
              <p>{{ form.finishDate }}</p>
            </FormItem>
            </Col>
          </Row>
          <FormItem label="预约商品ID" prop="reservedProductid">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.reservedProductid }}</p>
              </Col>
            </Row>
          </FormItem>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品类别" prop="reservedProduct.category">
              <p>{{ reservedCategory }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品型号" prop="reservedProduct.model">
              <p>{{ form.reservedProduct.model }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品品牌" prop="reservedProduct.brand">
              <p>{{ form.reservedProduct.brand }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品系列" prop="reservedProduct.series">
              <p>{{ form.reservedProduct.series }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品名称" prop="reservedProduct.title">
              <p>{{ form.reservedProduct.title }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品销售价" prop="reservedProduct.sellingPrice">
              <p>{{ form.reservedProduct.sellingPrice }}</p>
            </FormItem>
            </Col>
          </Row>
          <div class="dotted-line" />
          <Tabs
            v-if="toDelivery"
            value="confirmDelivery"
          >
            <TabPane label="取货信息" name="confirmDelivery">
              <FormItem
                label="商品ID"
                prop="productid"
                :style="{ 'margin-top': '10px' }"
              >
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Input
                    type="text"
                    v-model="form.productid"
                    placeholder="请填写取货的商品ID"
                    :disabled="deliveryDone"
                  >
                  <Button
                    slot="append"
                    icon="ios-search"
                    @click="searchProductid"
                    :disabled="deliveryDone"
                    :loading="searchProductLoading"
                  />
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <div class="delivery-container">
                <Row :style="{ 'padding-left': 0 }">
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品类别" prop="category">
                    <p>{{ category }}</p>
                  </FormItem>
                  </Col>
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品型号" prop="product.model">
                    <p>{{ form.product.model }}</p>
                  </FormItem>
                  </Col>
                </Row>
                <Row :style="{ 'padding-left': 0 }">
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品品牌" prop="product.brand">
                    <p>{{ form.product.brand }}</p>
                  </FormItem>
                  </Col>
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品系列" prop="product.series">
                    <p>{{ form.product.series }}</p>
                  </FormItem>
                  </Col>
                </Row>
                <Row :style="{ 'padding-left': 0 }">
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品名称" prop="product.title">
                    <p>{{ form.product.title }}</p>
                  </FormItem>
                  </Col>
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品销售价" prop="product.sellingPrice">
                    <p>{{ form.product.sellingPrice }}</p>
                  </FormItem>
                  </Col>
                </Row>
              </div>
              <FormItem
                label="商品编号"
                prop="serialNumber"
              >
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Input
                    type="text"
                    v-model="form.serialNumber"
                    placeholder="请填写取货的商品编号"
                    :disabled="deliveryDone"
                  >
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="提货方式" prop="deliveryMode">
                <Row>
                  <Col :xs="24" :md="16" :lg="12" :style="{ position: 'relative' }">
                  <Select v-model="form.deliveryMode" :disabled="deliveryDone">
                    <Option
                      v-for="item in deliveryModes"
                      :value="item.key"
                      :key="item.key"
                    >
                      {{ item.value }}
                    </Option>
                  </Select>
                  </Col>
                </Row>
              </FormItem>
              <div v-if="form.deliveryMode === '0'">
                <FormItem label="物流公司" prop="logisticsCompany">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <Input
                      type="text"
                      v-model="form.logisticsCompany"
                      placeholder="请填写物流公司"
                      :disabled="deliveryDone"
                    >
                    </Input>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem label="运单号" prop="trackingNumber">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <Input
                      type="text"
                      v-model="form.trackingNumber"
                      placeholder="请填写运单号"
                      :disabled="deliveryDone"
                    >
                    </Input>
                    </Col>
                  </Row>
                </FormItem>
              </div>
              <div v-else>
                <FormItem label="取货门店" prop="deliveryStore">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <p>{{ form.deliveryStore }}</p>
                    </Col>
                  </Row>
                </FormItem>
              </div>
              <FormItem label="提货经办人" prop="deliveryOperator">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <p>{{ form.deliveryOperator }}</p>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Button
                    type="primary"
                    @click="confirmDelivery"
                    :loading="confirmDeliveryLoading"
                    long
                    :disabled="deliveryDone"
                  >{{ deliveryDone ? '已取货' : '确认取货' }}</Button>
                  </Col>
                </Row>
              </FormItem>
            </TabPane>
          </Tabs>
        </div>
      </section>
    </Form>
    <Modal v-model="confirmDeliveryModal" width="360">
      <p slot="header" style="color: #19be6b;text-align: center">
        <Icon type="ios-information" />
        <span>确认取货</span>
      </p>
      <div style="text-align:center">
        <p>确认取货后，服务单将不得再修改并确认完成。</p>
        <p>是否确认取货?</p>
      </div>
      <div slot="footer">
        <Button type="success" long @click="handleConfirmDeliveryModal">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SERVICETYPE, SALESTATUS, CATEGORYOFGOOD,
  DELIVERYMODE } from '@/constant'
import IconTooltip from './IconTooltip'

export default {
  components: {
    IconTooltip,
  },
  data () {
    return {
      serviceTypes: SERVICETYPE,
      serviceStatuss: SALESTATUS,
      deliveryModes: DELIVERYMODE,
      categoryOfGood: CATEGORYOFGOOD,
      confirmDeliveryLoading: false,
      confirmDeliveryModal: false,
      searchProductLoading: false,
      form: {
        serviceNo: '',
        serviceType: '0',
        memberId: '',
        name: '',
        phone: '',
        receiverName: '',
        receiverPhone: '',
        address: '',
        serviceStatus: '0',
        productid: '',
        product: {
          category: '',
          model: '',
          title: '',
          brand: '',
          series: '',
          sellingPrice: '',
        },
        remarks: '',
        reservedProductid: '',
        reservedProduct: {
          category: '1',
          model: '',
          title: '',
          brand: '',
          series: '',
          sellingPrice: '',
        },
        createDate: '',
        finishDate: '',
        deliveryOperator: '',
        deliveryStore: '',
        deliveryMode: '0',
        serialNumner: '',
        logisticsCompany: '',
        trackingNumber: '',
        returnStore: '',
      },
      ruleValidate: {
        productid: [{
          required: true,
          message: '商品ID不能为空',
          trigger: 'blur',
        }],
        serialNumber: [{
          required: true,
          message: '商品编号不能为空',
          trigger: 'blur',
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
  computed: {
    serviceType: function () {
      const serviceType = this.serviceTypes.find(cur => cur.key === this.form.serviceType)
      return serviceType && serviceType.value
    },
    category: function () {
      const category = this.categoryOfGood.find(cur =>
        cur.key === this.form.product.category)
      return category && category.value
    },
    reservedCategory: function () {
      const reservedCategory = this.categoryOfGood.find(cur =>
        cur.key === this.form.reservedProduct.category)
      return reservedCategory && reservedCategory.value
    },
    steps: function () {
      const len = this.serviceStatuss.length
      let temp = []
      let finishStatus = {}
      if (this.form.serviceStatus === this.serviceStatuss[len - 1].key) {
        temp = this.serviceStatuss.slice(0, 2)
        finishStatus = {
          title: this.serviceStatuss[len - 1].value,
        }
      } else {
        temp = this.serviceStatuss.slice(0, len - 2)
        finishStatus = {
          title: this.serviceStatuss[len - 2].value,
        }
      }

      return temp.map(cur => ({
        title: cur.value,
      })).concat([finishStatus])
    },
    toDelivery: function () {
      const status = +this.form.serviceStatus
      return status > 1 && status !== 4
    },
    deliveryDone: function () {
      const status = +this.form.serviceStatus
      return +status > 2 && status !== 4
    },
    curStep: function () {
      const status = +this.form.serviceStatus
      return status === 4 ? 2 : status
    },
    curStepStatus: function () {
      const len = this.serviceStatuss.length
      return this.form.serviceStatus === this.serviceStatuss[len - 1].key
        ? 'error' : 'process'
    },
    ...mapState([
      'login',
    ]),
  },
  created () {
    this.form.serviceNo = this.$route.params.id
    const url = '/admin/SellService/'
    this.$fetch(url, {
      params: {
        serviceNo: this.form.serviceNo,
      }
    })
      .then(resp => {
        console.log(resp)
        const results = resp.data.results
        if (results && results.length) {
          this.form = {
            ...results[0],
          }
          this.form.serviceType || (this.form.serviceType = '0')
          this.form.deliveryOperator || (this.form.deliveryOperator = this.login.userid)
          this.form.serviceCloseOperator ||
            (this.form.serviceCloseOperator = this.login.userid)
          if (!this.form.product) {
            this.form.product = {
              ...this.form.reservedProduct,
            }
            this.form.productid = this.form.reservedProductid
          }
        } else {
          this.$Message.error({
            content: '未找到该服务单的详细信息',
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.$Message.error({
          content: '未找到该服务单的详细信息',
        })
      })
  },
  methods: {
    checkRelatedOrders () {
      // console.log(this.form.serviceNo)
      this.$router.push({
        path: '/dashboard/rent-order/',
        query: {
          serviceNo: this.form.serviceNo,
        }
      })
    },
    searchProductid () {
      if (this.form.productid) {
        this.searchProductLoading = true
        const url = '/admin/product/'
        this.$fetch(url, {
          params: {
            productid: this.form.productid,
          }
        })
          .then(resp => {
            console.log(resp)
            const results = resp.data.results
            if (results && results.length) {
              // const { category, model, title, brand, series, sellingPrice } = results[0]
              // this.form = Object.assign({}, this.form., {
              //   category, model, title, brand, series, sellingPrice,
              // })
              this.form.product = {
                ...results[0],
              }
            } else {
              this.$Message.error({
                content: '未找到该商品的详细信息',
              })
            }
            this.searchProductLoading = false
          })
          .catch(err => {
            console.log(err)
            this.$Message.error({
              content: '未找到该商品的详细信息',
            })
            this.searchProductLoading = false
          })
      } else {
        this.$Message.error('商品ID不能为空')
      }
    },
    // clickDeliveryBtn () {
    //   this.disableProductid = !this.disableProductid
    // },
    confirmDelivery () {
      if (this.form.serialNumber) {
        this.confirmDeliveryModal = true
      } else {
        this.$Message.error('商品编号不能为空')
      }
    },
    handleConfirmDeliveryModal () {
      this.confirmDeliveryModal = false
      this.confirmDeliveryLoading = true
      // setTimeout(() => {
      //   this.form.serviceStatus = 3
      //   this.confirmDeliveryLoading = false
      // }, 2000)
      const { serviceNo, serviceType, productid, deliveryMode, deliveryOperator,
        deliveryStore, logisticsCompany, trackingNumber, serialNumber } = this.form
      const options = deliveryMode === '0' ? {
        logisticsCompany,
        trackingNumber,
      } : {
        deliveryStore,
      }
      const url = '/admin/ClaimGoods/'
      this.$fetch(url, {
        data: {
          serviceNo,
          serviceType,
          productid,
          deliveryMode,
          deliveryOperator,
          serialNumber,
          ...options,
        },
        method: 'post',
      })
        .then(resp => {
          console.log(resp)
          const { claimResult, serviceStatus } = resp.data
          if (claimResult === '0') {
            this.form.serviceStatus = serviceStatus
            this.confirmDeliveryLoading = false
            this.$Message.success({
              content: '提货成功',
            })
          } else {
            this.confirmDeliveryLoading = false
            this.$Message.error({
              content: '提货失败',
            })
          }
        })
        .catch(err => {
          console.log(err)
          this.confirmDeliveryLoading = false
          this.$Message.error({
            content: '提货失败',
          })
        })
    },
  },
}
</script>

<style lang="less">
#saleservice-detail {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  // overflow: auto;

  .steps {
    background: #fff;
    height: 60px;
    padding: 15px;
    // margin-bottom: 15px;
    border: 1px solid #e8e8e8;
    // border-bottom: none;
  }

  .form {
    overflow: auto;
    display: block;
    border: 1px solid #e8e8e8;
    border-top: none;
    background: #fff;

    * {
      font-size: 14px;
    }

    section {
      border: none;
      background: transparent;

      .ivu-form-item {
        margin-bottom: 14px;
      }

      .delivery-container {
        position: relative;
      }
    }
  }
}
</style>
