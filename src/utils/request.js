import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
// import { UserModule } from '@/store/modules/user'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://192.168.10.110:3000/mock/22', // url = base url + request url
  // baseURL: 'http://wtapp.natapp1.cc/mock/22', // url = base url + request url
  baseURL: '/api', // url = base url + request url
  // baseURL: 'http://localhost:7011', // url = base url + request url
  timeout: 50000
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
// service.interceptors.request.use(
//   (config) => {
//     // Add X-Access-Token header to every request, you can add other custom headers here
//     // if (UserModule.token) {
//     //   // config.headers['X-Access-Token'] = UserModule.token
//     //   config.headers['Authorization'] = 'Bearer ' + UserModule.token
//     // }
//     if (config.params) {
//       if (!Array.isArray(config.params.useempty) || !config.params.useempty.length) {
//         config.params.useempty = []
//       }
//       Object.keys(config.params).forEach((key: any) => {
//         if (String(config.params[key]).trim() === '' && config.params.useempty.indexOf(key) == -1) {
//           delete config.params[key]
//         }
//       })
//       delete config.params.useempty
//     }
//     return config
//   },
//   (error) => {
//     Promise.reject(error)
//   }
// )

// Response interceptors
service.interceptors.response.use(
  (response) => {
    // Some example codes here:
    // code == 20000: success (old)
    // code == 0: success
    // code == 50001: invalid access token
    // code == 50002: already login in other place
    // code == 50003: access token expired
    // code == 50004: invalid user (user not exist)
    // code == 50005: username or password is incorrect
    // You can change this part for your own usage.
    const res = response.data
    if (res.code !== 0) {
      Message({
        message: res.msg || res.message || 'Error ' + response.status,
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          // UserModule.ResetToken()
          location.reload() // To prevent bugs from vue-router
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response.data
    }
  },
  (error) => {
    let message = error.message
    if (error.response) {
      switch (error.response.status) {
        case 400:
          message = '400：请求的内容有误'
          break
        case 401:
          message = '401：未授权，请登录'
          break
        case 403:
          message = '403：权限不足，无法使用该功能'
          break
        default:
          message = error.message
      }
    }
    console.log(error.status)
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
