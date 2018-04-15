<template>
  <div class="news-detail">
    <news-top-bar :zanNum="otherData.popularity" :collectNum="otherData.comments"></news-top-bar>
    <div class="top-wrapper">
      <img v-lazy="attachImageUrl(data.image)" alt="">
      <h2 class="news-title">{{data.title}}</h2>
      <p class="images-source">{{data.image_source}}</p>
    </div>
    <div class="body-wrap" v-html="data.body"></div>
  </div>
</template>

<script>
import { getNewsMessage,getNewsOtherMessage } from "@/api/api";
import NewsTopBar from "@/components/NewsTopBar"
export default {
  data() {
    return {
      id: "",
      data: {}, // 新闻内容
      otherData:{} // 新闻更多内容(点赞,评论数)
    };
  },
  components:{
    newsTopBar:NewsTopBar
  },
  created() {
    this.id = this.$route.params.id; // 获取路由参数
    this.fetchData();
    this.fetchOtherData();
  },
  methods: {
    // 获取新闻信息
    fetchData() {
      getNewsMessage(this.id, {}).then(response => {
        console.log(response);
        response.data.body = this.attachBodyContent(response.data.body)
        this.data = response.data;
      });
    },
    // 获取新闻更多信息
    fetchOtherData(){
      getNewsOtherMessage(this.id,{}).then(response =>{
        this.otherData = response.data
      })
    },
    // 修改文章图片地址
    attachBodyContent(body) {
      return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/pages/NewsDetail';
</style>
// 因为v-html不会渲染vue模板
<style lang="stylus">
@import '../../static/css/news_qa.auto.styl';
</style>


