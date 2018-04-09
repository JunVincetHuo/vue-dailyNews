export default ({
  install(Vue,option){

    // 修改知乎图片链接，因为会403
    Vue.prototype.attachImageUrl = function(srcUrl){
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, "https://images.weserv.nl/?url=p");
      }
    }
  }
})
