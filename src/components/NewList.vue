<template>
  <div class="new-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="40" infinite-scroll-immediate-check="false">
    <div class="list-box" v-for="(newsListItem,newsListIndex) in stories" :key="newsListIndex" :data-date="newsListItem.date">
      <p class="time">
        {{changeDateType(newsListItem.date)}}
      </p>
      <ul class="list">
        <li class="item" v-for="(newsItem,newsItemIndex) in newsListItem.newsList" :key="newsItemIndex">
          <router-link :to="{name:'newsDetail',params:{id:newsItem.id}}">
            <h2 class="item-title">
              {{newsItem.title}}
            </h2>
            <div class="image-wrapper">
              <img class="item-image" v-lazy="attachImageUrl(newsItem.images[0])" :alt="newsItem.title">
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getIndexNews, getMoreIndexNews } from "@/api/api";
import { mapState } from "vuex";
import { Indicator } from "mint-ui";

export default {
  name: "newList",
  data() {
    return {
      newList: [], // 新闻列表
      loading: false, // mintUI无限加载,true就执行方法
      date: new Date(), // 保存日期
      dateString: "" // 日期字符串模式
    };
  },
  computed: {
    ...mapState(["stories"]) // 新闻列表
  },
  created() {
    // 初始化日期
    this.initDate();
    // 首次进来获取数据
    this.fetchData();
    // 派发父组件下拉刷新的方法
    this.$on("refresh", () => {
      this.refreshData();
    });
  },
  methods: {
    // 初始化日期
    initDate() {
      this.changeDateString();
    },
    // 获取新闻数据
    fetchData() {
      getIndexNews({}).then(response => {
        let stories = {
          newsList: response.data.stories,
          date: response.data.date
        };
        // let ids = stories.newsList.map(story => story.id);
        this.$store.dispatch("addNews", {
          stories: stories
          // ids: ids
        });
      });
    },
    // 根据日期获取更多新闻数据
    fetchMoreData() {
      getMoreIndexNews(this.dateString, {}).then(response => {
        console.log("加载出更多数据啦!");
        let stories = {
          newsList: response.data.stories,
          date: response.data.date
        };
        console.log(stories);
        // let ids = stories.newsList.map(story => story.id);
        this.$store.dispatch("addNews", {
          stories: stories
          // ids: ids
        });
        // 加载数据关闭加载提示框
        Indicator.close();
        this.decreaseDate();
      });
      this.loading = false;
    },
    // 将日期转变成String类型(201111)
    getDateString(date) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      return year + month + day;
    },
    // 转变日期String类型
    changeDateString() {
      this.dateString = this.getDateString(this.date);
    },
    // 将日期推前一天
    decreaseDate() {
      this.date.setDate(this.date.getDate() - 1);
      this.changeDateString();
    },
    // 加载更多新闻数据
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
    // 输出详细日期
    changeDateType(date) {
      console.log(date);
      let today = this.getDateString(new Date());
      console.log("今天" + today);
      if (date == today) {
        return "今天";
      } else {
        let years = date.slice(0, 4), // 年
          month = date.slice(4, 6), // 月
          dates = date.slice(6); // 日
        let _date = new Date(years, month, dates); // 指定日期转换
        let _day = _date.getDay();
        switch (_day) {
          case 0:
            _day = "星期日";
            break;
          case 1:
            _day = "星期一";
            break;
          case 2:
            _day = "星期二";
            break;
          case 3:
            _day = "星期三";
            break;
          case 4:
            _day = "星期四";
            break;
          case 5:
            _day = "星期五";
            break;
          case 6:
            _day = "星期六";
            break;
        }
        let dateString = month + "月" + dates + "日" + " " + _day;
        return dateString;
      }
    },
    // 刷新数据
    refreshData() {
      // 刷新数据
      this.$store.dispatch("refreshNews");

      this.$nextTick(() => {
        this.fetchData();
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/components/NewList';
</style>
