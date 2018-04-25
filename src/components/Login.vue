<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">
        <h3>账号登录</h3>
      </div>
      <Form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
      >
        <FormItem prop="user">
          <Input
            v-model="loginForm.user"
            type="text"
            placeholder="输入注册手机号"
          >
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            v-model="loginForm.password"
            type="password"
            placeholder="输入密码"
          >
          </Input>
        </FormItem>
        <FormItem class="login-actions">
          <!-- <div class="remember">
            <Checkbox v-model="loginForm.remember">七日内免登录</Checkbox>
            <strong>
              <a href="javascript:void(0)" @click="forgetPassword">忘记密码?</a>
            </strong>
          </div> -->
          <Button
            class="login-btn"
            type="primary"
            @click="login('loginForm')"
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
      loginForm: {
        user: '',
        password: '',
        remember: false,
      },
      loginRules: {
        user: [
          { required: true, message: '账号不能为空！', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空！', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    forgetPassword () {
      console.log('forget password')
    },
    login (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('登录成功')
        } else {
          this.$Message.error('登录失败')
        }
      })
    }
  },
}
</script>

<style lang="less">
body {
  background: url(../assets/login_bg.jpg) fixed center center;
}

.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
