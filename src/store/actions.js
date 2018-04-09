import * as types from './mutation-types'

export default {
  // 新增新闻内容
  addNews:({commit},payload) =>{
    commit(types.ADD_NEWS,payload)
  },
  // 刷新新闻
  refreshNews:({commit},payload) =>{
    commit(types.REFRESH_NEWS,payload)
  }
}