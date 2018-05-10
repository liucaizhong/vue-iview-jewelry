const express = require('express')
const axios = require('axios')

const router = express.Router()
const baseUrl = 'http://iwxdz5.natappfree.cc/api-auth/admin'

function mapUrl (rawUrl) {
  return baseUrl + rawUrl
}

// headers: {
//   'Content-Type': 'application/x-www-form-urlencoded',
//   'Content-Length': Buffer.byteLength(data),
// }

function request ({ url, method = 'get', ...args }, req, res) {
  axios({
    method,
    url,
    ...args,
    responseType: 'stream'
  }).then(resp => {
    // console.log('resp is', resp)
    resp.data.pipe(res)
  }).catch(err => {
    console.error('error is', err)
    res.status(500).send('500 | Internal Server Error')
  })
}

module.exports = () => {
  router.post('/member/', (req, res) => {
    console.log('member post', req.data)
    request({
      url: mapUrl(req.url),
      method: 'post',
    }, req, res)
  })

  router.get('/member/', (req, res) => {
    request({
      url: mapUrl(req.url),
    }, req, res)
  })

  return router
}
