// import { getUserRouters } from '@/service/index'
import { getUserRouters } from '@/service/http/api'
import { formatRouterTree } from '@/libs/utils'

export default {
  async setUserRouters ({ commit, state }) {
    const res = await getUserRouters(state.token)
    console.log(res);
    const userRouters = res.data
    const payload = formatRouterTree(userRouters)
    // console.log('userRouters', userRouters);
    // console.log(generateRouter(payload));
    // console.log('payload', payload);

    commit('setUserRouters', payload)
    // commit('setAuth', true)
  }
}