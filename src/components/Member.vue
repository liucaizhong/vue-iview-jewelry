<template>
  <div class="member">
    <div class="header">
      <Form :model="searchForm" :label-width="80">
        <FormItem label="姓名" prop="name">
          <Input v-model="searchForm.name">
          </Input>
        </FormItem>
        <FormItem>
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
        <FormItem label="手机号">
          <Input v-model="searchForm.cellPhone">
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary">搜索</Button>
          <Button type="error">清空</Button>
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
          :total="100"
          :current="1"
          show-total
          show-elevator
          show-sizer
          @on-change="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { IDTYPE } from '@/constant'

export default {
  data () {
    return {
      idTypes: IDTYPE,
      searchForm: {
        name: '',
        idType: 0,
        idNo: '',
        cellPhone: '',
      },
      tableData: this.mockTableData1(),
      tableLoading: false,
      tableColumns: [
        {
          title: '会员号',
          key: 'memberId',
          sortable: true,
          minWidth: 100,
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
          },
          minWidth: 100,
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
        },
        {
          title: '证件号码',
          key: 'idNo',
          sortable: true,
          minWidth: 100,
        },
        {
          title: '手机号',
          key: 'cellPhone',
          sortable: true,
          minWidth: 100,
        },
        {
          title: '余额',
          key: 'balance',
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
          title: '租金',
          key: 'rent',
          sortable: true,
          minWidth: 100,
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
                    this.$router.push('member/detail')
                  }
                }
              }, '详情'),
            ])
          }
        },
      ]
    }
  },
  methods: {
    mockTableData1 () {
      const data = []
      for (let i = 0; i < 20; i++) {
        data.push({
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

