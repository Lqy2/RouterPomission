import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import pomission from '@/router/pomission'

//#region 
// if (store.state.token) {
//   // await store.dispatch('setUserRouters')
//   // const newRouters = generateRouter(store.state.userRouters)

//   // newRouters.forEach((route) => {
//   //   router.addRoute(route);
//   // });
//   // console.log(newRouters);
//   // router.addRoute(newRouters)

//   // next({ path: to.path })
//   next()
// } else {
//   next()

// }


// store.dispatch('setUserRouters')
//#endregion


const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router)
app.use(pomission)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus).mount('#app')