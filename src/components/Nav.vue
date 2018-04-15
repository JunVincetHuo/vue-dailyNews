<template>
  <div class="nav-box">
    <div class="nav">
      <!-- 顶部个人信息 -->
      <div class="personal-menu">
        <p class="personal-message">
          <img class="personal-img" src="https://images.weserv.nl/?url=pic2.zhimg.com/v2-550bd30316c0bcfcef6ecd26196b8981.jpg" alt=""> DRMomster
        </p>
        <ul class="personal-link">
          <li>
            <i class="iconfont icon-shoucang"></i>
            我的收藏
          </li>
          <li>
            <i class="iconfont icon-shoucang"></i>
            我的收藏
          </li>
        </ul>
      </div>
      <!-- 菜单 -->
      <nav>
        <ul class="menus-list">
          <li>
            <router-link to="/">
              首页
            </router-link>
          </li>
          <li v-for="(item,index) in themeList" :key="index">
            <router-link :to="{name:'themeDetail',params:{id:item.id}}">
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- 蒙层 -->
    <div class="wrapper" @click="hideNav"></div>
  </div>
</template>

<script>
import { getNavList } from "@/api/api";

export default {
  name: "leftNav",
  data() {
    return {
      themeList: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 获取导航数据
    fetchData() {
      getNavList({}).then(response => {
        console.log("======");
        console.log(response.data.others);
        this.themeList = response.data.others;
      });
    },
    // 关闭导航，向父传递事件
    hideNav() {
      this.$emit("hideNav", false);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/components/Nav';
</style>


