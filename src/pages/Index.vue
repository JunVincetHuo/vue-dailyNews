<template>
  <div class="index">
    <topbar :topBarName="topBarName" @toggleNav="isShowNav"></topbar>
    <leftNav v-if="navStatus" @hideNav="isShowNav"></leftNav>
    <mt-loadmore :top-method="loadTop" :topDistance="40" ref="loadMore"> 
      <swipe></swipe>
      <new-list ref="newsList"></new-list>
    </mt-loadmore>
  </div>
</template>

<script>
import Swipe from "@/components/Swipe"; // 轮播
import NewList from "@/components/NewList"; // 新闻列表
import TopBar from '@/components/TopBar' // 顶部
import Nav from '@/components/Nav' // 左边导航
export default {
  name: "index", // 首页
  data(){
    return{
      navStatus:false,
      topBarName:'首页'
    }
  },
  components: {
    swipe: Swipe, // 轮播组件
    newList: NewList, // 新闻列表组件
    topbar:TopBar, // 顶部
    leftNav:Nav // 左边导航
  },
  methods:{
    loadTop(){
      this.$refs.newsList.$emit('refresh');
      this.$refs.loadMore.onTopLoaded();
    },
    isShowNav(data){
      if(data){
        this.navStatus = true
      }else{
        this.navStatus = false
      }
      console.log(data);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/pages/Index';

</style>


