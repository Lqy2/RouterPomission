//对axios进行二次封装,将刚才下载好的axios导入进来
import axios from "axios";
import router from '@/router/index'
// import { Message } from 'element-plus'
import { ElMessage } from 'element-plus'
import store from '@/store/index.js'
//2. 利用axios对象的方法create,去创建一个axios实例
//requests就是axios,只不过稍微配置一下
const http = axios.create({
  baseURL: '/api',
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/x-www-form-urlencoded' }
});


// 请求拦截处理 请求拦截 在请求拦截中可以补充请求相关的配置
// interceptors axios的拦截器对象
http.interceptors.request.use(config => {
  // config 请求的所有信息
  // console.log(config);
  // 响应成功的返回

  config.headers = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  }
  config.headers.Authorization = config.headers.token
  return config // 将配置完成的config对象返回出去 如果不返回 请求讲不会进行

}, err => {
  // 请求发生错误时的相关处理 抛出错误
  //  //响应失败的返回
  Promise.reject(err)
})


//响应拦截处理  响应拦截器：包含两个函数（一个是成功返回的函数，一个是失败的返回的函数）
http.interceptors.response.use(res => {
  // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
  // res 是所有相应的信息
  console.log(res.data)
  return res.data
}, err => {
  if (err && err.response) {
    // console.log(err.response);
    if (err.response.status == 401) {
      // 清除本地存储中的user数据
      window.localStorage.removeItem('token')
      // 跳转到登录页面
      router.push('/Login')
      ElMessage({
        type: 'warning',
        message: '登录状态无效，请重新登录！'
      })
    }
  } else {
    err.message = '连接服务器失败'
  }
  // ElMessage.error({
  //   message: err.message
  // })
  // 服务器响应发生错误时的处理
  Promise.reject(err)
})

export default http