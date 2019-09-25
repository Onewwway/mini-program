Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 显示
    rightSlideShow: {
      type: Boolean,
      value: true,
      observer(newVal, oldVal, changedPath) {}
    },
    cover: {
      type: String,
      value: "cover"
    },
    slideList: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    slideHandler() {// 控制弹出层显示隐藏
      this.setData({
        rightSlideShow: !this.data.rightSlideShow,
        cover: ""
      })
    },
    cancel: function(e){
      this.slideHandler();
      this.triggerEvent("_cancel");
    },
    // 出现蒙层禁止滚动，真机上才能实现
    move: function (e) {

    },
    // 点击蒙层，清空一级菜单被选中后样式
    clear: function () {
      this.setData({
        rightSlideShow: false,
        cover: ""
      });
      this.triggerEvent("_cancel");
    },
    tapSubMenu: function(e){
      let _this = this;
      // 获取当前显示的二级菜单标识
      let { dataset } = e.currentTarget;
      this.triggerEvent("_tapSubMenu", dataset);
    },
    define: function () {
      this.triggerEvent("_define");
    }
  }
})
