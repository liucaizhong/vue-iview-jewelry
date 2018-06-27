<template>
  <div id="persona">
    <Tabs name="modifyPassword">
      <TabPane
        label="修改密码"
        name="modifyPassword"
      >
        <Form
          ref="form"
          :model="form"
          :label-width="180"
        >
          <!-- <FormItem
            label="旧密码"
            prop="oldPassword"
            :rules="[{
              required: true,
              trigger: 'blur',
              message: '旧密码不能为空',
            }, {
              trigger: 'blur',
              validator (rule, value, cb) {
                if (value !== login.password) {
                  cb('旧密码不正确')
                }
                cb()
              },
            }]"
          > -->
          <FormItem
            label="旧密码"
            prop="oldPassword"
            :rules="[{
              required: true,
              trigger: 'blur',
              message: '旧密码不能为空',
            }]"
          >
            <Row>
              <Col :xs="20" :md="16" :lg="12">
              <Input
                v-model="form.oldPassword"
                placeholder="输入旧密码"
                type="password"
              ></Input>
              </Col>
            </Row>
          </FormItem>
          <!-- <FormItem
            label="新密码"
            prop="newPassword"
            :rules="[{
              required: true,
              trigger: 'blur',
              message: '新密码不能为空',
            }, {
              trigger: 'blur',
              validator (rule, value, cb) {
                if (value == login.userid || value.length < 8
                  || !/[A-Z]+/g.test(value) || !/[a-z]+/g.test(value)
                  || !/[0-9]/g.test(value)) {
                    cb('新密码格式不正确')
                  }
                cb()
              },
            }]"
          > -->
          <FormItem
            label="新密码"
            prop="newPassword"
            :rules="[{
              required: true,
              trigger: 'blur',
              message: '新密码不能为空',
            }]"
          >
            <Row>
              <Col :xs="20" :md="16" :lg="12">
              <Input
                v-model="form.newPassword"
                placeholder="输入新密码"
                type="password"
              ></Input>
              </Col>
              <Col span="4" style="height: 33px;">
              <IconTooltip
                :size="25"
                type="ios-information"
                placement="left"
              >
                <template slot="content">
                  <h1>密码必须：</h1>
                  <p>至少包含一个小写字母</p>
                  <p>至少包含一个大写字母</p>
                  <p>至少包含一个数字</p>
                  <p>不可与账户名称相同</p>
                  <p>至少包含8个字符</p>
                  <p>不可是常见密码</p>
                </template>
              </IconTooltip>
              </Col>
            </Row>
          </FormItem>
          <FormItem
            label="重复新密码"
            prop="confirmNewPassword"
            :rules="[{
              required: true,
              trigger: 'blur',
              message: '重复新密码不能为空',
            }, {
              trigger: 'blur',
              validator (rule, value, cb) {
                if (value !== form.newPassword) {
                  cb('两次新密码输入不一致')
                }
                cb()
              },
            }]"
          >
            <Row>
              <Col :xs="20" :md="16" :lg="12">
              <Input
                v-model="form.confirmNewPassword"
                placeholder="再次输入新密码"
                type="password"
              ></Input>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row>
              <Col :xs="20" :md="16" :lg="12">
              <Button
                type="primary"
                long
                @click="modifyPassword"
                :loading="modifyPasswordLoading"
              >
                确认修改
              </Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import IconTooltip from './IconTooltip'

export default {
  components: {
    IconTooltip,
  },
  data () {
    return {
      modifyPasswordLoading: false,
      form: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
    }
  },
  // computed: {
  //   ...mapState([
  //     'login',
  //   ])
  // },
  methods: {
    modifyPassword () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.modifyPasswordLoading = true
          const { oldPassword, newPassword, confirmNewPassword } = this.form
          const url = '/admin/ChangePasswd/'
          this.$fetch(url, {
            data: {
              old_password: oldPassword,
              new_password1: newPassword,
              new_password2: confirmNewPassword,
            },
            method: 'post',
          }).then(resp => {
            console.log('resp', resp)
            this.form.oldPassword = ''
            this.form.newPassword = ''
            this.form.confirmNewPassword = ''
            this.modifyPasswordLoading = false
            this.$Message.success({
              content: '密码修改成功',
            })
          }).catch(err => {
            console.log(err)
            this.modifyPasswordLoading = false
            this.$Message.error({
              content: '密码修改失败',
            })
          })
        }
      })
    }
  },
}
</script>

<style lang="less">
#persona {
  flex-direction: row;
  justify-content: flex-start;

  * {
    font-size: 14px;
  }

  .ivu-tabs {
    flex: 1;

    form {
      padding: 20px 0;

      .ivu-form-item {
        width: 100%;

        .ivu-form-item-error-tip {
          font-size: 12px;
        }

        .ivu-tooltip {
          margin-left: 15px;

          .ivu-tooltip-rel {
            height: 100%;

            .ivu-icon {
              line-height: 33px;
            }
          }
        }
      }
    }
  }
}
</style>
