<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">
        <h3>账号登录</h3>
      </div>
      <Form
        ref="loginForm"
        :model="form"
        :rules="rules"
        class="login-form"
      >
        <FormItem prop="userid">
          <Input
            v-model="form.userid"
            type="text"
            placeholder="输入注册手机号"
            @on-enter="login"
          >
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            v-model="form.password"
            type="password"
            placeholder="输入密码"
            @on-enter="login"
          >
          </Input>
        </FormItem>
        <FormItem class="login-actions">
          <!-- <div class="remember">
            <Checkbox v-model="form.remember">七日内免登录</Checkbox>
            <strong>
              <a href="javascript:void(0)" @click="forgetPassword">忘记密码?</a>
            </strong>
          </div> -->
          <Button
            class="login-btn"
            type="primary"
            @click="login"
            :loading="loginLoading"
          >
            账号登录
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userid: '',
        password: '',
        remember: false,
      },
      rules: {
        userid: [
          { required: true, message: '账号不能为空！', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空！', trigger: 'blur' },
        ],
      },
      loginLoading: false,
      redirectUrl: '',
    }
  },
  created () {
    this.redirectUrl = this.$route.query.redirect || '/dashboard'
  },
  methods: {
    forgetPassword () {
      console.log('forget password')
    },
    login () {
      this.$refs.loginForm.validate(valid => {
        console.log('valid', valid)
        if (valid) {
          this.loginLoading = true
          const { userid, password } = this.form
          const url = '/admin/UserLogin/'
          this.$fetch(url, {
            data: {
              userid,
              password,
            },
            method: 'post',
          })
            .then(resp => {
              console.log(resp)
              const loginInfo = Object.assign({}, resp.data, {
                userid,
                password,
              })
              // this.$store.commit('updateUserInfo', loginInfo)
              this.loginLoading = false
              this.$Message.success({
                content: '登录成功',
              })
              this.$router.push(this.redirectUrl)
            })
            .catch(err => {
              console.log(err)
              this.$Message.error({
                content: '用户名或密码错误',
              })
              this.loginLoading = false
            })
        } else {
          this.$Message.error({
            content: '用户名或密码错误',
          })
        }
      })
    }
  },
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../assets/login_bg.jpg) fixed center center;

  .login-box{
    width: 440px;
    padding: 60px;
    box-sizing: border-box;
    background: #fff;

    .login-title {
      margin-bottom: 6px;
      border-bottom: 1px solid #edeeef;
      display: flex;

      h3 {
        font-weight: bold;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        border-bottom: 2px solid #1d2436;
        color: rgba(29,36,54,1);
      }
    }

    .login-form {
      .ivu-form-item {
        margin-bottom: 30px;

        &:first-child {
          padding-top: 16px;
        }
      }

      input {
        line-height: 44px;
        border-radius: 4px;
        padding: 0 16px;
        font-size: 14px;
        width: 100%;
        height: 44px;
      }
    }

    .login-actions {
      .remember {
        display: flex;
        justify-content: space-between;
        font-size: 12px;

        .ivu-checkbox {
          margin-right: 5px;
        }
      }
      .login-btn {
        width: 100%;
        margin-top: 24px;
        font-size: 14px;
        height: 44px;
      }
    }
  }
}
</style>
