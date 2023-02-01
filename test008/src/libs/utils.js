import { useRouter } from "vue-router";


//将数据转成树形数据
function formatRouterTree (data) {
  console.log(data);
  //父级菜单
  let parents = data.filter(p => p.pid == 0)
  //子级菜单
  let children = data.filter(c => c.pid !== 0);
  // console.log(data);
  // console.log(children);
  dataToTree(parents, children)

  function dataToTree (parents, children) {
    parents.map(p => {
      children.map((c, i) => {
        if (p.id === c.pid) {
          let _c = JSON.parse(JSON.stringify(children))
          _c.splice(i, 1)
          dataToTree([c], _c)

          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }

        }
      })
    })
  }
  return parents
}


//动态生成路由
function generateRouter (userRouters) {
  let newRouters = userRouters.map(r => {
    let routes = {
      path: r.path,
      name: r.name,
      component: () => import(`@/pages/${r.component}`)
      // component: (resolve) => require(['@/pages/views/' + r.name], resolve),
    }
    if (r.children) {
      routes.children = generateRouter(r.children)
    }
    return routes
  })

  return newRouters
}

export {
  formatRouterTree,
  generateRouter
}