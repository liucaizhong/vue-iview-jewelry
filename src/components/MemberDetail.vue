<template>
  <div id="member-detail">
    <Form :model="formMember" :label-width="150">
      <section>
        <header>基本信息</header>
        <div class="section-body">
          <FormItem label="会员号" prop="memberId">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.memberId }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="姓名" prop="name">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.name }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="性别" prop="gender">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.gender }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="证件类型" prop="idType">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ idTypes[formMember.idType].value }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="证件号码" prop="idNo">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.idNo }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="生日" prop="birthday">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.birthday }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="手机号" prop="cellPhone">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.cellPhone }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="邮箱" prop="email">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.email }}</p>
              <Icon
                class="edit-btn"
                type="edit"
                @click.native="editField('email')"
              />
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
      <section>
        <header>
          地址管理
          <Icon
            class="edit-btn"
            type="edit"
            @click.native="editField('address')"
          />
        </header>
        <div class="section-body">
          <FormItem
            v-for="(ad, seq) in formMember.address"
            :key="seq"
            :label="`地址${seq+1}`"
            prop="address"
          >
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ ad }}</p>
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
              <p>{{ formMember.balance + ' 元' }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="押金" prop="deposit">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.deposit + ' 元' }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="租金" prop="rent">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.rent + ' 元' }}</p>
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
              <p>{{ formMember.createdDate }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="创建来源" prop="source">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.source }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="最后修改时间" prop="lastModified">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.lastModified }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="最后修改人" prop="lastModifiedBy">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ formMember.lastModifiedBy }}</p>
              </Col>
            </Row>
          </FormItem>
        </div>
      </section>
    </Form>
    <Modal
      class="edit-field-modal"
      v-model="emailModal"
      title="修改邮箱"
      :mask-closable="false"
    >
      <Form
        ref="emailModalForm"
        :model="emailModalForm"
        :label-width="50"
        :rules="emailValidate"
      >
        <FormItem label="邮箱" prop="email">
          <Input
            v-model="emailModalForm.email"
            placeholder="请输入邮箱"
          ></Input>
        </FormItem>
        <FormItem>
          <Button
            type="success"
            @click="saveField('email')"
          >保存</Button>
          <Button
            type="ghost"
            style="margin-left: 8px"
            @click="cancelSaveField('email')"
          >取消</Button>
        </FormItem>
      </Form>
    </Modal>
    <Modal
      class="edit-field-modal"
      v-model="addressModal"
      title="修改地址"
      width="700"
      :mask-closable="false"
    >
      <Form
        ref="addressModalForm"
        :model="addressModalForm"
        :label-width="80"
      >
        <FormItem
          v-for="(item, index) in addressModalForm.address"
          :key="index"
          :label="'地址' + (index+1)"
          :prop="`address[${index}]`"
          :rules="{
            required: true,
            message: '地址' + (index+1) + '不能为空',
            trigger: 'blur'
          }"
        >
          <Row>
            <Col span="18">
            <Input
              type="text"
              v-model="addressModalForm.address[index]"
              placeholder="请填写地址信息"
            ></Input>
            </Col>
            <Col span="4" offset="1">
            <Button
              type="error"
              @click="removeAddressItem(index)"
            >删除</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="12">
            <Button
              v-show="addressModalForm.address.length < addressMaxNum"
              type="dashed"
              long
              @click="addAddressItem"
              icon="plus-round"
            >添加新地址</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button
            type="success"
            @click="saveField('address')"
          >保存</Button>
          <Button
            type="ghost"
            style="margin-left: 8px"
            @click="cancelSaveField('address')"
          >取消</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import { IDTYPE, ADDRESSMAXNUM } from '@/constant'

export default {
  data () {
    return {
      idTypes: IDTYPE,
      addressMaxNum: ADDRESSMAXNUM,
      formMember: {
        memberId: 'zz945',
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
      emailModal: false,
      emailModalForm: {
        email: '',
      },
      emailValidate: {
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
        ],
      },
      addressModal: false,
      addressModalForm: {
        address: [],
      }
    }
  },
  methods: {
    editField (type) {
      this[`${type}ModalForm`][type] = typeof this.formMember[type] === 'string'
        ? this.formMember[type]
        : [...this.formMember[type]]
      this[`${type}Modal`] = true
    },
    saveField (type) {
      this.$refs[`${type}ModalForm`].validate(valid => {
        if (valid) {
          this.formMember[type] = this[`${type}ModalForm`][type]
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
    addAddressItem () {
      if (this.addressModalForm.address.length === this.addressMaxNum) {
        this.$Message.error('最多添加5个常用地址')
      } else {
        this.addressModalForm.address.push('')
      }
    },
    removeAddressItem (i) {
      if (this.addressModalForm.address.length === 1) {
        this.$Message.error('至少保留1个常用地址')
      } else {
        this.addressModalForm.address.splice(i, 1)
      }
    },
  }
}
</script>

<style lang="less">
#member-detail {
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
.edit-field-modal {
  .ivu-form {
    height: 100%;

    .ivu-form-item:last-child {
      margin-bottom: 0;
    }
  }
  .ivu-modal-footer {
    display: none;
  }
}
</style>

