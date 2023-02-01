export default {
  uid: 1,
  hasAuth: false,
  token: '',
  userRouters: null,
  isCollapse: false,
  Fullscreen: false,//是否全屏显示
  get UserToken () {
    return localStorage.getItem('token');
  },
  set UserToken (value) {
    localStorage.setItem('token', value)
  }
}