<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
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
