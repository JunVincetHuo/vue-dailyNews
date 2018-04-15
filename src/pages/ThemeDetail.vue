<template>
  <div class="themeDetails">
    <topbar :topBarName="data.name" @toggleNav="isShowNav"></topbar>
    <leftNav v-if="navStatus" @hideNav="isShowNav"></leftNav>
    <!-- 壁纸 -->
    <div class="top-wrapper">
      <img :src="attachImageUrl(data.background)" alt="">
      <p>{{data.description}}</p>
    </div>
    <div class="new-list">
      <div class="editor-box">

      </div>
      <ul class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="40" infinite-scroll-immediate-check="false">
        <li v-for="(newsItem,index) in newsList" :key="index" class="item">
          <router-link :to="{name:'newsDetail',params:{id:newsItem.id}}">
            <h2 class="item-title">
              {{newsItem.title}}
            </h2>
            <div class="image-wrapper" v-if="!!newsItem.images">
              <img class="item-image" v-lazy="attachImageUrl(newsItem.images[0])" :alt="newsItem.title">
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar"; // 顶部
import Nav from "@/components/Nav"; // 左边导航
import { getThemesList, getThemesMoreList } from "@/api/api";
import { Indicator } from "mint-ui";

export default {
  name: "ThemeDetail",
  components: {
    leftNav: Nav, // 左边导航
    topbar: TopBar // 顶部
  },
  data() {
    return {
      navStatus: false, // 状态栏管理,
      id: this.$route.params.id, // 主题id
      beforeId: '', // 加载文章列表文章的第一个ID
      data: {}, // 主题新闻列表
      newsList: [], // 新闻列表
      loading:false
    };
  },
  created() {
    this.fetchData();
  },
  watch:{
    '$route'(to,from){
      this.loading = true
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.id = to.params.id
      this.newsList = []
      this.fetchData()
      this.navStatus = false
    }
  },
  methods: {
    // 第一次加载数据
    fetchData() {
      getThemesList(this.id, {}).then(response => {
        this.loading = false
        console.log(response);
        this.data = response.data;
        this.newsList = response.data.stories;
        this.beforeId = response.data.stories[0].id
      });
    },
    // 获得更多新闻
    fetchMoreData() {
      getThemesMoreList(this.id,this.beforeId,{}).then(response =>{
        console.log(response)
        this.newsList = this.newsList.concat(response.data.stories)
        this.beforeId = response.data.stories[0].id
        // 加载数据关闭加载提示框
        Indicator.close();
        this.loading = false;
      })
    },
    // 加载更多
    loadMore() {
      this.loading = true;
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      // 加载更多数据更新DOM
      this.$nextTick(() => {
        this.fetchMoreData();
      });
    },
    // 导航栏
    isShowNav(data) {
      if (data) {
        this.navStatus = true;
      } else {
        this.navStatus = false;
      }
      console.log(data);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/pages/ThemeDetail';

</style>


