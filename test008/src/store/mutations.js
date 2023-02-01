export default {
  LOGIN_IN (state, token) {
    state.UserToken = token;
  },
  LOGIN_OUT (state) {
    state.UserToken = ""
  },

  setUserRouters (state, userRouters) {
    state.userRouters = userRouters
  },
  toggleNavCollapse (state) {
    state.isCollapse = !state.isCollapse
  },



}