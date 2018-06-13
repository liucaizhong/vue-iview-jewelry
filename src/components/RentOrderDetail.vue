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
          <FormItem label="支付时间" prop="paymentDatetime">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.paymentDatetime }}</p>
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
          <FormItem label="服务单" prop="serviceNo">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <router-link
                :to="`/dashboard/rent-service/${form.serviceNo}`"
              >
                {{ form.serviceNo }}
              </router-link>
              </Col>
            </Row>
          </FormItem>
          <!-- <FormItem
            v-for="(order, i) in form.relatedPaymentOrders"
            :label="`支付订单${i+1}`"
            :key="order"
          >
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ order }}</p>
              </Col>
            </Row>
          </FormItem> -->
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
        paymentDatetime: '',
        paymentType: '',
        orderStatus: '',
        createDate: '',
        createdBy: '',
        serviceNo: '',
        // relatedPaymentOrders: [],
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
  created () {
    this.form.orderNo = this.$route.params.id
    const url = '/common/backendorder/'
    this.$fetch(url, {
      params: {
        orderNo: this.form.orderNo,
      }
    })
      .then(resp => {
        console.log(resp)
        const results = resp.data.results
        if (results && results.length) {
          this.form = {
            ...results[0],
          }
        } else {
          this.$Message.error({
            content: '未找到该订单的详细信息',
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.$Message.error({
          content: '未找到该订单的详细信息',
        })
      })
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

