<template>
  <div id="member-detail">
    <Form :model="form" :label-width="150">
      <section>
        <header>基本信息</header>
        <div class="section-body">
          <FormItem label="会员号" prop="memberId">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.memberId }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="姓名" prop="name">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.name }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="性别" prop="gender">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ gender }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="证件类型" prop="idType">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ idType }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="证件号码" prop="idNo">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.idNo }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="生日" prop="birthday">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.birthday }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="手机号" prop="cellPhone">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.cellPhone }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="邮箱" prop="email">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.email }}</p>
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
            v-for="(ad, seq) in form.address"
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
              <p>{{ form.balance + ' 元' }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="押金" prop="deposit">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.deposit + ' 元' }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="租金" prop="rent">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.rent + ' 元' }}</p>
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
              <p>{{ form.createdDate }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="创建来源" prop="source">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ memberSource }}</p>
              </Col>
            </Row>
          </FormItem>
          <!-- <FormItem label="最后修改时间" prop="lastModified">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.lastModified }}</p>
              </Col>
            </Row>
          </FormItem>
          <FormItem label="最后修改人" prop="lastModifiedBy">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <p>{{ form.lastModifiedBy }}</p>
              </Col>
            </Row>
          </FormItem> -->
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
            :loading="saveLoading"
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
            :loading="saveLoading"
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
import { IDTYPE, ADDRESSMAXNUM, MEMBERSOURCE, GENDER } from '@/constant'

export default {
  data () {
    return {
      idTypes: IDTYPE,
      addressMaxNum: ADDRESSMAXNUM,
      memberSources: MEMBERSOURCE,
      genders: GENDER,
      saveLoading: false,
      form: {
        memberId: '',
        name: '',
        gender: '',
        idType: '',
        idNo: '',
        birthday: '',
        phone: '',
        email: '',
        address: [],
        balance: '',
        deposit: '',
        rent: '',
        createdDate: '',
        source: '',
        // lastModified: '',
        // lastModifiedBy: '',
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
  computed: {
    memberSource: function () {
      const source = this.memberSources.find(cur => cur.key === this.form.source) || ''
      return source && source.value
    },
    idType: function () {
      const idType = this.idTypes.find(cur => cur.key === this.form.idType)
      return idType && idType.value
    },
    gender: function () {
      const gender = this.genders.find(cur => cur.key === this.form.gender)
      return gender && gender.value
    },
  },
  created () {
    const url = '/member/'
    this.form.memberId = this.$route.params.id
    this.$fetch(url, {
      params: {
        memberId: this.form.memberId,
      }
    })
      .then(resp => {
        const results = resp.data.results
        if (results && results.length) {
          this.form = {
            ...results[0],
          }
          this.form.address = JSON.parse(this.form.address)
        } else {
          this.$Message.error({
            content: '未找到该会员的详细信息',
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.$Message.error({
          content: err,
        })
      })
  },
  methods: {
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
#member-detail {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  overflow: auto;

  * {
    font-size: 14px;
  }
}
</style>

