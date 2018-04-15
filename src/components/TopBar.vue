<template>
  <header class="topbar">
    <i class="iconfont icon-daohang nav-icon" @click="toggleNav"></i>
    <span class="topbar-tag">{{topBarName}}</span>
  </header>
</template>

<script>
export default {
  name:'topBar',
  props:[
    'topBarName'
  ],
  methods: {
    toggleNav() {
      this.$emit("toggleNav",true);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/components/TopBar.styl';
</style>


