<template>
  <div class="goods">
    <div class="header">
      <Form :model="searchForm" :label-width="80">
        <FormItem label="商品型号" prop="model">
          <Input v-model="searchForm.model">
          </Input>
        </FormItem>
        <FormItem label="商品名称" prop="title">
          <Input v-model="searchForm.title">
          </Input>
        </FormItem>
        <FormItem>
          <Button type="ghost" icon="ios-search" @click="expandMoreCond">更多筛选</Button>
        </FormItem>
        <FormItem>
          <Button type="primary">搜索</Button>
          <Button type="error">清空</Button>
          <Button type="success" icon="loop">导出</Button>
        </FormItem>
      </Form>
    </div>
    <div class="body">
      <Table
        :data="tableData"
        :columns="tableColumns"
        :loading="tableLoading"
        stripe
      />
    </div>
    <div class="footer">
      <div class="pager" style="float: right;">
        <Page
          :total="100"
          :current="1"
          show-total
          show-elevator
          show-sizer
          @on-change="changePage"
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
            :selected.sync="moreCondModalForm.category"
            :items="categoryOfGood"
            :single="false"
          />
        </FormItem>
        <FormItem label="镶嵌材质" prop="goldType">
          <enum-selector
            :selected.sync="moreCondModalForm.goldType"
            :items="goldTypes"
            :single="false"
          />
        </FormItem>
        <FormItem label="品牌" prop="brand">
          <Input v-model="searchForm.brand">
          </Input>
        </FormItem>
        <FormItem label="系列" prop="series">
          <Input v-model="searchForm.series">
          </Input>
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
import { IDTYPE, CATEGORYOFGOOD, GOLDTYPE } from '@/constant'
import EnumSelector from './EnumSelector'

export default {
  components: {
    'enum-selector': EnumSelector,
  },
  data () {
    return {
      idTypes: IDTYPE,
      categoryOfGood: CATEGORYOFGOOD,
      goldTypes: GOLDTYPE,
      searchForm: {
        category: [],
        model: '',
        title: '',
        goldType: [],
        brand: '',
        series: '',
      },
      moreCondModal: false,
      moreCondModalForm: {
        category: [],
        goldType: [],
        brand: '',
        series: '',
      },
      tableData: this.mockTableData1(),
      tableLoading: false,
      tableColumns: [
        {
          title: '会员号',
          key: 'memberId',
          sortable: true,
        },
        {
          title: '姓名',
          key: 'name',
          sortable: true,
        },
        {
          title: '性别',
          key: 'gender',
          filters: [
            {
              label: '男',
              value: 0,
            },
            {
              label: '女',
              value: 1,
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value) {
              return row.gender === 'female'
            }
            return row.gender === 'male'
          }
        },
        {
          title: '证件类型',
          key: 'idType',
          filters: IDTYPE.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.idType === value
          }
        },
        {
          title: '证件号码',
          key: 'idNo',
          sortable: true,
        },
        {
          title: '手机号',
          key: 'cellPhone',
          sortable: true,
        },
        {
          title: '余额',
          key: 'balance',
          sortable: true,
        },
        {
          title: '押金',
          key: 'deposit',
          sortable: true,
        },
        {
          title: '租金',
          key: 'rent',
          sortable: true,
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
                    console.log(params)
                    this.$router.push('member/detail')
                  }
                }
              }, '详情'),
            ])
          }
        }
      ]
    }
  },
  methods: {
    expandMoreCond () {
      this.moreCondModal = true
    },
    saveMoreCond () {
      this.searchForm = Object.assign({}, this.searchForm, this.moreCondModalForm)
      this.moreCondModal = false
    },
    cancelMoreCond () {
      const { category, goldType, brand, series } = this.searchForm
      this.moreCondModalForm = { category, goldType, brand, series }
      this.moreCondModal = false
    },
    mockTableData1 () {
      const data = []
      for (let i = 0; i < 20; i++) {
        data.push({
          id: 'test',
          name: 'Business' + Math.floor(Math.random() * 100 + 1),
          status: Math.floor(Math.random() * 3 + 1),
          portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
          people: [
            {
              n: 'People' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: 'People' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: 'People' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            }
          ],
          time: Math.floor(Math.random() * 7 + 1),
          update: new Date()
        })
      }
      return data
    },
    formatDate (date) {
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '-' + m + '-' + d
    },
    changePage () {
      this.tableData1 = this.mockTableData1()
    }
  }
}
</script>

<style lang="less">
.goods {
  .header {
    flex-grow: 0;
  }

  .body {
    border: 1px solid #dddee1;
    min-height: 300px;
    flex: 1;

    .ivu-table-wrapper {
      border: none;
      height: 100%;

      .ivu-table {
        overflow-y: auto;
        overflow-x: hidden;
      }

      .ivu-table:before {
        content: none;
      }

      .ivu-table:after {
        content: none;
      }

      .ivu-table-header {
        position: fixed;
        z-index: 99;
      }

      .ivu-table-body {
        margin-top: 40px;
        margin-bottom: 10px;
      }

      @media screen and (max-width: 768px){
        .ivu-table-body {
          margin-top: 55px;
        }
      }

      .ivu-table-tip {
        top: 40px;
        position: relative;

        table {
          width: auto;

          td {
            border-bottom: none;
          }
        }
      }
    }
  }

  .footer {
    height: 36px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-right: 10px;
    overflow: hidden;
    flex-grow: 0;
  }
}
.edit-field-modal {
  .ivu-form {
    height: 100%;

    .ivu-input {
      width: 400px;
    }

    .ivu-form-item:last-child {
      margin-bottom: 0;
    }
  }
  .ivu-modal-footer {
    display: none;
  }
}
</style>
