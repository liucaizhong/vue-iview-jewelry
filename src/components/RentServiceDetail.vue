<template>
  <div id="rentservice-detail">
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
              <div v-show="form.deliveryMode === '0'">
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
              <div v-show="form.deliveryMode === '1'">
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
          <div v-if="deliveryDone" class="dotted-line" />
          <Tabs
            v-if="deliveryDone"
            v-model="completeTabs"
            :animated="false"
            @on-click="switchRentCloseTab"
          >
            <TabPane v-if="form.serviceStatus !== '6'" label="租赁完成" name="rentClose">
              <FormItem
                label="实际计费时长"
                prop="realChargingTime"
              >
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Input
                    type="text"
                    v-model="form.realChargingTime"
                    placeholder="请填写服务的实际计费时长"
                    :disabled="finishDone"
                  >
                  <span slot="append">天</span>
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="物品状态" prop="leaseholdStatus">
                <Row>
                  <Col :xs="24" :md="16" :lg="12" :style="{ position: 'relative' }">
                  <Select
                    v-model="form.leaseholdStatus"
                    :disabled="finishDone"
                    @on-change="changeLeaseholdStatus0"
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
                    :value="form.compensation"
                    @on-change="changeCompensation"
                    placeholder="请填写物品损坏的赔偿金额"
                    :disabled="finishDone"
                  >
                  <span slot="append">元</span>
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem :label="finishDone ? '已退款' : '应退款'" prop="returnDeposit">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Input
                    type="text"
                    v-model="form.returnDeposit"
                    placeholder="请填写应退款金额"
                    :disabled="finishDone"
                    readonly
                  >
                  <span slot="append">元</span>
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="用户余额抵扣" prop="useBalance" v-if="showUseBalanceSwitch0">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <i-switch
                    v-model="form.useBalance"
                    :disabled="finishDone"
                    :true-value="'1'"
                    :false-value="'0'"
                    size="large"
                    @on-change="onChangeUseBalance0"
                  />
                  <span>{{ userBalanceDesc }}</span>
                  </Col>
                </Row>
              </FormItem>
              <FormItem
                v-show="showUseBalanceSwitch0"
                label="还需支付金额"
                prop="stillToPayAmount0"
              >
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <span>{{ `¥${form.stillToPayAmount0 || 0}` }}</span>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="还货门店" prop="returnStore">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <p>{{ form.returnStore }}</p>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="服务完成人" prop="serviceCloseOperator">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <p>{{ form.serviceCloseOperator }}</p>
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
                    :disabled="finishDone"
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
                    :disabled="finishDone"
                  >{{ finishDone ? '已完成' : '确认完成' }}</Button>
                  </Col>
                </Row>
              </FormItem>
            </TabPane>
            <TabPane v-if="form.serviceStatus !== '5'" label="租转售完成" name="rentToSaleClose">
              <FormItem label="物品状态" prop="leaseholdStatus">
                <Row>
                  <Col :xs="24" :md="16" :lg="12" :style="{ position: 'relative' }">
                  <Select
                    v-model="form.leaseholdStatus"
                    :disabled="finishDone"
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
              <FormItem label="补差金额" prop="adjustmentAmount">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Input
                    type="text"
                    v-model="form.adjustmentAmount"
                    placeholder="请填写租转售补差金额"
                    :disabled="finishDone"
                    readonly
                  >
                  <span slot="append">元</span>
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem :label="finishDone ? '已退款' : '应退款'" prop="returnDeposit">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <Input
                    type="text"
                    v-model="form.returnDeposit"
                    placeholder="请填写应退款金额"
                    :disabled="finishDone"
                    readonly
                  >
                  <span slot="append">元</span>
                  </Input>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="用户余额抵扣" prop="useBalance" v-if="showUseBalanceSwitch1">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <i-switch
                    v-model="form.useBalance"
                    :disabled="finishDone"
                    :true-value="'1'"
                    :false-value="'0'"
                    size="large"
                    @on-change="onChangeUseBalance1"
                  />
                  <span>{{ userBalanceDesc }}</span>
                  </Col>
                </Row>
              </FormItem>
              <FormItem
                v-show="showUseBalanceSwitch1"
                label="还需支付金额"
                prop="stillToPayAmount1"
              >
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <span>{{ `¥${form.stillToPayAmount1 || 0}` }}</span>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="还货门店" prop="returnStore">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <p>{{ form.returnStore }}</p>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="服务完成人" prop="serviceCloseOperator">
                <Row>
                  <Col :xs="24" :md="16" :lg="12">
                  <p>{{ form.serviceCloseOperator }}</p>
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
                    :disabled="finishDone"
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
                    :disabled="finishDone"
                  >{{ finishDone ? '已完成' : '确认完成' }}</Button>
                  </Col>
                </Row>
              </FormItem>
            </TabPane>
          </Tabs>
          <!-- <div
            v-if="form.relatedOrders && form.relatedOrders.length"
            class="dotted-line"
          />
          <FormItem
            v-for="(order, i) in form.relatedOrders"
            :label="`关联订单${i+1}`"
            :key="order"
          >
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <router-link
                :to="{ path: '/rent-order', params: { id: order }}"
              >
                {{ order }}
              </router-link>
              </Col>
            </Row>
          </FormItem> -->
        </div>
      </section>
    </Form>
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
      confirmFinishLoading: false,
      confirmDeliveryModal: false,
      confirmFinishModal: false,
      // stepStatus: 'process',
      // disableProductid: true,
      searchProductLoading: false,
      completeTabs: 'rentClose',
      userBalance: '',
      showUseBalanceSwitch0: false,
      showUseBalanceSwitch1: false,
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
        realChargingTime: 0,
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
        // reservedProductid: '',
        // reservedCategory: '0',
        // reservedModel: '',
        // reservedTitle: '',
        // reservedBrand: '',
        // reservedSeries: '',
        // reservedSellingPrice: '',
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
        realChargingRent: '0',
        returnDeposit: '0',
        adjustmentAmount: '0',
        compensation: '0',
        // relatedOrders: [],
        useBalance: '0',
        stillToPayAmount0: 0,
        stillToPayAmount1: 0,
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
        logisticsCompany: [{
          required: true,
          message: '物流公司不能为空',
          trigger: 'blur',
        }],
        trackingNumber: [{
          required: true,
          message: '运单号不能为空',
          trigger: 'blur',
        }],
        realChargingTime: [{
          trigger: 'blur',
          validator (rule, value, cb) {
            if (value) {
              const numFloat = parseFloat(value, 10)
              const numInt = parseInt(value, 10)
              if (isNaN(+value) || numFloat !== numInt || numInt < 0) {
                cb(new Error('实际计费时长必须为正整数'))
              }
              cb()
            }
          },
        }, {
          trigger: 'change',
          validator (rule, value, cb) {
            if (value) {
              const numFloat = parseFloat(value, 10)
              const numInt = parseInt(value, 10)
              if (isNaN(+value) || numFloat !== numInt || numInt < 0) {
                cb(new Error('实际计费时长必须为正整数'))
              }
              cb()
            }
          },
        }],
        returnDeposit: [{
          trigger: 'blur',
          validator (rule, value, cb) {
            if (value) {
              const numFloat = parseFloat(value, 10)
              if (isNaN(+value) || numFloat < 0) {
                cb(new Error('应退款不能为负数'))
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
                cb(new Error('应退款不能为负数'))
              }
              cb()
            }
          },
        }],
        adjustmentAmount: [{
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
      const status = +this.form.serviceStatus
      return status > 1 && status !== 7
    },
    deliveryDone: function () {
      const status = +this.form.serviceStatus
      return +status > 2 && status !== 7
    },
    finishDone: function () {
      const status = +this.form.serviceStatus
      return status > 3 && status !== 7
    },
    curStep: function () {
      const status = +this.form.serviceStatus
      return status > 4 ? status === 7 ? 2 : status + 1 : status
    },
    curStepStatus: function () {
      const len = this.serviceStatuss.length
      return this.form.serviceStatus === this.serviceStatuss[len - 1].key
        ? 'error' : 'process'
    },
    userBalanceDesc: function () {
      return '当前账户余额 ￥' + this.userBalance
    },
    ...mapState([
      'login',
    ]),
  },
  // watch: {
  //   'form.compensation': function (val, oldVal) {
  //     const { residualDeposit, useBalance } = this.form
  //     const amount = parseFloat(val || '0') - parseFloat(residualDeposit)
  //     const gap = amount - parseFloat(this.userBalance)
  //     if (amount > 0) {
  //       this.form.returnDeposit = '0'
  //       this.showUseBalanceSwitch = true
  //       // console.log('usebalance', useBalance, amount)
  //       this.form.stillToPayAmount = +useBalance ? (gap > 0 ? gap : 0) : amount
  //     } else {
  //       this.form.returnDeposit = Math.abs(amount).toString()
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
  // },
  created () {
    this.form.serviceNo = this.$route.params.id
    const url = '/admin/RentalService/'
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
          this.form.deliveryOperator || (this.form.deliveryOperator = this.login.id)
          this.form.serviceCloseOperator ||
            (this.form.serviceCloseOperator = this.login.id)
          if (!this.form.product) {
            this.form.product = {
              ...this.form.reservedProduct,
            }
            this.form.productid = this.form.reservedProductid
          }

          const amount = this.$roundTo2Decimal((parseFloat(this.form.compensation) || 0)
            - (parseFloat(this.form.residualDeposit) || 0))
          this.form.returnDeposit = amount > 0 ? '0' : Math.abs(amount).toString()
          if (this.form.serviceStatus === '5') {
            this.completeTabs = 'rentClose'
          }
          if (this.form.serviceStatus === '6') {
            this.completeTabs = 'rentToSaleClose'
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
      const { residualDeposit, useBalance } = this.form
      const amount = this.$roundTo2Decimal(parseFloat(event.target.value || '0') - parseFloat(residualDeposit))
      const gap = this.$roundTo2Decimal(amount - parseFloat(this.userBalance))
      if (amount > 0) {
        this.form.returnDeposit = '0'
        this.showUseBalanceSwitch0 = true
        // console.log('usebalance', useBalance, amount)
        this.form.stillToPayAmount0 = +useBalance ? (gap > 0 ? gap : 0) : amount
      } else {
        this.form.returnDeposit = Math.abs(amount).toString()
        this.showUseBalanceSwitch0 = false
        this.form.stillToPayAmount0 = 0
      }
      this.$forceUpdate()
    },
    changeLeaseholdStatus0 (value) {
      if (value === '0') {
        this.showUseBalanceSwitch0 = false
        this.form.compensation = '0'
        this.form.useBalance = '0'
        this.$forceUpdate()
      }
    },
    // changeLeaseholdStatus1 (value) {
    //   if (value === '0') {
    //     this.showUseBalanceSwitch1 = false
    //     this.form.compensation = '0'
    //     this.form.useBalance = '0'
    //     this.$forceUpdate()
    //   }
    // },
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
    onChangeUseBalance0 (use) {
      const { compensation, residualDeposit } = this.form
      if (+use) {
        const total = this.$roundTo2Decimal(parseFloat(compensation) - parseFloat(residualDeposit)
          - parseFloat(this.userBalance))
        console.log('changeusebalance', total)
        if (total < 0) {
          this.form.stillToPayAmount0 = 0
        } else {
          this.form.stillToPayAmount0 = Math.abs(total)
        }
      } else {
        const total = this.$roundTo2Decimal(parseFloat(compensation) - parseFloat(residualDeposit))
        console.log('changeusebalance', total)
        if (total < 0) {
          this.form.stillToPayAmount0 = 0
        } else {
          this.form.stillToPayAmount0 = Math.abs(total)
        }
      }
    },
    onChangeUseBalance1 (use) {
      const { initialRent, initialDeposit } = this.form
      const { sellingPrice } = this.form.product
      const amount = this.$roundTo2Decimal((parseFloat(sellingPrice) || 0)
        - (parseFloat(initialRent) || 0)
        - (parseFloat(initialDeposit) || 0))
      const total = this.$roundTo2Decimal((parseFloat(sellingPrice) || 0)
        - (parseFloat(initialRent) || 0)
        - (parseFloat(initialDeposit) || 0)
        - parseFloat(this.userBalance))

      if (+use) {
        if (total > 0) {
          this.form.stillToPayAmount1 = total
        } else {
          this.form.stillToPayAmount1 = 0
        }
      } else if (amount > 0) {
        this.form.stillToPayAmount1 = amount
      } else {
        this.form.stillToPayAmount1 = 0
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
      if (!this.form.serialNumber) {
        this.$Message.error('商品编号不能为空')
      } else if (this.form.deliveryMode === '0' && !this.form.logisticsCompany) {
        this.$Message.error('物流公司不能为空')
      } else if (this.form.deliveryMode === '0' && !this.form.trackingNumber) {
        this.$Message.error('运单号不能为空')
      } else {
        this.confirmDeliveryModal = true
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
      const { serviceNo, serviceType, serviceCloseOperator, realChargingTime,
        returnStore, useBalance, returnDeposit, compensation, remarks,
        leaseholdStatus, adjustmentAmount } = this.form
      const options = this.completeTabs === 'rentClose' ? {
        realChargingTime,
      } : {
        adjustmentAmount,
      }
      const url = '/admin/CompleteService/'
      this.$fetch(url, {
        data: {
          serviceNo,
          serviceType,
          serviceCloseOperator,
          returnStore,
          useBalance,
          returnDeposit,
          compensation,
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
    switchRentCloseTab (name) {
      switch (name) {
        case 'rentClose': {
          const { compensation, residualDeposit } = this.form
          const amount = this.$roundTo2Decimal((parseFloat(compensation) || 0)
            - (parseFloat(residualDeposit) || 0))
          console.log('rentClose', amount)
          if (amount > 0) {
            this.showUseBalanceSwitch0 = true
            this.form.returnDeposit = '0'
          } else {
            this.showUseBalanceSwitch0 = false
            this.form.returnDeposit = Math.abs(amount).toString()
          }
          this.form.leaseholdStatus = '0'
          break
        }
        case 'rentToSaleClose': {
          const { initialRent, initialDeposit } = this.form
          const { sellingPrice } = this.form.product
          const amount = this.$roundTo2Decimal((parseFloat(sellingPrice) || 0)
            - (parseFloat(initialRent) || 0)
            - (parseFloat(initialDeposit) || 0))
          console.log('rentToSaleClose', amount)
          if (amount > 0) {
            this.showUseBalanceSwitch1 = true
            this.form.returnDeposit = '0'
            this.form.adjustmentAmount = amount.toString()
            this.form.stillToPayAmount1 = amount
          } else {
            this.showUseBalanceSwitch1 = false
            this.form.returnDeposit = Math.abs(amount).toString()
            this.form.adjustmentAmount = '0'
          }
          this.form.leaseholdStatus = '0'
          break
        }
      }
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
