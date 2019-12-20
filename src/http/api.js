import axios from 'axios'

// 请求数据
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
}
)

// 相应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
}
)

// 封装axios的post请求
export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    if (params === 'post') {
      axios.post(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    } else if (params === 'get') {
      axios.get(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    }
  })
}

// 暴露接口
export default {
  JH_info (url, params) {
    return fetch(url, params)
  }
}
