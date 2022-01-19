import Axios from "axios";
import { Message} from "element-ui";

// 定义axios配置
const http = Axios.create({
  baseURL: '', // api的base_url
  withCredentials: true, // 开启跨域身份凭证
  method: "post",
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  timeout: 5000, // request timeout
  retry: 2
});

// 设置全局的请求次数，请求的间隙，用于自动再次请求
http.defaults.retry = 2;
http.defaults.retryDelay = 1000;

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    let token = localGet('token');
    if (token) config.headers.Authorization = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http;
