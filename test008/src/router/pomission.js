import { generateRouter } from '@/libs/utils'
import router, { DynamicRoutes } from '@/router/index'
import store from '@/store/index'

router.beforeEach(async (to, from, next) => {
  if (!store.state.UserToken) {
    //未登录 页面是否需要登录 
    //meta.requiresAuth为true则需要登录
    if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
      next()
    } else {
      next({
        path: "/Login"
      })
    }
  } else {
    //用户已经登录  需要设置路由的访问权限
    // next()
    // 用户已经登录  路由的访问权限
    // console.log(1);
    if (!store.state.userRouters) {

      await store.dispatch('setUserRouters')
      // 后端返回的数据
      const newRouters = generateRouter(store.state.userRouters)

      // let MainContainer = DynamicRoutes.find(v => v.path === "");
      // MainContainer.children.push(newRouters)

      // console.log(1, MainContainer);
      console.log(2, newRouters);
      console.log(3, router.options.routes[0]);

      let newT = router.options.routes[0];/* 需要在里面动态添加子路由的一个根组,插入的也是这个根组对象 */
      if (newT.children.length == 1 && to.path != "/Login") {
        newRouters.forEach(item => {
          newT.children.push(item)
        })
      }
      console.log(4, router.options.routes[0]);

      // newRouters.forEach((route) => {
      //   router.addRoute(route);
      // });
      router.addRoute(newT);


      next({ path: to.path })
    } else {
      // store存在权限
      if (to.path !== "/login") {
        next();
      } else {
        next(from.fullPath)
      }
    }
    // next()
  }
})