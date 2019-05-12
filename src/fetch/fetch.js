import axios from 'axios'

// axios.defaults.baseURL = 'http://novel.juhe.im'
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
    axios.get(url)
         .then(response => resolve(response))
         .catch(error => reject(error))
  })
}
