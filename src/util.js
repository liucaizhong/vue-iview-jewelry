import axios from 'axios'
import { DEVURL, PRODURL } from './constant'

export default {
  getCookie (name) {
    if (document.cookie.length > 0) {
      let start = document
        .cookie
        .indexOf(name + '=')
      if (start !== -1) {
        start = start + name.length + 1
        let end = document
          .cookie
          .indexOf(';', start)
        if (end === -1) {
          end = document.cookie.length
        }
        return decodeURIComponent(document.cookie.substring(start, end))
      }
    }
    return ''
  },
  setCookie (name, value, expiredays) {
    const exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + '=' + encodeURIComponent(value) + ((expiredays === null)
      ? ''
      : ';expires=' + exdate.toGMTString())
  },
  getLocalStorage (key) {
    const localStorage = window.localStorage
    return localStorage.getItem(key)
  },
  setLocalStorage (key, value) {
    const localStorage = window.localStorage
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      console.log(e)
      return false
    }
    return true
  },
  fetch (url, config = {}) {
    const baseUrl = process.env.NODE_ENV === 'production'
      ? PRODURL
      : DEVURL
    const realUrl = baseUrl + url
    const mergeConfig = Object.assign({}, {
      params: {
        limit: 10,
        offset: 0,
      },
    }, config)

    return new Promise((resolve, reject) => {
      const request = async () => {
        try {
          const rsp = await axios({
            url: realUrl,
            method: 'get',
            ...mergeConfig,
          })
          resolve(rsp)
        } catch (err) {
          // todo: error handle
          console.error(err)
          reject(err)
        }
      }

      request()
    })
  },
}
