<template>
  <div class="index">
    <topbar></topbar>
    <nav></nav>
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
  components: {
    swipe: Swipe, // 轮播组件
    newList: NewList, // 新闻列表组件
    topbar:TopBar, // 顶部
    nav:Nav // 左边导航
  },
  methods:{
    loadTop(){
      this.$refs.newsList.$emit('refresh');
      this.$refs.loadMore.onTopLoaded();
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>


