import * as types from './mutation-types'

export default {
  // 新增新闻内容
  [types.ADD_NEWS](state,payload){
    state.stories.push(payload.stories);
    // state.ids = state.ids.concat(payload.ids);
  },
  // 刷新新闻
  [types.REFRESH_NEWS](state,payload){
    state.stories = [];
  }
}