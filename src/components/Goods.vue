<template>
  <div class="goods">
    <div class="header">
      <Form ref="searchForm" :model="searchForm" :label-width="80">
        <FormItem label="商品型号" prop="model">
          <Input v-model="searchForm.model">
          </Input>
        </FormItem>
        <FormItem label="商品名称" prop="title">
          <Input v-model="searchForm.title">
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
      :width="700"
    >
      <Form
        :model="moreCondModalForm"
        :label-width="70"
      >
        <FormItem label="商品类别" prop="category">
          <enum-selector
            :selected="moreCondModalForm.category"
            :items="categoryOfGood"
            :single="false"
          />
        </FormItem>
        <FormItem label="镶嵌材质" prop="goldType">
          <enum-selector
            :selected="moreCondModalForm.goldType"
            :items="goldTypes"
            :single="false"
          />
        </FormItem>
        <FormItem label="品牌" prop="brand">
          <AutoComplete
            v-model="moreCondModalForm.brand"
            :data="brandOptions"
            :filter-method="filterMethod"
            placeholder="输入关键字搜索品牌"
            style="width:400px"
          />
        </FormItem>
        <FormItem label="系列" prop="series">
          <AutoComplete
            v-model="moreCondModalForm.series"
            :data="seriesOptions"
            :filter-method="filterMethod"
            placeholder="输入关键字搜索系列"
            style="width:400px"
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
import { CATEGORYOFGOOD, GOLDTYPE, GOLDPURITY,
  BRANDOPTIONS, SERIESOPTIONS, RELEASESTATUS } from '@/constant'
import EnumSelector from './EnumSelector'

export default {
  components: {
    'enum-selector': EnumSelector,
  },
  data () {
    return {
      categoryOfGood: CATEGORYOFGOOD,
      goldTypes: GOLDTYPE,
      brandOptions: BRANDOPTIONS,
      seriesOptions: SERIESOPTIONS,
      page: 1,
      pageSize: 10,
      totalCount: 0,
      searchForm: {
        category: [],
        model: '',
        title: '',
        goldType: [],
        brand: '',
        series: '',
      },
      moreCondModal: false,
      moreCondCount: 0,
      moreCondModalForm: {
        category: [],
        goldType: [],
        brand: '',
        series: '',
      },
      tableData: [],
      tableLoading: false,
      tableColumns: [
        {
          title: '商品ID',
          key: 'productid',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '商品类别',
          key: 'category',
          sortable: true,
          minWidth: 120,
          render (h, params) {
            const category = CATEGORYOFGOOD.find(
              cur => params.row.category === cur.key)
            return h('span', category && category.value)
          },
        },
        {
          title: '商品型号',
          key: 'model',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '商品名称',
          key: 'title',
          sortable: true,
          minWidth: 120,
        },
        {
          title: '品牌',
          key: 'brand',
          sortable: true,
          minWidth: 100,
        },
        {
          title: '系列',
          key: 'series',
          sortable: true,
          minWidth: 100,
        },
        {
          title: '镶嵌材质',
          key: 'goldType',
          filters: GOLDTYPE.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.goldType === value
          },
          minWidth: 100,
          render (h, params) {
            const goldType = GOLDTYPE.find(
              cur => params.row.goldType === cur.key)
            return h('span', goldType && goldType.value)
          },
        },
        {
          title: '材质纯度',
          key: 'goldPurity',
          filters: GOLDPURITY.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.goldPurity === value
          },
          minWidth: 100,
          render (h, params) {
            const goldPurity = GOLDPURITY.find(
              cur => params.row.goldPurity === cur.key)
            return h('span', goldPurity && goldPurity.value)
          },
        },
        {
          title: '含金量（克）',
          key: 'goldContent',
          sortable: true,
          minWidth: 130,
        },
        {
          title: '钻石重量（克）',
          key: 'diamondWeight',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '销售价',
          key: 'sellingPrice',
          sortable: true,
          minWidth: 120,
        },
        {
          title: '租金',
          key: 'rent',
          sortable: true,
          minWidth: 100,
        },
        {
          title: '押金',
          key: 'deposit',
          sortable: true,
          minWidth: 100,
        },
        {
          title: '发布状态',
          key: 'releaseStatus',
          filters: RELEASESTATUS.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.releaseStatus === value
          },
          minWidth: 130,
          render (h, params) {
            const releaseStatus = RELEASESTATUS.find(
              cur => params.row.releaseStatus === cur.key)
            return h('span', releaseStatus && releaseStatus.value)
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
                    this.$router.push(`goods/${params.row.productid}`)
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
      const { category, goldType, brand, series } = this.moreCondModalForm
      this.searchForm = Object.assign(this.searchForm, {
        category: [...category],
        goldType: [...goldType],
        brand,
        series,
      })
      this.moreCondCount = this.calMoreCondCount(this.moreCondModalForm)
      this.moreCondModal = false
    },
    cancelMoreCond () {
      const { category, goldType, brand, series } = this.searchForm
      this.moreCondModalForm = {
        category: [...category],
        goldType: [...goldType],
        brand,
        series,
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
    mockTableData (config) {
      this.tableLoading = true
      const url = '/product/'
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
            content: err,
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
    reset () {
      this.$refs.searchForm.resetFields()
      this.moreCondModalForm = {
        category: [],
        goldType: [],
        brand: '',
        series: '',
      }
      this.searchForm = Object.assign(this.searchForm, {
        category: [],
        goldType: [],
        brand: '',
        series: '',
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
        filename: '会员信息',
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

      conds.category && (conds.category = conds.category.reduce((cum, cur, i) => {
        cur && cum.push(this.categoryOfGood[i].key)
        return cum
      }, []))
      conds.goldType && (conds.goldType = conds.goldType.reduce((cum, cur, i) => {
        cur && cum.push(this.goldTypes[i].key)
        return cum
      }, []))
      return conds
    },
  }
}
</script>

<style lang="less">

</style>
