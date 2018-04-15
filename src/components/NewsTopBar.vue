<template>
  <header class="topbar">
    <i class="iconfont icon-right-arrow back-btn" @click="goBack"></i>
    <div class="right-box">
      <div class="collection-status">
        <i class="iconfont icon-shoucang" v-if="isCollect"></i>
        <i class="iconfont icon-shoucang1" v-else></i>
      </div>
      <div class="comment-status">
        <i class="iconfont icon-xiaoxi"></i>
        <span class="comment-num">{{collectNum}}</span>
      </div>
      <div class="good-status">
        <i class="iconfont icon-zan" v-if="isZan"></i>
        <i class="iconfont icon-zan1" v-else></i>
        <span class="good-num">{{zanNum}}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "news-topbar", // 文章页顶部
  data() {
    return {
      isCollect: false, // 是否收藏
      isZan: false, // 是否点赞
    };
  },
  props:{  // 从父组件获取收据
    // 赞数
    zanNum:{
      type:Number,
      default:0
    },
    // 收藏数
    collectNum:{
      type:Number,
      default:0
    }
  },
  methods:{
    // 返回上一级
    goBack(){
      window.history.back()
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/components/NewsTopBar';
</style>
