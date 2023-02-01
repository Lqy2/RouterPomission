import qs from 'qs'
import axios from 'axios'

function getUserRouters (uid) {
  return axios({
    url: 'http://127.0.0.1:3088/my/getmenuList',
    method: 'post',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({ uid: uid })
  }).then(res => {
    return res.data
  }).catch(err => {
    throw err
  })
}

export {
  getUserRouters
}