<template>
  <div id="rentservice-detail">
    <Steps class="steps" :current="curStep" size="small" :status="stepStatus">
      <Step
        v-for="(item, k) in steps"
        :key="k"
        :title="item.title"
        :content="item.content"
      />
    </Steps>
    <Form class="form" :model="form" :label-width="120">
      <section>
        <div class="section-body">
          <FormItem label="服务单号" prop="servieNo">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.servieNo }}</p>
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
          <FormItem label="地址" prop="address">
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
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="租赁开始时间" prop="rentStartDate">
              <p>{{ form.rentStartDate }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="租赁完成时间" prop="rentDueDate">
              <p>{{ form.rentDueDate }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="租赁时长" prop="rentPeriod">
              <p>{{ form.rentPeriod }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="信用状态" prop="creditStatus">
              <p>{{ creditStatus }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="初始押金" prop="initialDeposit">
              <p>{{ form.initialDeposit }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="剩余押金" prop="residualDeposit">
              <p>{{ form.residualDeposit }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="初始租金" prop="initialRent">
              <p>{{ form.initialRent }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="剩余租金" prop="residualRent">
              <p>{{ form.residualRent }}</p>
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
            <FormItem label="预约商品类别" prop="reservedCategory">
              <p>{{ reservedCategory }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品型号" prop="reservedModel">
              <p>{{ form.reservedModel }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品品牌" prop="reservedBrand">
              <p>{{ form.reservedBrand }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品系列" prop="reservedSeries">
              <p>{{ form.reservedSeries }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品名称" prop="reservedTitle">
              <p>{{ form.reservedTitle }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品销售价" prop="reservedSellingPrice">
              <p>{{ form.reservedSellingPrice }}</p>
            </FormItem>
            </Col>
          </Row>
          <div class="dotted-line" />
          <FormItem label="商品ID" prop="productid" :style="{ 'margin-top': '10px'}">
            <Row>
              <Col :xs="12" :md="10" :lg="8">
              <Input
                type="text"
                v-model="form.productid"
                placeholder="请填写取货的商品ID"
                :disabled="disableProductid"
              >
              <Button
                slot="append"
                icon="ios-search"
                @click="searchProductid"
                :disabled="disableProductid"
                :loading="searchProductLoading"
              />
              </Input>
              </Col>
              <Button
                type="primary"
                size="small"
                :style="{ 'margin-left': '25px' }"
                @click="clickDeliveryBtn"
              >
                {{ disableProductid ? '修改' : '取货' }}
              </Button>
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
              <FormItem label="商品型号" prop="model">
                <p>{{ form.model }}</p>
              </FormItem>
              </Col>
            </Row>
            <Row :style="{ 'padding-left': 0 }">
              <Col :xs="12" :md="10" :lg="8">
              <FormItem label="商品品牌" prop="brand">
                <p>{{ form.brand }}</p>
              </FormItem>
              </Col>
              <Col :xs="12" :md="10" :lg="8">
              <FormItem label="商品系列" prop="series">
                <p>{{ form.series }}</p>
              </FormItem>
              </Col>
            </Row>
            <Row :style="{ 'padding-left': 0 }">
              <Col :xs="12" :md="10" :lg="8">
              <FormItem label="商品名称" prop="title">
                <p>{{ form.title }}</p>
              </FormItem>
              </Col>
              <Col :xs="12" :md="10" :lg="8">
              <FormItem label="商品销售价" prop="sellingPrice">
                <p>{{ form.sellingPrice }}</p>
              </FormItem>
              </Col>
            </Row>
          </div>
          <Tabs value="confirmDelivery" :style="{ 'margin-bottom': '10px' }">
            <TabPane label="取货信息" name="confirmDelivery">
              <FormItem label="商品编号" prop="serialNumber">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Input
                    type="text"
                    v-model="form.serialNumber"
                    placeholder="请填写取货的商品编号"
                  >
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="提货方式" prop="deliveryMode">
                <Row>
                  <Col :xs="24" :md="16" :lg="12" :style="{ position: 'relative' }">
                  <Select v-model="form.deliveryMode">
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
                    type="success"
                    @click="confirmDelivery"
                    :loading="confirmDeliveryLoading"
                    long
                  >确认取货</Button>
                  </Col>
                </Row>
              </FormItem>
            </TabPane>
          </Tabs>
          <div class="dotted-line" />
        </div>
      </section>
    </Form>
  </div>
</template>

<script>
import { SERVICETYPE, SERVICESTATUS, LEASEHOLDSTATUS, CATEGORYOFGOOD,
  CREDITSTATUS, DELIVERYMODE } from '@/constant'
import IconTooltip from './IconTooltip'

export default {
  components: {
    IconTooltip,
  },
  data () {
    return {
      serviceTypes: SERVICETYPE,
      serviceStatuss: SERVICESTATUS,
      leaseholdStatuss: LEASEHOLDSTATUS,
      creditStatuss: CREDITSTATUS,
      deliveryModes: DELIVERYMODE,
      categoryOfGood: CATEGORYOFGOOD,
      confirmDeliveryLoading: false,
      curStep: 0,
      stepStatus: 'process',
      disableProductid: true,
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
        initialRent: '',
        initialDeposit: '',
        rentPeriod: '',
        rentStartDate: '',
        rentDueDate: '',
        realChargingTime: '',
        residualRent: '',
        residualDeposit: '',
        serviceStatus: '5',
        productId: '',
        category: '1',
        model: '',
        title: '',
        brand: '',
        series: '',
        sellingPrice: '',
        leaseholdStatus: '0',
        creditStatus: '0',
        remarks: '',
        reservedProductid: '',
        reservedCategory: '0',
        reservedModel: '',
        reservedTitle: '',
        reservedBrand: '',
        reservedSeries: '',
        reservedSellingPrice: '',
        createDate: '',
        finishDate: '',
        deliveryOperator: '',
        serviceCloseOperator: '',
        deliveryStore: '',
        deliveryMode: '0',
        serialNumner: '',
        logisticsCompany: '',
        trackingNumber: '',
        returnStore: '',
        realChargingRent: '',
        returnDeposit: '',
        adjustmentAmount: '',
        compensation: '',
        relatedOrders: [],
      },
    }
  },
  computed: {
    serviceType: function () {
      const serviceType = this.serviceTypes.find(cur => cur.key === this.form.serviceType)
      return serviceType && serviceType.value
    },
    creditStatus: function () {
      const creditStatus = this.creditStatuss.find(cur => cur.key === this.form.creditStatus)
      return creditStatus && creditStatus.value
    },
    category: function () {
      const category = this.categoryOfGood.find(cur =>
        cur.key === this.form.category)
      return category && category.value
    },
    reservedCategory: function () {
      const reservedCategory = this.categoryOfGood.find(cur =>
        cur.key === this.form.reservedCategory)
      return reservedCategory && reservedCategory.value
    },
    steps: function () {
      const len = this.serviceStatuss.length
      const temp = this.serviceStatuss.slice(0, len - 2)
      const finshStatus = {
        title: '已完成',
      }
      if (this.form.serviceStatus === this.serviceStatuss[len - 2].key
        || this.form.serviceStatus === this.serviceStatuss[len - 1].key) {
        finshStatus.title = this.serviceStatuss[this.form.serviceStatus].value
      }

      return temp.map(cur => ({
        title: cur.value,
      })).concat([finshStatus])
    },
  },
  created () {
    this.form.servieNo = this.$route.params.id
    // const url = '/rentservice/'
    // this.$fetch(url, {
    //   params: {
    //     servieNo: this.form.servieNo,
    //   }
    // })
    //   .then(resp => {
    //     const results = resp.data.results
    //     if (results && results.length) {
    //       this.form = {
    //         ...results[0],
    //       }
    //       this.form.address = JSON.parse(this.form.address)
    //     } else {
    //       this.$Message.error({
    //         content: '未找到该服务单的详细信息',
    //       })
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     this.$Message.error({
    //       content: err,
    //     })
    //   })
  },
  methods: {
    searchProductid () {
      this.searchProductLoading = true
      const url = '/product/'
      this.$fetch(url, {
        params: {
          productid: this.form.productid,
        }
      })
        .then(resp => {
          console.log(resp)
          const results = resp.data.results
          if (results && results.length) {
            const { category, model, title, brand, series, sellingPrice } = results[0]
            this.form = Object.assign({}, this.form, {
              category, model, title, brand, series, sellingPrice,
            })
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
            content: err,
          })
          this.searchProductLoading = false
        })
    },
    clickDeliveryBtn () {
      this.disableProductid = !this.disableProductid
    },
    confirmDelivery () {
      console.log('confirmDelivery')
    },
  },
}
</script>

<style lang="less">
#rentservice-detail {
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

      .delivery-container {
        position: relative;
      }
    }
  }
}
</style>
