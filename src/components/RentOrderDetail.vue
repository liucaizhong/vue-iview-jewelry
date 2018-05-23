<template>
  <div id="rentorder-detail">
    <Form
      ref="form"
      class="form"
      :model="form"
      :label-width="150"
    >
      <section>
        <header>基本信息</header>
        <div class="section-body">
          <FormItem label="订单单号" prop="orderNo">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.orderNo }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="订单类型" prop="orderType">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ orderType }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="订单状态" prop="orderStatus">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ orderStatus }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="订单金额" prop="amount">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.amount }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="支付时间" prop="paymentDate">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.paymentDate }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="支付方式" prop="paymentType">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ paymentType }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="订单创建时间" prop="createDate">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.createDate }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="订单创建人" prop="createdBy">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.createdBy }}</p>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>关联信息</header>
        <div class="section-body">
          <FormItem
            v-for="(order, i) in form.relatedServiceOrders"
            :label="`服务单${i+1}`"
            :key="order.id"
          >
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <router-link
                :to="{ path: '/rent-service', params: { id: order.id }}"
              >
                {{ order.id }}
              </router-link>
              </Col>
            </Row>
          </FormItem>
          <FormItem
            v-for="(order, i) in form.relatedPaymentOrders"
            :label="`支付订单${i+1}`"
            :key="order.id"
          >
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ order.id }}</p>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
    </Form>
  </div>
</template>

<script>
import { ORDERTYPE, PAYMENTTYPE, ORDERSTATUS } from '@/constant'

export default {
  data () {
    return {
      orderTypes: ORDERTYPE,
      paymentTypes: PAYMENTTYPE,
      orderStatuss: ORDERSTATUS,
      form: {
        orderNo: '',
        orderType: '',
        amount: '',
        paymentDate: '',
        paymentType: '',
        orderStatus: '',
        createDate: '',
        createdBy: '',
        relatedServiceOrders: [],
        relatedPaymentOrders: [],
      },
    }
  },
  computed: {
    orderType: function () {
      const orderType = this.orderTypes.find(cur => cur.key === this.form.orderType) || ''
      return orderType && orderType.value
    },
    paymentType: function () {
      const paymentType = this.paymentTypes.find(cur => cur.key === this.form.paymentType) || ''
      return paymentType && paymentType.value
    },
    orderStatus: function () {
      const orderStatus = this.orderStatuss.find(cur => cur.key === this.form.orderStatus) || ''
      return orderStatus && orderStatus.value
    },
  },
}
</script>

<style lang="less">
#rentorder-detail {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  overflow: auto;

  * {
    font-size: 14px;
  }

  section {
    .section-body {
      .ivu-form-item {
        margin-bottom: 0;
      }
    }
  }
}
</style>

