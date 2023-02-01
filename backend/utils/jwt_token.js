const jwt = require('jsonwebtoken')
const config = require('../config')
// config.jwtSecretKey;  //自定义秘钥  自定义，没要求
//async  await  解决异步请求获取不到问题
let verifyToken = async function (token) {
  await jwt.verify(token, config.jwtSecretKey, function (err, data) {
    if (err) return false
    else return true

  })
}

module.exports.verifyToken = verifyToken