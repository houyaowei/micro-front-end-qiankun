
import axios from '../utils/axios'

export function getUserInfo() {
  return axios.get('/user/info');
}


