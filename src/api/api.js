import axios from 'axios' // 引入axios

// 获取最新消息（首页）
export const getIndexNews = params =>{
  return axios.get('api/news/latest',{
    params:params
  })
}

// 根据日期获得更多新闻数据(首页)
export const getMoreIndexNews = (date,params) =>{
  return axios.get(('api/news/before/'+date),{
    params:params
  })
}

// 获取导航主题分类
export const getNavList = params =>{
  return axios.get('api/themes',{
    params:params
  })
}

// 根据id获取新闻内容
export const getNewsMessage = (id,params) =>{
  return axios.get(('api/news/' + id),{
    params:params
  })
}

// 根据id获取新闻中更多内容
export const getNewsOtherMessage = (id,params) =>{
  return axios.get(('api/story-extra/'+id),{
    params:params
  })
}

// 根据id获取主题新闻
export const getThemesList = (id,params) =>{
  return axios.get(('api/theme/'+ id),{
    params:params
  })
}

// 根据id获取更多主题新闻
export const getThemesMoreList = (id,beforeId,params) =>{
  return axios.get(`api/theme/${id}/before/${beforeId}`,{
    params:params
  })
}
