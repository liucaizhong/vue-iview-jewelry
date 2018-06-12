<template>
  <div id="error-page">
    <div class="error-page-container">
      <div class="error-page-main">
        <h3>
          <strong>404</strong>无法打开页面
        </h3>
        <div class="error-page-actions">
          <div>
            <h4>可能原因：</h4>
            <ol>
              <li>网络信号差</li>
              <li>找不到请求的页面</li>
              <li>输入的网址不正确</li>
            </ol>
          </div>
          <div>
            <h4>可以尝试：</h4>
            <ul>
              <li>
                <router-link to="/dashboard">返回首页</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#error-page {
  * {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  background: #f0f1f3;
  padding: 80px 0 180px;
  width: 100%;
  height: 100%;

  .error-page-container {
    position: relative;
    z-index: 1;

    .error-page-main {
      position: relative;
      background: #f9f9f9;
      margin: 0 auto;
      width: 617px;
      box-sizing: border-box;
      padding: 50px 50px 70px;

      &::before {
        content: '';
        display: block;
        background: url(../assets/errorPageBorder.png);
        height: 7px;
        position: absolute;
        top: -7px;
        width: 100%;
        left: 0;
      }

      h3 {
        font-size: 24px;
        font-weight: 400;
        border-bottom: 1px solid #d0d0d0;

        strong {
          font-size: 54px;
          font-weight: 400;
          margin-right: 20px;
        }
      }

      h4 {
        font-size: 20px;
        font-weight: 400;
        color: #333;
      }

      .error-page-actions {
        font-size: 0;
        z-index: 100;

        div {
          font-size: 14px;
          display: inline-block;
          padding: 30px 0 0 10px;
          width: 50%;
          box-sizing: border-box;
          color: #838383;
        }

        ol {
          list-style: decimal;
          padding-left: 20px;

          li {
            line-height: 2.5em;
          }
        }

        &::before {
          content: '';
          display: block;
          position: absolute;
          z-index: -1;
          bottom: 17px;
          left: 50px;
          width: 200px;
          height: 10px;
          box-shadow: 4px 5px 31px 11px #999;
          transform: rotate(-4deg);
        }

        &::after {
          content: '';
          display: block;
          position: absolute;
          z-index: -1;
          bottom: 17px;
          right: 50px;
          width: 200px;
          height: 10px;
          box-shadow: 4px 5px 31px 11px #999;
          transform: rotate(4deg);
        }
      }
    }
  }
}
</style>

