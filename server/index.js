const express = require('express')
const axios = require('axios')
const multipart = require('connect-multiparty')
const FormData = require('form-data')
const fs = require('fs')

const multipartMiddleware = multipart()
const router = express.Router()
// const baseUrl = 'http://gdfgy2.natappfree.cc/api-auth'
const baseUrl = 'http://admin.theiajewel.com/api-auth'

function mapUrl (rawUrl) {
  return baseUrl + rawUrl
}

function formData (rawForm, rawData, isFile) {
  const form = rawForm || new FormData()

  Object.keys(rawData).forEach(key => {
    // console.log(rawData[key])
    if (isFile) {
      const { fieldName, originalFilename, path } = rawData[key]
      form.append(fieldName, fs.createReadStream(path), originalFilename)
    } else {
      form.append(key, rawData[key])
    }
  })

  return form
}

function getHeaders (form) {
  return new Promise((resolve, reject) => {
    form.getLength((err, length) => {
      if (err) reject(err)
      const headers = Object.assign({
        'Content-Length': length
      }, form.getHeaders())
      resolve(headers)
    })
  })
}

// headers: {
//   'Content-Type': 'application/x-www-form-urlencoded',
//   'Content-Length': Buffer.byteLength(data),
// }

function request ({ url, method = 'get', headers = {}, ...args }, req, res) {
  // console.log('req.headers', req.headers)
  if (req.headers.cookie) {
    Object.assign(headers, {
      cookie: req.headers.cookie,
    })
  }
  console.log('headers', headers)
  axios({
    method,
    url,
    // withCredentials: true,
    headers,
    ...args,
    responseType: 'stream',
  }).then(resp => {
    console.log('resp.headers', resp.headers)
    resp.data.pipe(res)
    if (resp.headers['set-cookie']) {
      res.setHeader('set-cookie', resp.headers['set-cookie'])
    }
  }).catch(err => {
    console.error('error code is', err.response.data.statusCode)
    console.error('error message is', err.response.data.statusMessage)
    const { statusCode, statusMessage } = err.response.data
    // res.status(500).send('500 | Internal Server Error')
    res.status(500).send(statusCode + ' | ' + statusMessage)
  })
}

module.exports = () => {
  router.get('/admin/member/', (req, res) => {
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.get('/admin/GetUserInfo/', (req, res) => {
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.get('/admin/product/', (req, res) => {
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.get('/admin/RentalService/', (req, res) => {
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.get('/admin/ComboService/', (req, res) => {
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.get('/admin/SellService/', (req, res) => {
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.get('/common/backendorder/', (req, res) => {
    console.log('req.url', req.url)
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.get('/admin/appindexconf/', (req, res) => {
    console.log('req.url', req.url)
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.post('/admin/appindexconf/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body
    }, req, res)
  })

  router.get('/admin/appproductconf/', (req, res) => {
    console.log('req.url', req.url)
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.post('/admin/appproductconf/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body
    }, req, res)
  })

  router.get('/admin/appotherconf/', (req, res) => {
    console.log('req.url', req.url)
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  router.post('/admin/appotherconf/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body
    }, req, res)
  })

  router.post('/admin/member/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body
    }, req, res)
  })

  router.post('/admin/CompleteService/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body
    }, req, res)
  })

  router.post('/admin/UserLogin/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body,
    }, req, res)
  })

  router.post('/admin/UserLogout/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body,
    }, req, res)
  })

  router.post('/admin/ChangePasswd/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body,
    }, req, res)
  })

  router.post('/admin/ClaimGoods/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body,
    }, req, res)
  })

  // router.post('/admin/ComboService/claimgood/', (req, res) => {
  //   request({
  //     url: mapUrl(req.url),
  //     method: 'post',
  //     data: req.body,
  //   }, req, res)
  // })

  router.post('/admin/ComboService/giveback/', (req, res) => {
    request({
      url: mapUrl(req.url),
      method: 'post',
      data: req.body,
    }, req, res)
  })

  router.post('/admin/productupdate/', multipartMiddleware, (req, res) => {
    let form = formData(null, req.body)
    form = formData(form, req.files, true)
    // console.log('productupdate3', form)

    getHeaders(form).then(headers => {
      request({
        url: mapUrl(req.url),
        method: 'post',
        data: form,
        headers,
      }, req, res)
    }).catch(err => {
      console.error('error is', err)
      res.status(500).send('500 | Internal Server Error')
    })
  })

  router.post('/admin/productfile/', (req, res) => {
    const form = formData(null, req.files, true)
    console.log('productfile', form)

    getHeaders(form).then(headers => {
      request({
        url: mapUrl(req.url),
        method: 'post',
        data: form,
        headers,
      }, req, res)
    }).catch(err => {
      console.error('error is', err)
      res.status(500).send('500 | Internal Server Error')
    })
  })

  return router
}
