<template>
  <div class="member">
    <div class="header">
      <Form :model="searchForm" :label-width="80" inline>
        <FormItem label="姓名">
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
          <Button type="success" icon="loop">刷新</Button>
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
          title: 'Name',
          key: 'name',
          sortable: true,
        },
        {
          title: 'Status',
          key: 'status',
          render: (h, params) => {
            const row = params.row
            const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red'
            const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail'

            return h('Tag', {
              props: {
                type: 'dot',
                color: color
              }
            }, text)
          }
        },
        {
          title: 'Portrayal',
          key: 'portrayal',
          render: (h, params) => {
            return h('Poptip', {
              props: {
                trigger: 'hover',
                title: params.row.portrayal.length + 'portrayals',
                placement: 'bottom'
              }
            }, [
              h('Tag', params.row.portrayal.length),
              h('div', {
                slot: 'content'
              }, [
                h('ul', this.tableData1[params.index].portrayal.map(item => {
                  return h('li', {
                    style: {
                      textAlign: 'center',
                      padding: '4px'
                    }
                  }, item)
                }))
              ])
            ])
          }
        },
        {
          title: 'People',
          key: 'people',
          render: (h, params) => {
            return h('Poptip', {
              props: {
                trigger: 'hover',
                title: params.row.people.length + 'customers',
                placement: 'bottom'
              }
            }, [
              h('Tag', params.row.people.length),
              h('div', {
                slot: 'content'
              }, [
                h('ul', this.tableData1[params.index].people.map(item => {
                  return h('li', {
                    style: {
                      textAlign: 'center',
                      padding: '4px'
                    }
                  }, item.n + '：' + item.c + 'People')
                }))
              ])
            ])
          }
        },
        {
          title: 'Sampling Time',
          key: 'time',
          render: (h, params) => {
            return h('div', 'Almost' + params.row.time + 'days')
          }
        },
        {
          title: 'Updated Time',
          key: 'update',
          render: (h, params) => {
            return h('div', this.formatDate(this.tableData1[params.index].update))
          }
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
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
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        }
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
    min-height: 600px;
    flex: 1;

    .ivu-table-wrapper {
      border: none;
      height: 100%;

      .ivu-table {
        overflow: auto;
      }

      .ivu-table:before {
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

