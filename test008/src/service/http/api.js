import http from './axios.js'


//后台首页用户登录
export const login = (data) => http.post('/login', data);
//后台首页用户注册
export const register = (params) => http.post('/register', params)
//获取用户权限菜单
export const getUserRouters = (data) => http.get('http://127.0.0.1:3088/my/getmenuList', data)