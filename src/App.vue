<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  created () {
    // getUserInfo
    this.$getCookie('logged') === '0' && this.getUserInfo()
  },
  methods: {
    ...mapActions([
      'getUserInfo',
    ]),
  },
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

.ivu-input {
  height: 33px;
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;

  .edit-btn {
    cursor: pointer;
  }

  .dotted-line {
    border-top :1px dashed #e8e8e8;
    height: 1px;
    overflow: hidden;
    width: 100%;
    position: absolute;
    left: 0;
  }

  section {
    width: 100%;
    border: 1px solid #e8e8e8;
    background: #fff;
    margin-bottom: 20px;
    position: relative;

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
        margin-bottom: 14px;
        padding: 5px 0;

        .ivu-form-item-label {
          font-weight: bold;
        }

        .ivu-form-item-content {
          .ivu-form-item-error-tip {
            font-size: 12px;
          }
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

.header {
    flex-grow: 0;
  }

  .body {
    border: 1px solid #dddee1;
    // border-bottom: none;
    min-height: 500px;
    flex: 1;

    .ivu-table-wrapper {
      border: none;
      // height: 100%;

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
        // margin-bottom: 10px;
        min-height: 500px;
      }

      // @media screen and (max-width: 768px){
      //   .ivu-table-body {
      //     margin-top: 55px;
      //   }
      // }

      .ivu-table-tip {
        // top: 40px;
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
