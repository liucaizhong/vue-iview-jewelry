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
        </div>
      </section>
    </Form>
  </div>
</template>

<script>
import { SERVICETYPE, SERVICESTATUS, LEASEHOLDSTATUS, CATEGORYOFGOOD,
  CREDITSTATUS, DELIVERYMODE } from '@/constant'

export default {
  data () {
    return {
      serviceTypes: SERVICETYPE,
      serviceStatuss: SERVICESTATUS,
      leaseholdStatuss: LEASEHOLDSTATUS,
      creditStatuss: CREDITSTATUS,
      deliveryModes: DELIVERYMODE,
      categoryOfGood: CATEGORYOFGOOD,
      saveLoading: false,
      curStep: 0,
      steps: [],
      stepStatus: 'process',
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
        serviceStatus: '0',
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
    reservedCategory: function () {
      const reservedCategory = this.categoryOfGood.find(cur =>
        cur.key === this.form.reservedCategory)
      return reservedCategory && reservedCategory.value
    },
  },
  created () {
    this.steps = this.formSteps(this.serviceStatuss)
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
    formSteps (serviceStatus) {
      const temp = serviceStatus.slice(0, serviceStatus.length - 2)
      return temp.map(cur => ({
        title: cur.value,
        content: '',
      })).concat({
        title: '完成',
        content: '',
      })
    },
    editField (type) {
      this[`${type}ModalForm`][type] = typeof this.form[type] === 'string'
        ? this.form[type]
        : [...this.form[type]]
      this[`${type}Modal`] = true
    },
    saveField (type) {
      this.$refs[`${type}ModalForm`].validate(valid => {
        if (valid) {
          this.saveLoading = true
          const url = '/member/'
          const postData = this[`${type}ModalForm`][type]
          const isAddress = Array.isArray(postData)
          this.$fetch(url, {
            data: {
              memberId: this.form.memberId,
              [type]: isAddress
                ? JSON.stringify(postData)
                : postData,
            },
            method: 'post',
          })
            .then(resp => {
              console.log(resp)
              const data = resp.data
              this.form[type] = isAddress
                ? JSON.parse(data[type])
                : data[type]
              this.$Message.success({
                content: '保存成功',
              })
              this[`${type}Modal`] = false
              this.saveLoading = false
            })
            .catch(err => {
              console.log(err)
              this.$Message.error({
                content: err,
              })
              this.saveLoading = false
            })
        } else {
          this.$Message.error({
            content: '保存失败',
          })
        }
      })
    },
    cancelSaveField (type) {
      this[`${type}Modal`] = false
    },
    addAddressItem () {
      if (this.addressModalForm.address.length === this.addressMaxNum) {
        this.$Message.error({
          content: '最多添加5个常用地址',
        })
      } else {
        this.addressModalForm.address.push('')
      }
    },
    removeAddressItem (i) {
      if (this.addressModalForm.address.length === 1) {
        this.$Message.error({
          content: '至少保留1个常用地址',
        })
      } else {
        this.addressModalForm.address.splice(i, 1)
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
  overflow: auto;

  .steps {
    background: #fff;
    height: 60px;
    padding: 15px;
    // margin-bottom: 15px;
    border: 1px solid #e8e8e8;
    border-bottom: none;
  }

  .form {
    * {
      font-size: 14px;
    }
  }
}
</style>
