<template>
  <div id="goods-detail">
    <Form :model="formGoods" :label-width="150">
      <section>
        <header>基本信息</header>
        <div class="section-body">
          <FormItem label="商品ID" prop="yd">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.yd }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="商品型号" prop="model">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.model }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="商品类别" prop="category">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.category">
                <Option
                  v-for="item in categoryOfGood"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="商品名称" prop="title">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Input
                v-model="formGoods.title"
                placeholder="输入商品名称"
              >
              </Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="是否发布" prop="releaseStatus">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.releaseStatus">
                <Option
                  v-for="item in releaseStatus"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>品质信息</header>
        <div class="section-body">
          <FormItem label="品牌" prop="brand">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <AutoComplete
                v-model="formGoods.brand"
                :data="brandOptions"
                :filter-method="filterMethod"
                placeholder="输入品牌名称"
              />
              </Col>
            </Row>
          </FormItem>
          <FormItem label="系列" prop="series">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <AutoComplete
                v-model="formGoods.series"
                :data="seriesOptions"
                :filter-method="filterMethod"
                placeholder="输入系列名称"
              />
              </Col>
            </Row>
          </FormItem>
          <FormItem label="镶嵌材质" prop="goldType">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.goldType">
                <Option
                  v-for="item in goldTypes"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="材质纯度" prop="goldPurity">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <Select v-model="formGoods.goldPurity">
                <Option
                  v-for="item in goldPurity"
                  :value="item.key"
                  :key="item.key"
                >
                  {{ item.value }}
                </Option>
              </Select>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>
          账户信息
        </header>
        <div class="section-body">
          <FormItem label="余额" prop="balance">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.balance + ' 元' }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="押金" prop="deposit">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.deposit + ' 元' }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="租金" prop="rent">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.rent + ' 元' }}</p>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>
          其他信息
        </header>
        <div class="section-body">
          <FormItem label="创建时间" prop="createdDate">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.createdDate }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="创建来源" prop="source">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.source }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="最后修改时间" prop="lastModified">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.lastModified }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="最后修改人" prop="lastModifiedBy">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formGoods.lastModifiedBy }}</p>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
    </Form>
  </div>
</template>

<script>
import { CATEGORYOFGOOD, GOLDTYPE, GOLDPURITY,
  BRANDOPTIONS, SERIESOPTIONS, RELEASESTATUS } from '@/constant'

export default {
  data () {
    return {
      categoryOfGood: CATEGORYOFGOOD,
      goldTypes: GOLDTYPE,
      goldPurity: GOLDPURITY,
      brandOptions: BRANDOPTIONS,
      seriesOptions: SERIESOPTIONS,
      releaseStatus: RELEASESTATUS,
      formGoods: {
        yd: 'zz945',
        category: 0,
        model: 'dfasdfsdf',
        title: '黄逼王的大金链子',
        goldType: 'W',
        goldPurity: 0,
        releaseStatus: 1,
        brand: 'THEIA',
        series: '经典系列',
        name: '黄逼王',
        gender: '女',
        idType: 0,
        idNo: '31023019880231212X',
        birthday: '19880231',
        cellPhone: '18812344843',
        email: '5654545@qq.com',
        address: ['adff', 'adfd', 'adfd', 'dafdf', 'dafdff'],
        balance: '123',
        deposit: '12323',
        rent: '21312312',
        createdDate: '2018-04-27',
        source: '公众号',
        lastModified: '2018-05-27',
        lastModifiedBy: 'hsw',
      },
    }
  },
  methods: {
    saveField (type) {
      this.$refs[`${type}ModalForm`].validate(valid => {
        if (valid) {
          this.formGoods[type] = this[`${type}ModalForm`][type]
          this.$Message.success('保存成功!')
          this[`${type}Modal`] = false
        } else {
          this.$Message.error('保存失败')
        }
      })
    },
    cancelSaveField (type) {
      this[`${type}Modal`] = false
    },
    filterMethod (value, option) {
      return option.includes(value)
    },
  }
}
</script>

<style lang="less">
#goods-detail {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  overflow: auto;

  * {
    font-size: 14px;
  }

  .edit-btn {
    cursor: pointer;
  }

  section {
    width: 100%;
    border: 1px solid #e8e8e8;
    background: #fff;
    margin-bottom: 20px;

    header {
      border-bottom: 1px solid #e8e8e8;
      background: #f5f5f5;
      padding: 10px 15px;
      font-weight: bold;

      .edit-btn {
        margin-left: 10px;
      }
    }

    .section-body {
      padding: 15px;

      .ivu-form-item {
        margin-bottom: 0;
        padding: 5px 0;

        .ivu-form-item-label {
          font-weight: bold;
        }
      }

      .ivu-row {
        padding: 0 15px;

        p {
          padding: 1px 0;
          display: inline-block;

          & + i {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
