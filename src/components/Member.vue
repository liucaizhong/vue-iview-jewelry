<template>
  <div class="member">
    <div class="header">
      <Form ref="searchForm" :model="searchForm" :label-width="80">
        <FormItem label="姓名" prop="name">
          <Input v-model="searchForm.name">
          </Input>
        </FormItem>
        <FormItem prop="idNo">
          <Input v-model="searchForm.idNo">
          <Select slot="prepend" v-model="searchForm.idType" style="width: 80px">
            <Option
              v-for="(idtype, i) in idTypes"
              :key="i"
              :value="idtype.key"
            >
              {{ idtype.value }}
            </Option>
          </Select>
          </Input>
        </FormItem>
        <FormItem label="手机号" prop="phone">
          <Input v-model="searchForm.phone">
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click.native="search">搜索</Button>
          <Button type="error" @click.native="reset">清空</Button>
          <!-- <Button type="success" icon="loop">刷新</Button> -->
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
import { IDTYPE, GENDER } from '@/constant'

export default {
  data () {
    return {
      idTypes: IDTYPE,
      gender: GENDER,
      totalCount: 0,
      page: 1,
      pageSize: 10,
      searchForm: {
        name: '',
        idType: '0',
        idNo: '',
        phone: '',
      },
      tableData: [],
      tableLoading: false,
      tableColumns: [
        {
          title: '会员号',
          key: 'memberId',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '姓名',
          key: 'name',
          sortable: true,
          minWidth: 100,
        },
        {
          title: '性别',
          key: 'gender',
          filters: GENDER.map(t => ({
            label: t.value,
            value: t.key,
          })),
          filterMultiple: true,
          filterMethod (value, row) {
            return row.gender === value
          },
          minWidth: 100,
          render (h, params) {
            const gender = GENDER.find(
              cur => params.row.gender === cur.key)
            return h('span', gender && gender.value)
          },
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
          },
          minWidth: 100,
          render (h, params) {
            const idType = IDTYPE.find(
              cur => params.row.idType === cur.key)
            return h('span', idType && idType.value)
          },
        },
        {
          title: '证件号码',
          key: 'idNo',
          sortable: true,
          minWidth: 150,
        },
        {
          title: '手机号',
          key: 'phone',
          sortable: true,
          minWidth: 120,
        },
        // {
        //   title: '余额',
        //   key: 'balance',
        //   sortable: true,
        //   minWidth: 100,
        // },
        // {
        //   title: '押金',
        //   key: 'deposit',
        //   sortable: true,
        //   minWidth: 100,
        // },
        // {
        //   title: '租金',
        //   key: 'rent',
        //   sortable: true,
        //   minWidth: 100,
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
                    this.$router.push(`member/${params.row.memberId}`)
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
    mockTableData (config) {
      this.tableLoading = true
      const url = '/member/'
      this.$fetch(url, config)
        .then(resp => {
          // console.log(resp)
          const { count, results } = resp.data
          this.tableData = results
          this.totalCount = count
          this.tableLoading = false
        })
        .catch(err => {
          console.log(err)
          this.$Message.error(err)
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
      this.mockTableData({
        params: {
          offset: (this.page - 1) * this.pageSize,
          limit: this.pageSize,
          ...this.searchForm,
        }
      })
    },
    reset () {
      this.$refs.searchForm.resetFields()
      this.mockTableData({
        params: {
          offset: (this.page - 1) * this.pageSize,
          limit: this.pageSize,
        }
      })
    },
  }
}
</script>

<style lang="less">
.member {
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
        overflow: auto;
        // overflow-x: hidden;
      }

      .ivu-table:before {
        content: none;
      }

      .ivu-table:after {
        content: none;
      }

      // .ivu-table-header {
      //   position: fixed;
      //   z-index: 99;
      // }

      .ivu-table-body {
        // margin-top: 40px;
        margin-bottom: 10px;
      }

      // @media screen and (max-width: 768px){
      //   .ivu-table-body {
      //     margin-top: 55px;
      //   }
      // }

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
</style>

