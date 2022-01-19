
import axios from 'axios'
import { message } from 'ant-design-vue'
import router from '../router'

const _axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  withCredentials: false, 
  timeout: 30000, 
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept-Language': 'zh_CN'
  }
})

_axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    message.error('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    if (res.data.message){
      message.error(res.data.message)
    } 
    if (res.data.resultCode == 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }

  return res.data
})

export default _axios
