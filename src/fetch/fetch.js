import axios from 'axios'
const CancelToken = axios.CancelToken

// axios.defaults.baseURL = 'production' === process.env.NODE_ENV ? 'http://novel.juhe.im' : '/api'
axios.defaults.baseURL = '/api'

axios.interceptors.response.use(response => {
  if (200 != response.status)
    return Promise.reject(response)
  return response
}, error => Promise.reject(error))

export default function fetch (url = '', params = {}) {
  const paramsArr = []
  for (let key in params) {
    paramsArr.push(`${key}=${params[key]}`)
  }
  if (0 < paramsArr.length) {
    url += '?' + paramsArr.join('&')
  }
  return new Promise((resolve, reject) => {
    console.log(url)
    // if (needCancel) {
    //   axios.cancelToken = new CancelToken(function executor(c) {
    //     this.cancel = c
    //   })
    // }
    axios.get(url)
         .then(response => resolve(response))
         .catch(error => reject(error))
    // axios({
    //   method: 'get',
    //   url,
    //   cancelToken: new CancelToken(function executor(c) {
    //     this.cancel = c
    //   })
    // })
    //   .then(response => resolve(response))
    //   .catch(error => reject(error))
  })
}
