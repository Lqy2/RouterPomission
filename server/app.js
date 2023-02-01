const express = require('express')
const app = express()
//配置跨域
const cors = require('cors')
app.use(cors())


app.use(express.urlencoded({ extended: false }))

const users = require('./DB/user')
const routers = require('./DB/router')

app.post('/getRouterList', (req, res) => {

  let uid = req.body.uid
  let authRouterInfo = []
  if (uid) {

    // let authRouterInfo = []

    const userInfo = users.filter(user => user.id == uid)[0]
    console.log(userInfo);
    userInfo.auth.map((rid) => {
      routers.map((router) => {
        if (router.id == rid) {
          authRouterInfo.push(router)
        }
      })
    })
    console.log(userInfo.auth);
  }
  res.send({
    code: 200,
    msg: '获取成功',
    data: authRouterInfo
  })

})

//启动服务器
app.listen(3088, () => {
  console.log("serve running at http://127.0.0.1:3000");
})