<template>
  <div id="packageservice-detail">
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
            <FormItem label="套餐ID" prop="packageshot.id">
              <p>{{ form.packageshot.id }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="套餐名称" prop="packageshot.title">
              <p>{{ form.packageshot.title }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="套餐价格" prop="packageshot.price">
              <p>{{ form.packageshot.price }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="套餐时长" prop="packageshot.period">
              <p>{{ form.packageshot.period }}</p>
            </FormItem>
            </Col>
          </Row>
          <FormItem label="套餐可选商品范围" prop="packageProductDomain">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ packageProductDomain }}</p>
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
            <FormItem label="已付金额" prop="realChargingRent">
              <p>{{ form.realChargingRent }}</p>
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
          <FormItem label="信用状态" prop="creditStatus">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ creditStatus }}</p>
              </Col>
            </Row>
          </FormItem>
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
              <p>{{ form.reservedProduct && form.reservedProduct.model }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品品牌" prop="reservedProduct.brand">
              <p>{{ form.reservedProduct && form.reservedProduct.brand }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品系列" prop="reservedProduct.series">
              <p>{{ form.reservedProduct && form.reservedProduct.series }}</p>
            </FormItem>
            </Col>
          </Row>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品名称" prop="reservedProduct.title">
              <p>{{ form.reservedProduct && form.reservedProduct.title }}</p>
            </FormItem>
            </Col>
            <Col :xs="12" :md="10" :lg="8">
            <FormItem label="预约商品销售价" prop="reservedProduct.sellingPrice">
              <p>{{ form.reservedProduct && form.reservedProduct.sellingPrice }}</p>
            </FormItem>
            </Col>
          </Row>
          <div class="dotted-line" />
          <Tabs
            v-if="!finishDone"
            value="confirmDelivery"
          >
            <TabPane v-if="toDelivery" label="取货信息" name="confirmDelivery">
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
                  >
                  <Button
                    slot="append"
                    icon="ios-search"
                    @click="searchProductid"
                    :loading="searchProductLoading"
                  />
                  </Input>
                  </Col>
                <!-- <Button
                  type="primary"
                  size="small"
                  :style="{ 'margin-left': '25px' }"
                  @click="clickDeliveryBtn"
                  :disabled="deliveryDone"
                >
                  {{ disableProductid ? '修改' : '取货' }}
                </Button> -->
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
                    <p>{{ form.product && form.product.model }}</p>
                  </FormItem>
                  </Col>
                </Row>
                <Row :style="{ 'padding-left': 0 }">
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品品牌" prop="product.brand">
                    <p>{{ form.product && form.product.brand }}</p>
                  </FormItem>
                  </Col>
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品系列" prop="product.series">
                    <p>{{ form.product && form.product.series }}</p>
                  </FormItem>
                  </Col>
                </Row>
                <Row :style="{ 'padding-left': 0 }">
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品名称" prop="product.title">
                    <p>{{ form.product && form.product.title }}</p>
                  </FormItem>
                  </Col>
                  <Col :xs="12" :md="10" :lg="8">
                  <FormItem label="商品销售价" prop="product.sellingPrice">
                    <p>{{ form.product && form.product.sellingPrice }}</p>
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
                    type="primary"
                    @click="confirmDelivery"
                    :loading="confirmDeliveryLoading"
                    long
                  >{{ '确认取货' }}</Button>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Button
                    type="primary"
                    @click="confirmFinish"
                    :loading="confirmFinishLoading"
                    long
                  >{{ '确认完成' }}</Button>
                  </Col>
                </Row>
              </FormItem>
            </TabPane>
            <TabPane v-if="toReturn" label="还货信息" name="confirmReturn">
              <!-- <FormItem label="还货方式" prop="returnMethod">
                <Row>
                  <Col :xs="24" :md="16" :lg="12" :style="{ position: 'relative' }">
                  <Select
                    v-model="returnMethod"
                    @on-change="changeReturnMethod"
                  >
                    <Option
                      :value="0"
                      :key="0"
                    >
                      正常
                    </Option>
                    <Option
                      :value="1"
                      :key="1"
                    >
                      转售
                    </Option>
                  </Select>
                  </Col>
                </Row>
              </FormItem> -->
              <div v-if="returnMethod">
                <FormItem label="物品状态" prop="leaseholdStatus">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12" :style="{ position: 'relative' }">
                    <Select
                      v-model="form.leaseholdStatus"
                      @on-change="changeLeaseholdStatus"
                    >
                      <Option
                        v-for="item in leaseholdStatuss"
                        :value="item.key"
                        :key="item.key"
                      >
                        {{ item.value }}
                      </Option>
                    </Select>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem label="销售金额" prop="sellingAmount">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <Input
                      type="text"
                      :value="form.sellingAmount"
                      @on-change="changeSellingAmount"
                      placeholder="请填写商品的销售价格"
                    >
                    <span slot="append">元</span>
                    </Input>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem label="用户余额抵扣" prop="useBalance" v-show="showUseBalanceSwitch">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <i-switch
                      v-model="form.useBalance"
                      :true-value="'1'"
                      :false-value="'0'"
                      size="large"
                      @on-change="onChangeUseBalance"
                    />
                    <span>{{ userBalanceDesc }}</span>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem
                  v-show="showUseBalanceSwitch"
                  label="还需支付金额"
                  prop="stillToPayAmount"
                >
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <span>{{ `¥${form.stillToPayAmount || 0}` }}</span>
                    </Col>
                  </Row>
                </FormItem>
              </div>
              <div v-else>
                <FormItem label="物品状态" prop="leaseholdStatus">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12" :style="{ position: 'relative' }">
                    <Select
                      v-model="form.leaseholdStatus"
                      @on-change="changeLeaseholdStatus"
                    >
                      <Option
                        v-for="item in leaseholdStatuss"
                        :value="item.key"
                        :key="item.key"
                      >
                        {{ item.value }}
                      </Option>
                    </Select>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem v-if="form.leaseholdStatus === '1'" label="赔偿金额" prop="compensation">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <Input
                      type="text"
                      placeholder="请填写物品损坏的赔偿金额"
                      :value="form.compensation"
                      @on-change="changeCompensation"
                    >
                    <span slot="append">元</span>
                    </Input>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem label="用户余额抵扣" prop="useBalance" v-if="showUseBalanceSwitch">
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <i-switch
                      v-model="form.useBalance"
                      :true-value="'1'"
                      :false-value="'0'"
                      size="large"
                      @on-change="onChangeUseBalance"
                    />
                    <span>{{ userBalanceDesc }}</span>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem
                  v-show="showUseBalanceSwitch"
                  label="还需支付金额"
                  prop="stillToPayAmount"
                >
                  <Row>
                    <Col :xs="24" :md="16" :lg="12">
                    <span>{{ `¥${form.stillToPayAmount || 0}` }}</span>
                    </Col>
                  </Row>
                </FormItem>
              </div>
              <FormItem label="还货门店" prop="returnStore">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <p>{{ form.returnStore }}</p>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="还货经办人" prop="returnOperator">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <p>{{ form.returnOperator }}</p>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="备注" prop="remark">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Input
                    v-model="form.remarks"
                    type="textarea"
                    :autosize="{ minRows: 3 }"
                    :maxlength="500"
                    placeholder="输入备注信息(不超过500字符)"
                  >
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Button
                    type="primary"
                    @click="confirmFinish"
                    :loading="confirmFinishLoading"
                    long
                  >{{ '确认还货' }}</Button>
                  </Col>
                </Row>
              </FormItem>
            </TabPane>
          </Tabs>
        </div>
      </section>
    </Form>
    <section class="exchange-history">
      <header>换货记录</header>
      <div v-if="form.changelist" class="section-body">
      </div>
      <div v-else class="has-no-exchange-history">
        暂无换货历史记录
      </div>
    </section>
    <Modal v-model="confirmDeliveryModal" width="360">
      <p slot="header" style="color: #19be6b;text-align: center">
        <Icon type="ios-information" />
        <span>确认取货</span>
      </p>
      <div style="text-align:center">
        <p>确认取货后，所选租赁商品将不得再修改。</p>
        <p>是否确认取货?</p>
      </div>
      <div slot="footer">
        <Button type="success" long @click="handleConfirmDeliveryModal">确认</Button>
      </div>
    </Modal>
    <Modal v-model="confirmFinishModal" width="360">
      <p slot="header" style="color: #19be6b;text-align: center">
        <Icon type="ios-information" />
        <span>服务完成</span>
      </p>
      <div style="text-align:center">
        <p>确认服务完成后，服务将可能被关闭。</p>
        <p>是否确认服务完成?</p>
      </div>
      <div slot="footer">
        <Button type="success" long @click="handleConfirmFinishModal">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SERVICETYPE, PACKAGESTATUS, LEASEHOLDSTATUS, CATEGORYOFGOOD,
  CREDITSTATUS, DELIVERYMODE } from '@/constant'
import IconTooltip from './IconTooltip'

export default {
  components: {
    IconTooltip,
  },
  data () {
    return {
      serviceTypes: SERVICETYPE,
      serviceStatuss: PACKAGESTATUS,
      leaseholdStatuss: LEASEHOLDSTATUS,
      creditStatuss: CREDITSTATUS,
      deliveryModes: DELIVERYMODE,
      categoryOfGood: CATEGORYOFGOOD,
      confirmDeliveryLoading: false,
      confirmFinishLoading: false,
      confirmDeliveryModal: false,
      confirmFinishModal: false,
      // stepStatus: 'process',
      // disableProductid: true,
      searchProductLoading: false,
      completeTabs: 'rentClose',
      userBalance: '',
      showUseBalanceSwitch: false,
      returnMethod: 0, // 0: normal, 1: toSell
      form: {
        serviceNo: '',
        serviceType: '1',
        memberId: '',
        name: '',
        phone: '',
        receiverName: '',
        receiverPhone: '',
        address: '',
        packageshot: {
          id: '',
          title: '',
          price: '',
          period: '',
          lowerLimit: '',
          upperLimit: '',
        },
        initialRent: '',
        initialDeposit: '',
        rentPeriod: '',
        rentStartDate: '',
        rentDueDate: '',
        residualRent: '',
        residualDeposit: '',
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
        leaseholdStatus: '0',
        creditStatus: '0',
        remarks: '',
        reservedProductid: '',
        reservedProduct: {
          category: '',
          model: '',
          title: '',
          brand: '',
          series: '',
          sellingPrice: '',
        },
        createDate: '',
        finishDate: '',
        deliveryOperator: '',
        returnOperator: '',
        serviceCloseOperator: '',
        deliveryStore: '',
        deliveryMode: '0',
        serialNumner: '',
        logisticsCompany: '',
        trackingNumber: '',
        returnStore: '',
        realChargingRent: '0',
        compensation: '0',
        useBalance: '0',
        stillToPayAmount: 0,
        changelist: [],
        sellingAmount: '0',
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
        sellingAmount: [{
          trigger: 'blur',
          validator (rule, value, cb) {
            if (value) {
              const numFloat = parseFloat(value, 10)
              if (isNaN(+value) || numFloat < 0) {
                cb(new Error('补差金额不能为负数'))
              }
              cb()
            }
          },
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            if (value) {
              const numFloat = parseFloat(value, 10)
              if (isNaN(+value) || numFloat < 0) {
                cb(new Error('补差金额不能为负数'))
              }
              cb()
            }
          },
        }],
        compensation: [{
          trigger: 'blur',
          validator (rule, value, cb) {
            if (value) {
              const numFloat = parseFloat(value, 10)
              if (isNaN(+value) || numFloat < 0) {
                cb(new Error('赔偿金额不能为负数'))
              }
              cb()
            }
          },
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            if (value) {
              const numFloat = parseFloat(value, 10)
              if (isNaN(+value) || numFloat < 0) {
                cb(new Error('赔偿金额不能为负数'))
              }
              cb()
            }
          },
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
    creditStatus: function () {
      const creditStatus = this.creditStatuss.find(cur => cur.key === this.form.creditStatus)
      return creditStatus && creditStatus.value
    },
    category: function () {
      const category = this.form.product && this.categoryOfGood.find(cur =>
        cur.key === this.form.product.category)
      return category && category.value
    },
    reservedCategory: function () {
      const reservedCategory = this.form.reservedProduct && this.categoryOfGood.find(cur =>
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
        temp = this.serviceStatuss.slice(0, len - 3)
        finishStatus = {
          title: this.serviceStatuss[len - 3].value,
        }
        if (this.form.serviceStatus === this.serviceStatuss[len - 2].key) {
          finishStatus.title = this.serviceStatuss[this.form.serviceStatus].value
        }
      }

      return temp.map(cur => ({
        title: cur.value,
      })).concat([finishStatus])
    },
    toDelivery: function () {
      const { serviceStatus, reservedProduct, product } = this.form
      const status = +serviceStatus
      return reservedProduct || !product || status === 2
    },
    toReturn: function () {
      const { product, reservedProduct } = this.form
      return product && !reservedProduct
    },
    finishDone: function () {
      const status = +this.form.serviceStatus
      return status === 4 || status === 5
    },
    curStep: function () {
      const status = +this.form.serviceStatus
      return status > 3 ? status === 6 ? 2 : status + 1 : status
    },
    curStepStatus: function () {
      const len = this.serviceStatuss.length
      return this.form.serviceStatus === this.serviceStatuss[len - 1].key
        ? 'error' : 'process'
    },
    userBalanceDesc: function () {
      return '当前账户余额 ￥' + this.userBalance
    },
    packageProductDomain: function () {
      const { lowerLimit, upperLimit } = this.form.packageshot
      return '¥' + lowerLimit +
        (upperLimit ? ' ～ ¥' + upperLimit : '')
    },
    ...mapState([
      'login',
    ]),
  },
  // watch: {
  //   'form.compensation': function (val, oldVal) {
  //     const { useBalance } = this.form
  //     const amount = parseFloat(val || '0')
  //     const gap = amount - parseFloat(this.userBalance)
  //     // console.log('form.compensation', amount)
  //     if (amount > 0) {
  //       this.showUseBalanceSwitch = true
  //       this.form.stillToPayAmount = +useBalance ? (gap > 0 ? gap : 0) : amount
  //     } else {
  //       this.showUseBalanceSwitch = false
  //       this.form.stillToPayAmount = 0
  //     }
  //   },
  //   'form.leaseholdStatus': function (val, oldVal) {
  //     if (val === '0') {
  //       this.showUseBalanceSwitch = false
  //       this.form.compensation = '0'
  //       this.form.useBalance = '0'
  //     }
  //   },
  //   'form.sellingAmount': function (val, oldVal) {
  //     if (this.returnMethod) {
  //       const { useBalance } = this.form
  //       const amount = parseFloat(val || '0')
  //       const gap = amount - parseFloat(this.userBalance)
  //       // console.log('form.sellingAmount', amount)
  //       if (amount > 0) {
  //         this.showUseBalanceSwitch = true
  //         this.form.stillToPayAmount = +useBalance ? (gap > 0 ? gap : 0) : amount
  //       } else {
  //         this.showUseBalanceSwitch = false
  //         this.form.stillToPayAmount = 0
  //       }
  //     }
  //   },
  //   returnMethod: function (val, oldVal) {
  //     if (val) {
  //       this.form.sellingAmount = this.form.product.sellingPrice
  //       this.form.useBalance = '0'
  //       this.showUseBalanceSwitch = true
  //       this.form.stillToPayAmount = parseFloat(this.form.sellingAmount)
  //     } else {
  //       this.form.useBalance = '0'
  //       this.showUseBalanceSwitch = false
  //       this.form.compensation = '0'
  //     }
  //   },
  // },
  created () {
    this.form.serviceNo = this.$route.params.id
    const url = '/admin/ComboService/'
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
          this.form.serviceType || (this.form.serviceType = '1')
          this.form.deliveryOperator || (this.form.deliveryOperator = this.login.id)
          this.form.returnOperator ||
            (this.form.returnOperator = this.login.id)
          this.form.serviceCloseOperator ||
            (this.form.serviceCloseOperator = this.login.id)
          if (!this.form.product) {
            this.form.product = {
              ...this.form.reservedProduct,
            }
            this.form.productid = this.form.reservedProductid
          }
          this.getMemberBalance()
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
    changeCompensation (event) {
      this.form.compensation = event.target.value
      const { useBalance } = this.form
      const amount = parseFloat(event.target.value || '0')
      const gap = amount - parseFloat(this.userBalance)
      console.log('form.compensation', amount)
      if (amount > 0) {
        this.showUseBalanceSwitch = true
        this.form.stillToPayAmount = +useBalance ? (gap > 0 ? gap : 0) : amount
        // console.log('form.compensation', amount)
      } else {
        this.showUseBalanceSwitch = false
        this.form.stillToPayAmount = 0
      }
      this.$forceUpdate()
    },
    changeReturnMethod (value) {
      if (value) {
        this.form.sellingAmount = this.form.product.sellingPrice
        this.form.useBalance = '0'
        this.showUseBalanceSwitch = true
        this.form.stillToPayAmount = parseFloat(this.form.sellingAmount)
      } else {
        this.form.useBalance = '0'
        this.showUseBalanceSwitch = false
        this.form.compensation = '0'
      }
      this.$forceUpdate()
    },
    changeLeaseholdStatus (value) {
      if (value === '0') {
        this.showUseBalanceSwitch = false
        this.form.compensation = '0'
        this.form.useBalance = '0'
        this.$forceUpdate()
      }
    },
    changeSellingAmount (event) {
      // console.log('form.sellingAmount', event.target.value)
      this.form.sellingAmount = event.target.value
      const { useBalance } = this.form
      const amount = parseFloat(event.target.value || '0')
      const gap = amount - parseFloat(this.userBalance)
      // console.log('form.sellingAmount', amount)
      if (amount > 0) {
        this.showUseBalanceSwitch = true
        this.form.stillToPayAmount = +useBalance ? (gap > 0 ? gap : 0) : amount
        // console.log('form.stillToPayAmount', this.form.stillToPayAmount)
      } else {
        this.showUseBalanceSwitch = false
        this.form.stillToPayAmount = 0
      }
      this.$forceUpdate()
    },
    getMemberBalance () {
      const url = '/admin/member/'
      const { memberId } = this.form
      this.$fetch(url, {
        params: {
          memberId,
        },
      }).then(resp => {
        console.log('usebalance', resp)
        const { balance } = resp.data.results[0]
        this.userBalance = balance
      }).catch(err => {
        console.log('err', err)
      })
    },
    onChangeUseBalance (use) {
      if (use) {
        if (this.returnMethod) {
          const { sellingAmount } = this.form
          const total = parseFloat(sellingAmount)
            - parseFloat(this.userBalance)
          if (total < 0) {
            this.form.stillToPayAmount = 0
          } else {
            this.form.stillToPayAmount = Math.abs(total)
          }
        } else {
          const { compensation } = this.form
          const total = parseFloat(compensation)
            - parseFloat(this.userBalance)
          if (total < 0) {
            this.form.stillToPayAmount = 0
          } else {
            this.form.stillToPayAmount = Math.abs(total)
          }
        }
      }
    },
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
    confirmFinish (status) {
      this.confirmFinishModal = true
    },
    handleConfirmFinishModal () {
      this.confirmFinishModal = false
      this.confirmFinishLoading = true
      const { serviceNo, serviceType, serviceCloseOperator,
        returnStore, useBalance, compensation, remarks,
        leaseholdStatus, sellingAmount } = this.form
      const options = this.returnMethod ? {
        sellingAmount,
      } : {
        compensation,
      }
      const url = '/admin/CompleteService/'
      this.$fetch(url, {
        data: {
          serviceNo,
          serviceType,
          serviceCloseOperator,
          returnStore,
          useBalance,
          remarks,
          leaseholdStatus,
          ...options,
        },
        method: 'post',
      })
        .then(resp => {
          console.log(resp)
          const { serviceStatus } = resp.data
          this.form.serviceStatus = serviceStatus
          this.confirmFinishLoading = false
          this.$Message.success({
            content: '服务完成成功',
          })
        })
        .catch(err => {
          console.log(err)
          this.confirmFinishLoading = false
          this.$Message.error({
            content: '服务完成失败',
          })
        })
    },
  },
}
</script>

<style lang="less">
#packageservice-detail {
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
    border-bottom-style: dashed;

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

  .exchange-history {
    border-top: none;

    header {
      background: #fff;
      font-size: 14px;
    }

    .has-no-exchange-history {
      padding: 15px;
      font-size: 12px;
    }
  }
}
</style>
