<template>
  <div class="rent-order">
    <div class="header">
      <Form ref="searchForm" :model="searchForm" :label-width="100">
        <FormItem label="订单单号" prop="orderNo">
          <Input v-model="searchForm.orderNo" style="width:260px">
          </Input>
        </FormItem>
        <FormItem label="订单创建时间" prop="createDate">
          <DatePicker
            type="daterange"
            placement="bottom-end"
            placeholder="选择订单创建时间区间"
            @on-change="changecreateDate"
            style="width:260px"
          />
        </FormItem>
        <FormItem label="订单类型" prop="orderType">
          <Select v-model="searchForm.orderType" multiple style="width:150px">
            <Option
              v-for="item in orderType"
              :value="item.key"
              :key="item.key"
            >
              {{ item.value }}
            </Option>
          </Select>
        </FormItem>
        <FormItem label="订单状态" prop="orderStatus">
          <Select v-model="searchForm.orderStatus" multiple style="width:150px">
            <Option
              v-for="item in orderStatus"
              :value="item.key"
              :key="item.key"
            >
              {{ item.value }}
            </Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" @click.native="search">搜索</Button>
          <Button type="error" @click.native="reset">清空</Button>
          <Button
            type="success"
            @click.native="exportCsv"
          >导出</Button>
        </FormItem>
      </Form>
    </div>
    <div class="body">
      <Table
        ref="table"
        :data="tableData"
        :columns="tableColumns"
        :loading="tableLoading"
        stripe
      />
    </div>
    <div class="footer">
      <div class="pager" style="float: right;">
        <Page
          :total="totalCount"
          :current="1"
          show-total
          show-elevator
          show-sizer
          @on-change="changePage"
          @on-page-size-change="changePageSize"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ORDERTYPE, PAYMENTTYPE, ORDERSTATUS } from '@/constant'

export default {
  data () {
    return {
      orderType: ORDERTYPE,
      paymentType: PAYMENTTYPE,
      orderStatus: ORDERSTATUS,
      totalCount: 0,
      page: 1,
      pageSize: 10,
      searchForm: {
        orderNo: '',
        orderType: [],
        orderStatus: [],
        createDate: [],
      },
      tableData: [],
      tableLoading: false,
      tableColumns: [
        {
          title: '订单单号',
          key: 'orderNo',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '订单类型',
          key: 'orderType',
          filters: ORDERTYPE.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.orderType === value
          },
          minWidth: 120,
          render (h, params) {
            const orderType = ORDERTYPE.find(
              cur => params.row.orderType === cur.key)
            return h('span', orderType && orderType.value)
          },
        },
        {
          title: '订单状态',
          key: 'orderStatus',
          filters: ORDERSTATUS.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.orderStatus === value
          },
          minWidth: 120,
          render (h, params) {
            const orderStatus = ORDERSTATUS.find(
              cur => params.row.orderStatus === cur.key)
            return h('span', orderStatus && orderStatus.value)
          },
        },
        {
          title: '订单金额',
          key: 'amount',
          sortable: true,
          minWidth: 120,
        },
        {
          title: '支付时间',
          key: 'paymentDate',
          sortable: true,
          minWidth: 120,
        },
        {
          title: '支付方式',
          key: 'paymentType',
          filters: PAYMENTTYPE.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.paymentType === value
          },
          minWidth: 120,
          render (h, params) {
            const paymentType = PAYMENTTYPE.find(
              cur => params.row.paymentType === cur.key)
            return h('span', paymentType && paymentType.value)
          },
        },
        {
          title: '订单创建时间',
          key: 'createDate',
          sortable: true,
          minWidth: 150,
        },
        // {
        //   title: '订单创建人',
        //   key: 'createdBy',
        //   sortable: true,
        //   minWidth: 130,
        // },
        // {
        //   title: '关联服务单',
        //   key: 'relatedServiceOrders',
        //   render: (h, params) => {
        //     return h('Poptip', {
        //       props: {
        //         trigger: 'hover',
        //         placement: 'top',
        //       }
        //     }, [
        //       h('Tag', params.row.relatedServiceOrders
        //         && params.row.relatedServiceOrders.length || 0),
        //       h('div', {
        //         slot: 'content',
        //       }, [
        //         h('ul', params.row.relatedServiceOrders
        //           && params.row.relatedServiceOrders.map((serviceNo, i) => {
        //             return h('li', {
        //               style: {
        //                 textAlign: 'center',
        //                 padding: '4px',
        //               },
        //             }, h('router-link', {
        //               props: {
        //                 to: {
        //                   path: '/dashboard/rent-service',
        //                   params: {
        //                     id: serviceNo,
        //                   },
        //                 },
        //               },
        //               serviceNo,
        //             }))
        //           }))
        //       ])
        //     ])
        //   }
        // },
        // {
        //   title: '关联支付订单',
        //   key: 'relatedPaymentOrders',
        //   render: (h, params) => {
        //     return h('Poptip', {
        //       props: {
        //         trigger: 'hover',
        //         placement: 'top',
        //       }
        //     }, [
        //       h('Tag', params.row.relatedPaymentOrders
        //         && params.row.relatedPaymentOrders.length || 0),
        //       h('div', {
        //         slot: 'content',
        //       }, [
        //         h('ul', params.row.relatedPaymentOrders
        //           && params.row.relatedPaymentOrders.map((paymentOrderNo, i) => {
        //             return h('li', {
        //               style: {
        //                 textAlign: 'center',
        //                 padding: '4px',
        //               },
        //             },
        //             paymentOrderNo)
        //           }))
        //       ])
        //     ])
        //   },
        // },
        {
          title: '操作',
          key: 'action',
          width: 100,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    // console.log(params)
                    this.$router.push(`rent-order/${params.row.orderNo}`)
                  }
                }
              }, '详情'),
            ])
          }
        },
      ]
    }
  },
  created () {
    this.mockTableData()
  },
  methods: {
    filterMethod (value, option) {
      return option.includes(value)
    },
    changecreateDate (daterange) {
      console.log('changecreateDate', daterange)
      this.searchForm.createDate = [...daterange]
    },
    mockTableData (config) {
      this.tableLoading = true
      const url = '/RentalOrder/'
      this.$fetch(url, config)
        .then(resp => {
          console.log(resp)
          const { count, results } = resp.data
          this.tableData = results
          this.totalCount = count
          this.tableLoading = false
        })
        .catch(err => {
          console.log(err)
          this.$Message.error({
            content: '查询失败',
          })
          this.tableLoading = false
        })
    },
    changePage (page) {
      console.log(page)
      this.page = page
      this.mockTableData({
        params: {
          offset: (page - 1) * this.pageSize,
          limit: this.pageSize,
        }
      })
    },
    changePageSize (pageSize) {
      console.log(pageSize)
      this.pageSize = pageSize
      this.mockTableData({
        params: {
          offset: 0,
          limit: pageSize,
        }
      })
    },
    search () {
      console.log(this.formConditions(this.searchForm))
      this.mockTableData({
        params: {
          offset: (this.page - 1) * this.pageSize,
          limit: this.pageSize,
          ...this.formConditions(this.searchForm),
        }
      })
    },
    exportCsv () {
      this.$refs.table.exportCsv({
        filename: '订单信息',
        columns: this.tableColumns.filter(col => col.key !== 'action'),
        data: this.tableData,
      })
    },
    formConditions (form) {
      const conds = Object.keys(form).reduce((obj, k) => {
        if (form[k] != false) {
          if (typeof form[k] === 'object') {
            obj[k] = [...form[k]]
          } else {
            obj[k] = form[k]
          }
        }
        return obj
      }, {})

      return conds
    },
  }
}
</script>

<style lang="less">

</style>
