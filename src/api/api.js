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