<template>
  <div id="report-download">
    <Form
      :model="form"
      :label-width="150"
    >
      <section>
        <header>查看报表</header>
        <div class="section-body">
          <FormItem label="报表日期" prop="downloadDate">
            <Row>
              <Col :xs="24" :md="16" :lg="12">
              <DatePicker
                type="date"
                format="yyyy-MM-dd"
                placement="bottom-end"
                placeholder="选择查看报表的日期"
                @on-change="changeDownloadDate"
                :options="options"
              />
              <!-- <Button style="margin-left: 20px;" type="primary" @click.native="downloadAll">
                全部下载
              </Button> -->
              </Col>
            </Row>
          </FormItem>
          <Row :style="{ 'padding-left': 0 }">
            <Col :xs="24" :md="16" :lg="12">
            <FormItem
              v-show="form.downloadDate"
              v-for="(file, i) in file"
              :key="i"
              :label="file.filename"
            >

              <a
                class="download-btn"
                role="button"
                :href="file.url"
                download
              >
                立即下载
              </a>
            </FormItem>
            </Col>
          </Row>
        </div>
      </section>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        downloadDate: '',
      },
      options: {
        disabledDate (date) {
          return date.valueOf() > Date.now()
        },
      },
    }
  },
  computed: {
    file: function () {
      return [{
        filename: '提现申请表',
        url: `http://admin.theiajewel.com/api-auth/file-withdraw/?date=${this.form.downloadDate}`,
      }, {
        filename: '账务报表',
        url: `http://admin.theiajewel.com/api-auth/file-batch/?date=${this.form.downloadDate}`,
      }, {
        filename: '预约商品表',
        url: `http://admin.theiajewel.com/api-auth/file-reserved/?date=${this.form.downloadDate}`,
      }]
    },
  },
  methods: {
    changeDownloadDate (date) {
      this.form.downloadDate = date
      this.$forceUpdate()
    },
    // downloadAll () {
    //   console.log('downloadAll')
    // },
  }
}
</script>

<style lang="less">
#report-download {
  padding: 15px;
  justify-content: flex-start;
  background: #f7f7f7;
  overflow: auto;

  * {
    font-size: 14px;
  }

  section {
    .section-body {
      .ivu-form-item {
        margin-bottom: 0;
      }

      .download-btn {
        text-decoration: underline;
        padding: 0 15px;
      }
    }
  }
}
</style>
