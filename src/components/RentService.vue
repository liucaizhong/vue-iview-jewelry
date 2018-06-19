<template>
  <div class="rent-service">
    <div class="header">
      <Form ref="searchForm" :model="searchForm" :label-width="80">
        <FormItem label="服务单号" prop="serviceNo">
          <Input v-model="searchForm.serviceNo">
          </Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input v-model="searchForm.name">
          </Input>
        </FormItem>
        <FormItem label="手机号" prop="phone">
          <Input v-model="searchForm.phone">
          </Input>
        </FormItem>
        <FormItem>
          <Badge dot :count="moreCondCount">
            <Button type="ghost" icon="ios-search" @click="expandMoreCond">更多筛选</Button>
          </Badge>
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
    <Modal
      class="edit-field-modal"
      v-model="moreCondModal"
      title="更多筛选条件"
      :mask-closable="false"
      :width="600"
      :closable="false"
    >
      <Form
        :model="moreCondModalForm"
        :label-width="100"
      >
        <FormItem label="服务单创建时间" prop="createDate">
          <DatePicker
            type="datetimerange"
            format="yyyy-MM-dd HH:mm:ss"
            placement="bottom-end"
            placeholder="选择服务单创建时间区间"
            @on-change="changecreateDate"
          />
        </FormItem>
        <FormItem label="服务单结束时间" prop="finishDate">
          <DatePicker
            type="datetimerange"
            format="yyyy-MM-dd HH:mm:ss"
            placement="bottom-end"
            placeholder="选择服务单结束时间区间"
            @on-change="changefinishDate"
          />
        </FormItem>
        <!-- <FormItem label="业务状态" prop="businessStatus">
          <enum-selector
            :selected="moreCondModalForm.businessStatus"
            :items="businessStatus"
            :single="false"
          />
        </FormItem> -->
        <FormItem label="服务单状态" prop="serviceStatus">
          <enum-selector
            :selected="moreCondModalForm.serviceStatus"
            :items="serviceStatus"
            :single="false"
          />
        </FormItem>
        <FormItem label="物品状态" prop="leaseholdStatus">
          <enum-selector
            :selected="moreCondModalForm.leaseholdStatus"
            :items="leaseholdStatus"
            :single="false"
          />
        </FormItem>
        <FormItem label="信用状态" prop="creditStatus">
          <enum-selector
            :selected="moreCondModalForm.creditStatus"
            :items="creditStatus"
            :single="false"
          />
        </FormItem>
        <FormItem label="取货门店" prop="deliveryStore">
          <Input v-model="moreCondModalForm.deliveryStore">
          </Input>
        </FormItem>
        <FormItem label="提货方式" prop="deliveryMode">
          <enum-selector
            :selected="moreCondModalForm.deliveryMode"
            :items="deliveryMode"
            :single="false"
          />
        </FormItem>
        <FormItem>
          <Button
            type="success"
            @click="saveMoreCond"
          >保存</Button>
          <Button
            type="ghost"
            style="margin-left: 8px"
            @click="cancelMoreCond"
          >取消</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import { SERVICETYPE, LEASEHOLDSTATUS, CREDITSTATUS,
  DELIVERYMODE, SERVICESTATUS } from '@/constant'
import EnumSelector from './EnumSelector'

export default {
  components: {
    'enum-selector': EnumSelector,
  },
  data () {
    return {
      serviceType: SERVICETYPE,
      leaseholdStatus: LEASEHOLDSTATUS,
      creditStatus: CREDITSTATUS,
      deliveryMode: DELIVERYMODE,
      serviceStatus: SERVICESTATUS,
      page: 1,
      pageSize: 10,
      totalCount: 0,
      searchForm: {
        serviceNo: '',
        name: '',
        phone: '',
        createDate: [],
        finishDate: [],
        // businessStatus: [],
        serviceStatus: [],
        leaseholdStatus: [],
        creditStatus: [],
        deliveryStore: '',
        deliveryMode: [],
      },
      moreCondModal: false,
      moreCondCount: 0,
      moreCondModalForm: {
        createDate: [],
        finishDate: [],
        // businessStatus: [],
        serviceStatus: [],
        leaseholdStatus: [],
        creditStatus: [],
        deliveryStore: '',
        deliveryMode: [],
      },
      tableData: [],
      tableLoading: false,
      tableColumns: [
        {
          title: '服务单号',
          key: 'serviceNo',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '服务类型',
          key: 'serviceType',
          sortable: true,
          minWidth: 140,
          render (h, params) {
            const serviceType = SERVICETYPE.find(
              cur => params.row.serviceType === cur.key)
            return h('span', serviceType && serviceType.value || SERVICETYPE[0].value)
          },
        },
        {
          title: '服务单状态',
          key: 'serviceStatus',
          sortable: true,
          minWidth: 120,
          render (h, params) {
            const serviceStatus = SERVICESTATUS.find(
              cur => params.row.serviceStatus === cur.key)
            return h('span', serviceStatus && serviceStatus.value || SERVICESTATUS[0].value)
          },
        },
        {
          title: '会员ID',
          key: 'memberId',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '姓名',
          key: 'name',
          sortable: true,
          minWidth: 120,
        },
        {
          title: '手机号',
          key: 'phone',
          sortable: true,
          minWidth: 130,
        },
        {
          title: '租赁时长(天)',
          key: 'rentPeriod',
          sortable: true,
          minWidth: 140,
        },
        {
          title: '服务单创建时间',
          key: 'createDate',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '服务单结束时间',
          key: 'finishDate',
          sortable: true,
          minWidth: 150,
        },
        // {
        //   title: '实际计费时长',
        //   key: 'realChargingTime',
        //   sortable: true,
        //   minWidth: 130,
        // },
        {
          title: '预约商品ID',
          key: 'reservedProductid',
          sortable: true,
          minWidth: 150,
        },
        // {
        //   title: '业务状态',
        //   key: 'businessStatus',
        //   filters: BUSINESSSTATUS.map(t => ({
        //     label: t.value,
        //     value: t.key,
        //   })),
        //   filterMultiple: true,
        //   filterMethod (value, row) {
        //     return row.businessStatus === value
        //   },
        //   minWidth: 100,
        //   render (h, params) {
        //     const businessStatus = BUSINESSSTATUS.find(
        //       cur => params.row.businessStatus === cur.key)
        //     return h('span', businessStatus && businessStatus.value)
        //   },
        // },
        {
          title: '物品状态',
          key: 'leaseholdStatus',
          filters: LEASEHOLDSTATUS.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.leaseholdStatus === value
          },
          minWidth: 130,
          render (h, params) {
            const leaseholdStatus = LEASEHOLDSTATUS.find(
              cur => params.row.leaseholdStatus === cur.key)
            return h('span', leaseholdStatus && leaseholdStatus.value)
          },
        },
        {
          title: '信用状态',
          key: 'creditStatus',
          filters: CREDITSTATUS.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.creditStatus === value
          },
          minWidth: 130,
          render (h, params) {
            const creditStatus = CREDITSTATUS.find(
              cur => params.row.creditStatus === cur.key)
            return h('span', creditStatus && creditStatus.value)
          },
        },
        {
          title: '取货门店',
          key: 'deliveryStore',
          sortable: true,
          minWidth: 120,
        },
        {
          title: '提货方式',
          key: 'deliveryMode',
          filters: DELIVERYMODE.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.deliveryMode === value
          },
          minWidth: 130,
          render (h, params) {
            console.log()
            const deliveryMode = DELIVERYMODE.find(
              cur => params.row.deliveryMode === cur.key)
            return h('span', deliveryMode && deliveryMode.value)
          },
        },
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
                    this.$router.push(`rent-service/${params.row.serviceNo}`)
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
    expandMoreCond () {
      this.moreCondModal = true
    },
    saveMoreCond () {
      const { createDate, finishDate, leaseholdStatus, serviceStatus,
        creditStatus, deliveryStore, deliveryMode } = this.moreCondModalForm
      this.searchForm = Object.assign(this.searchForm, {
        createDate: [...createDate],
        finishDate: [...finishDate],
        // businessStatus: [...businessStatus],
        serviceStatus: [...serviceStatus],
        leaseholdStatus: [...leaseholdStatus],
        creditStatus: [...creditStatus],
        deliveryStore,
        deliveryMode: [...deliveryMode],
      })
      this.moreCondCount = this.calMoreCondCount(this.moreCondModalForm)
      this.moreCondModal = false
    },
    cancelMoreCond () {
      const { createDate, finishDate, leaseholdStatus, serviceStatus,
        creditStatus, deliveryStore, deliveryMode } = this.searchForm
      this.moreCondModalForm = {
        createDate: [...createDate],
        finishDate: [...finishDate],
        // businessStatus: [...businessStatus],
        serviceStatus: [...serviceStatus],
        leaseholdStatus: [...leaseholdStatus],
        creditStatus: [...creditStatus],
        deliveryStore,
        deliveryMode: [...deliveryMode],
      }
      this.moreCondCount = this.calMoreCondCount(this.moreCondModalForm)
      this.moreCondModal = false
    },
    filterMethod (value, option) {
      return option.includes(value)
    },
    calMoreCondCount (obj) {
      return +Object.keys(obj).reduce((cum, key) => {
        return cum || (obj[key] instanceof Array
          ? obj[key].filter(cur => cur).length
          : obj[key])
      }, false)
    },
    changecreateDate (datetimerange) {
      console.log('changecreateDate', datetimerange)
      this.moreCondModalForm.createDate = [...datetimerange]
    },
    changefinishDate (datetimerange) {
      console.log('changefinishDate', datetimerange)
      this.moreCondModalForm.changefinishDate = [...datetimerange]
    },
    mockTableData (config) {
      this.tableLoading = true
      const url = '/admin/RentalService/'
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
          ...this.formConditions(this.searchForm),
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
          ...this.formConditions(this.searchForm),
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
    reset () {
      this.$refs.searchForm.resetFields()
      this.moreCondModalForm = {
        createDate: [],
        finishDate: [],
        // businessStatus: [],
        serviceStatus: [],
        leaseholdStatus: [],
        creditStatus: [],
        deliveryStore: '',
        deliveryMode: [],
      }
      this.searchForm = Object.assign(this.searchForm, {
        createDate: [],
        finishDate: [],
        // businessStatus: [],
        serviceStatus: [],
        leaseholdStatus: [],
        creditStatus: [],
        deliveryStore: '',
        deliveryMode: [],
      })
      this.moreCondCount = 0
      this.mockTableData({
        params: {
          offset: (this.page - 1) * this.pageSize,
          limit: this.pageSize,
        }
      })
    },
    exportCsv () {
      this.$refs.table.exportCsv({
        filename: '租赁服务信息',
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

      // conds.businessStatus && (conds.businessStatus =
      // conds.businessStatus.reduce((cum, cur, i) => {
      //   cur && cum.push(this.businessStatus[i].key)
      //   return cum
      // }, []))
      conds.serviceStatus && (conds.serviceStatus =
      conds.serviceStatus.reduce((cum, cur, i) => {
        cur && cum.push(this.serviceStatus[i].key)
        return cum
      }, []))
      conds.leaseholdStatus && (conds.leaseholdStatus =
      conds.leaseholdStatus.reduce((cum, cur, i) => {
        cur && cum.push(this.leaseholdStatuss[i].key)
        return cum
      }, []))
      conds.creditStatus && (conds.creditStatus = conds.creditStatus.reduce((cum, cur, i) => {
        cur && cum.push(this.creditStatuss[i].key)
        return cum
      }, []))
      conds.deliveryMode && (conds.deliveryMode = conds.deliveryMode.reduce((cum, cur, i) => {
        cur && cum.push(this.deliveryModes[i].key)
        return cum
      }, []))
      return conds
    },
  }
}
</script>

<style lang="less">

</style>
