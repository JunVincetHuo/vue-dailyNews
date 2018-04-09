<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(swipeItem,index) in swipeList" :key="index">
        <img :src="attachImageUrl(swipeItem.image)" :alt="swipeItem.title">
        <p class="swipeTitle">{{swipeItem.title}}</p>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { getIndexNews } from "@/api/api";

export default {
  name: "swipe", // 轮播组件
  data() {
    return {
      swipeList: [] // 轮播数组
    };
  },
  created() {
    getIndexNews({}).then(response => {
      console.log(response);
      this.swipeList = response.data.top_stories;
    }).catch(error=>{
      console.log(error);
    });
  },
  methods: {
  }
};
</script>


<style lang="stylus">
@import '../assets/stylus/components/Swipe'
</style>



